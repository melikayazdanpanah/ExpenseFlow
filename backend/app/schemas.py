from datetime import date, datetime
from decimal import Decimal
from typing import Literal

from pydantic import BaseModel, ConfigDict, Field


class TransactionCreate(BaseModel):
    title: str = Field(min_length=1, max_length=150)
    category: str = Field(min_length=1, max_length=50)
    amount: Decimal = Field(gt=0, max_digits=12, decimal_places=2)
    type: Literal["income", "expense"]
    date: date


class TransactionResponse(TransactionCreate):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)