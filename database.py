from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

# Database URL for SQLite
SQLALCHEMY_DATABASE_URL = "sqlite:///./students.db"

# Create engine
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# Create session local class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for models
Base = declarative_base()

# Dependency helper to get DB session (optional, can be imported in main.py)
def get_db() -> Session:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
