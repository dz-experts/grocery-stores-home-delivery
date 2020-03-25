from typing import List

from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session

from api.utils import get_db
from crud import store_crud
from schemas import Store, StoreCreate, StoreUpdate

router = APIRouter()


@router.get("/", response_model=List[Store])
async def read_stores(
    db: Session = Depends(get_db), skip: int = 0, limit: int = 100,
):
    """
    Retrieve all existing stores.
    """
    return store_crud.get_multi(db, skip=skip, limit=limit)


@router.get("/{store_id}")
async def get_store(store_id: int):
    return store_crud.get(store_id)


@router.post("/", response_model=Store, status_code=201)
async def add_store(store: StoreCreate, db: Session = Depends(get_db)):
    return store_crud.create(db, obj_in=store)


@router.put(
    "/{store_id}",
    response_model=Store,
    responses={
        404: {
            "model": Store,
            "description": "Store does not exist, make sure it's not deleted",
        }
    },
)
async def update_store(
    store_id: int, store: StoreUpdate, db: Session = Depends(get_db)
):
    existing_store = store_crud.get(db, store_id)
    if not existing_store:
        return JSONResponse(
            status_code=404,
            content={"message": "Store does not exist, make sure it's not deleted"},
        )
    return store_crud.update(db, db_obj=existing_store, obj_in=store)
