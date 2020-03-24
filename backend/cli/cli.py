import typer

from constans import ALEMBIC_INI_PATH
from core import get_app_settings
from db import engine
from models import Base
import subprocess

config = get_app_settings()
app = typer.Typer()


@app.command()
def create_db(name: str):
    Base.metadata.create_all(engine)
    from alembic.config import Config
    from alembic import command

    alembic_cfg = Config(ALEMBIC_INI_PATH)
    command.stamp(alembic_cfg, "head")
    typer.echo(
        f"Database {config.postgres_db} at {config.postgres_host} created successfully."
    )


@app.command()
def start(reload: bool = True):
    cmd = ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "5000"]
    if reload:
        cmd.append("--reload")
    subprocess.run(cmd)


if __name__ == "__main__":
    app()
