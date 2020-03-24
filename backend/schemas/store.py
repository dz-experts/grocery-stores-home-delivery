from pydantic import BaseModel


class Store(BaseModel):
    id: int
    name: str
    phone_numbers: str
    is_open: bool
    longitude: str
    latide: str


class StoreCreate(Store):
    pass


class StoreUpdate(Store):
    pass
