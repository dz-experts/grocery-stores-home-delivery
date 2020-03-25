from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from core import get_app_settings

settings = get_app_settings()

engine = create_engine(settings.sqlalchemy_database_url)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
