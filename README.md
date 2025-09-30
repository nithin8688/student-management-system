# Student Management System

A full-stack **Student Management System** with **FastAPI** backend and **React** frontend.  
Allows you to **add, view, and manage student records** with a clean UI.

---

## Features

- Add new students with name, roll number, course, and marks.
- View all students in a list.
- Backend powered by **FastAPI** and **SQLite**.
- Frontend built with **React**.
- Cross-platform, easy to set up and run.

---

## Folder Structure

student_management/
│
├── main.py # FastAPI backend entrypoint
├── models.py # SQLAlchemy models
├── schemas.py # Pydantic schemas
├── database.py # Database connection
├── requirements.txt # Backend dependencies
├── students.db # SQLite database
├── student-management-ui/ # React frontend
│ ├── package.json
│ ├── src/
│ │ ├── App.js
│ │ ├── components/
│ │ │ ├── AddStudent.js
│ │ │ └── StudentList.js
│ │ └── ...
└── README.md


######

---

## Backend Setup (FastAPI)

1. Clone the repository:

```bash
git clone https://github.com/nithin8688/student-management-system.git
cd student-management

#####
2. Create and activate a virtual environment:
```bash
python -m venv venv
venv\Scripts\activate      # Windows
# or
source venv/bin/activate   # Linux / Mac

####
3. Install dependencies:
```bash
pip install -r requirements.txt

####
4. Run the backend server:
```bash
uvicorn main:app --reload
Backend will run at: http://127.0.0.1:8000

Frontend Setup (React)

Navigate to frontend folder:

cd student-management-ui


-----------------------------
  R E A C T   F R O N T E N D
-----------------------------

## Frontend Setup (React)

####
1. Navigate to frontend folder:
```bash
cd student-management-ui

####
```bash
2. Install dependencies:

npm install

####
```bash
3. Start the React frontend:

npm start

####
```bash
4. Frontend will run at: http://localhost:3000

Important: Make sure your backend is running before interacting with the frontend. Axios API calls in the frontend are pointed to http://127.0.0.1:8000/students.



API Endpoints
Method	Endpoint	Description
GET	/students	List all students
POST	/students	Add a new student
GET	/students/{id}	Get student by ID
PUT	/students/{id}	Update student details
DELETE	/students/{id}	Delete student by ID
Notes

SQLite database (students.db) is included for local use.

Make sure Python 3.12+ and Node.js 18+ are installed.

Frontend React code communicates with backend using Axios.







Author

K. Nithin Kumar Reddy
Final Year B.Tech AI, Madanapalle Institute of Technology & Science

GitHub: https://github.com/nithin8688

Email: nithin.dev8688@gmail.com
