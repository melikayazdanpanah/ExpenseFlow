from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import transactions

app = FastAPI(
    title="ExpenseFlow API",
    description="Backend API for ExpenseFlow",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(transactions.router)


@app.get("/")
def root():
    return {"message": "Welcome to ExpenseFlow API"}


@app.get("/health")
def health_check():
    return {"status": "healthy"}