from typing import List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from starlette.requests import Request
from starlette.responses import RedirectResponse

from db import SessionLocal
from api.v1.endpoints import v1_api_router
from core import get_app_settings


def create_app() -> FastAPI:
    app_settings = get_app_settings()

    server = FastAPI(
        title=app_settings.project_name,
        openapi_url=app_settings.openapi_route,
        debug=app_settings.debug,
    )

    @server.middleware("http")
    async def db_session_middleware(request: Request, call_next):
        request.state.db = SessionLocal()
        response = await call_next(request)
        request.state.db.close()
        return response

    # Enable CORS
    server.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @server.get("/", include_in_schema=False)
    def redirect_to_docs() -> RedirectResponse:
        return RedirectResponse("/docs")

    # @server.on_event("startup")
    # async def connect_to_database() -> None:
    #     database = get_database()
    #     if not database.is_connected:
    #         await database.connect()

    # @server.on_event("shutdown")
    # async def shutdown() -> None:
    #     database = get_database()
    #     if database.is_connected:
    #         await database.disconnect()
    server.include_router(v1_api_router, prefix=app_settings.api_v1_route)
    # setup_api(
    #     server, app_settings, use_session_middleware=app_settings.use_session_middleware
    # )
    # setup_openapi_schemas(server)
    # add_timing_middleware(server, exclude="StaticFiles")
    return server
