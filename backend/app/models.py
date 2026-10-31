from sqlalchemy import Column, Integer, String, Numeric, Date, DateTime
from sqlalchemy.sql import func

from app.database import Base


class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(150), nullable=False)

    category = Column(String(50), nullable=False)

    amount = Column(Numeric(12, 2), nullable=False)

    type = Column(String(20), nullable=False)

    date = Column(Date, nullable=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

