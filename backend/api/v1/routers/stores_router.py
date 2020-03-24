from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from api.utils import get_db
from crud import store_crud
from schemas import Store

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


# @router.put(
#     "/{item_id}",
#     tags=["custom"],
#     responses={403: {"description": "Operation forbidden"}},
# )
# async def update_item(item_id: str):
#     if item_id != "foo":
#         raise HTTPException(status_code=403, detail="You can only update the item: foo")
#     return {"item_id": item_id, "name": "The Fighters"}
