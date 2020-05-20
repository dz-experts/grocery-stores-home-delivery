from setuptools import setup

cli_name = "mendarkom"

requirements = [
    "fastapi==0.52.0",
    "SQLAlchemy==1.3.16",
    "alembic==1.4.2",
    "psycopg2-binary==2.8.5",
    "typer==0.1.0",
    "orjson==3.0.1",
    "uvicorn==0.11.3",
]

dev_dependencies = ["pytest", "python-dotenv"]

setup(
    name=cli_name,
    version="0.1",
    py_modules=["cli"],
    license="MIT",
    install_requires=requirements,
    extras_require={"dev": dev_dependencies},
    entry_points=f"""
        [console_scripts]
        {cli_name}=cli.cli:app
    """,
)
