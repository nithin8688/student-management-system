from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import models, schemas
from database import engine, get_db

# --------------------------
# Create FastAPI app
# --------------------------
app = FastAPI(title="Student Management System")

# Allow requests from frontend
origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables
models.Base.metadata.create_all(bind=engine)

# --------------------------
# CRUD Endpoints
# --------------------------

# Create a student
@app.post("/students/", response_model=schemas.Student)
def create_student(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    existing = db.query(models.Student).filter(models.Student.roll_number == student.roll_number).first()
    if existing:
        raise HTTPException(status_code=400, detail="Roll number already exists")
    db_student = models.Student(**student.dict())
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

# Get all students
@app.get("/students/", response_model=list[schemas.Student])
def get_students(db: Session = Depends(get_db)):
    return db.query(models.Student).all()

# Get student by ID
@app.get("/students/{student_id}", response_model=schemas.Student)
def get_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    return student

# Update student
@app.put("/students/{student_id}", response_model=schemas.Student)
def update_student(student_id: int, updated_student: schemas.StudentCreate, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    # Check unique roll number
    if student.roll_number != updated_student.roll_number:
        if db.query(models.Student).filter(models.Student.roll_number == updated_student.roll_number).first():
            raise HTTPException(status_code=400, detail="Roll number already exists")
    for key, value in updated_student.dict().items():
        setattr(student, key, value)
    db.commit()
    db.refresh(student)
    return student

# Delete student
@app.delete("/students/{student_id}")
def delete_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    db.delete(student)
    db.commit()
    return {"message": "Student deleted successfully"}

# Find students by course
@app.get("/students/course/{course_name}", response_model=list[schemas.Student])
def get_students_by_course(course_name: str, db: Session = Depends(get_db)):
    students = db.query(models.Student).filter(models.Student.course == course_name).all()
    return students  # returns empty list if none found

# Find students with marks above a certain value
@app.get("/students/marks_above/{min_marks}", response_model=list[schemas.Student])
def get_students_by_marks(min_marks: float, db: Session = Depends(get_db)):
    students = db.query(models.Student).filter(models.Student.marks >= min_marks).all()
    return students  # returns empty list if none found
