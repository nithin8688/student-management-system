from sqlalchemy import Column, Integer, String, Float
from database import Base

class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    roll_number = Column(String, unique=True, index=True, nullable=False)
    course = Column(String, index=True, nullable=False)
    marks = Column(Float, nullable=False)
