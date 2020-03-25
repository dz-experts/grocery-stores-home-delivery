from typing import List

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from models import Store
from schemas import StoreCreate, StoreUpdate


from ._base import CRUDBase


class CRUDStore(CRUDBase[Store, StoreCreate, StoreUpdate]):
    pass


store_crud = CRUDStore(Store)
