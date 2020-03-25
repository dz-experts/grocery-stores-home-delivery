import typer
import uvicorn

from constans import ALEMBIC_INI_PATH
from core import get_app_settings
from db import engine
from models import Base

config = get_app_settings()
app = typer.Typer()


@app.command()
def create_db():
    Base.metadata.create_all(engine)
    from alembic.config import Config
    from alembic import command

    alembic_cfg = Config(ALEMBIC_INI_PATH)
    command.stamp(alembic_cfg, "head")
    typer.echo(
        f"Database {config.postgres_db} at {config.postgres_host} created successfully."
    )


@app.command()
def drop_db_tables():
    db = f"{config.postgres_host}/{config.postgres_db}"
    delete = typer.confirm(f"Are you sure you want to drop all tables ({db}) ?")
    if delete:
        Base.metadata.drop_all(engine)
        typer.echo("Tables dropped.")


@app.command()
def start(reload: bool = True, port: int = 5000):
    uvicorn.run("app:app", host="0.0.0.0", port=port, reload=reload)


if __name__ == "__main__":
    app()
