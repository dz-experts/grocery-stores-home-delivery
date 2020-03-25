import pathlib

HERE = pathlib.Path(__file__).parent.absolute()

FRONTEND_PATH = HERE.parent.joinpath("frontend").absolute()

STATIC_FILES_PATH = str(FRONTEND_PATH.joinpath("public").absolute())

ALEMBIC_INI_PATH = str(HERE.joinpath("alembic.ini"))
