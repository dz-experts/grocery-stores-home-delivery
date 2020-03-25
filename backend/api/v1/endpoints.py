from fastapi import APIRouter

from .routers import stores_router

v1_api_router = APIRouter()
v1_api_router.include_router(stores_router, prefix="/stores", tags=["stores"])
