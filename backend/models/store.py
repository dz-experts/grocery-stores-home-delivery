from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, TIMESTAMP
from sqlalchemy.orm import relationship

from ._base import Base


class Store(Base):

    __tablename__ = "stores"

    id = Column(Integer, primary_key=True)

    name = Column(String, index=True)

    phone_numbers = Column(String)

    open_time = Column(TIMESTAMP(timezone=False))
    close_time = Column(TIMESTAMP(timezone=False))

    longitude = Column(String)
    latitude = Column(String)

    description = Column(String, index=True)

    # owner_id = Column(Integer, ForeignKey("user.id"))

    # owner = relationship("User", back_populates="stores")
