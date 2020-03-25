from functools import lru_cache
from typing import List

from pydantic import BaseSettings


class APPSettings(BaseSettings):
    api_v1_route: str = "/api/v1"
    openapi_route: str = "/api/v1/openapi.json"

    project_name: str = "Mendarkom API"

    backend_cors_origins_str: str = "*"  # Could be a comma-separated list of origins

    debug: bool = False
    debug_exceptions: bool = False
    disable_superuser_dependency: bool = False
    include_admin_routes: bool = False

    postgres_user: str = "mindarkom"
    postgres_password: str = "mindarkom"
    postgres_db: str = "mindarkom"
    postgres_host: str = "localhost"
    postgres_port: int = 5432

    @property
    def sqlalchemy_database_url(self):
        db = f"{self.postgres_host}:{self.postgres_port}/{self.postgres_db}"
        return f"postgresql://{self.postgres_user}:{self.postgres_password}@{db}"

    @property
    def backend_cors_origins(self) -> List[str]:
        return [x.strip() for x in self.backend_cors_origins_str.split(",") if x]

    class Config:
        env_prefix = ""


@lru_cache()
def get_app_settings() -> APPSettings:
    return APPSettings()  # reads variables from environment
