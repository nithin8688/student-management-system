from sqlalchemy import Column, Integer, String, Float
from database import Base

class Student(Base):
    __tablename__ = "students"

    # Primary key
    id = Column(Integer, primary_key=True, index=True)

    # Student name, max 100 characters
    name = Column(String(100), index=True, nullable=False)

    # Unique roll number, max 20 characters
    roll_number = Column(String(20), unique=True, index=True, nullable=False)

    # Course name, max 50 characters
    course = Column(String(50), index=True, nullable=False)

    # Marks (floating point)
    marks = Column(Float, nullable=False)
