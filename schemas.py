from pydantic import BaseModel

class StudentBase(BaseModel):
    name: str
    roll_number: str
    course: str
    marks: float

class StudentCreate(StudentBase):
    pass

class Student(StudentBase):
    id: int

    class Config:
        orm_mode = True
