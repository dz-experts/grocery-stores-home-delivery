from ._base import BaseSchema


class Store(BaseSchema):
    id: str
    name: str
    phone_numbers: str
    longitude: str = None
    latitude: str = None

    class Config:
        fields = {"store_id": "id"}


class StoreCreate(BaseSchema):
    name: str
    phone_numbers: str
    longitude: str = None
    latitude: str = None


class StoreUpdate(BaseSchema):
    name: str = None
    phone_numbers: str = None
    longitude: str = None
    latitude: str = None
