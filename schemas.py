from pydantic import BaseModel, Field

class StudentBase(BaseModel):
    name: str = Field(..., max_length=100, example="John Doe")
    roll_number: str = Field(..., max_length=20, example="R12345")
    course: str = Field(..., max_length=50, example="Mathematics")
    marks: float = Field(..., ge=0, le=100, example=85.5)  # marks between 0 and 100

class StudentCreate(StudentBase):
    """Schema for creating a student"""
    pass

class Student(StudentBase):
    """Schema for reading a student from DB with ID"""
    id: int

    class Config:
        orm_mode = True
