# ExpenseFlow 💸

A personal expense-tracking application built with React, FastAPI, and PostgreSQL. ExpenseFlow aims to provide a clean dashboard for managing transactions and understanding personal spending habits.
## Dashboard Preview

![ExpenseFlow Dashboard](docs/images/doc.png)
## ✨ Features

### Frontend
- React dashboard built with Vite
- Tailwind CSS styling
- Responsive dashboard layout
- Income, expenses, and balance summary cards
- Expense and category charts (currently using sample data)
- Transaction table
- Add transaction modal

### Backend
- FastAPI REST API
- PostgreSQL database
- SQLAlchemy ORM
- Pydantic data validation
- Transaction CRUD endpoints
- CORS configuration for frontend communication

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/transactions/` | Retrieve all transactions |
| POST | `/transactions/` | Create a transaction |
| DELETE | `/transactions/{id}` | Delete a transaction |
| GET | `/health` | Check API health |

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- Recharts
- Axios
- Lucide React

**Backend**
- Python
- FastAPI
- SQLAlchemy
- Pydantic
- PostgreSQL
- Psycopg

## 📁 Project Structure

```text
ExpenseFlow/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   └── services/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   └── schemas.py
│   ├── requirements.txt
│   └── .env.example
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ExpenseFlow.git
cd ExpenseFlow
```

### 2. Backend setup

Create a virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r backend/requirements.txt
```

### 3. PostgreSQL setup

Create a PostgreSQL database and user.

Example:

```sql
CREATE ROLE expenseflow_user WITH LOGIN PASSWORD 'YOUR_PASSWORD';
CREATE DATABASE expenseflow OWNER expenseflow_user;
```

Configure `backend/.env`:

```env
DATABASE_URL=postgresql+psycopg://expenseflow_user:YOUR_PASSWORD@localhost:5433/expenseflow
```

Change the port if your PostgreSQL server uses a different port.

### 4. Create database tables

From the backend directory:

```bash
cd backend
../.venv/bin/python create_tables.py
```

### 5. Start the backend

```bash
../.venv/bin/uvicorn app.main:app --reload
```

Backend:
`http://127.0.0.1:8000`

API documentation:
`http://127.0.0.1:8000/docs`

### 6. Frontend setup

Open another terminal:

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```env
VITE_API_URL=http://127.0.0.1:8000
```

Start the development server:

```bash
npm run dev
```

Frontend:
`http://localhost:5173`

## 🔐 Environment Variables

Never commit actual passwords, database credentials, or secret keys.

Use `.env.example` files to document required configuration without exposing credentials.

## 🚧 Development Roadmap

- [x] React dashboard structure
- [x] FastAPI application
- [x] PostgreSQL connection
- [x] SQLAlchemy transaction model
- [x] Transaction API endpoints
- [x] Pydantic validation schemas
- [ ] Complete frontend and backend integration
- [ ] Dynamic expense and category analytics
- [ ] Edit transactions
- [ ] Category management
- [ ] Budget tracking
- [ ] Search and filtering
- [ ] User authentication
- [ ] Data export
- [ ] Production deployment

## 📌 Project Status

ExpenseFlow is an ongoing personal development project. The backend transaction API and database foundation are implemented. Frontend integration and additional financial analytics are under development.

## 📄 License

This project is currently available for educational and portfolio purposes. A formal license can be added when selected.
