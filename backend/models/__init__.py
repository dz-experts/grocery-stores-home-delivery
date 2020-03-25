from .store import Store, Base
from db import engine

Base.metadata.create_all(bind=engine)
