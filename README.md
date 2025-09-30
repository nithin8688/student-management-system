# Student Management System 

@"
# student-management-system
A FastAPI-based Student Management System with CRUD operations using SQLite. Manage students by adding, viewing, updating, deleting, and filtering via REST API endpoints. Fully testable via Swagger UI.

A simple **Student Management System** backend built using **FastAPI** and **SQLite**.  
It allows you to **add, view, update, delete, and filter students** via REST API endpoints.  

---

## Features
- Add a new student (name, roll number, course, marks)  
- View all students  
- Get student details by ID  
- Update student information  
- Delete a student  
- Filter students by course  
- Filter students with marks above a certain value  
- Fully functional backend with **Swagger UI** for testing  

---

## Tech Stack
- Python 3.12  
- FastAPI  
- SQLAlchemy  
- SQLite  
- Uvicorn (ASGI server)  

---

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/nithin8688/student-management-system.git
cd student-management-system

2. **Create and activate a virtual environment**
```bash
python -m venv venv
.\venv\Scripts\activate

3. **Install dependencies**
```bash
pip install -r requirements.txt

4. **Run the backend server**
```bash
uvicorn main:app --reload

5. **Open Swagger UI in browser**
```bash
http://127.0.0.1:8000/docs


"@ > README.md


---

After that, run:

```bash
git add README.md
git commit -m "Add README.md with project instructions"
git push origin main
