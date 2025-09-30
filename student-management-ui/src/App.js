import React, { useState, useEffect } from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import axios from "axios";
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  // Fetch students from backend
  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/students/");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="App">
      <h1>Student Management System</h1>
      <AddStudent refreshStudents={fetchStudents} />
      <StudentList students={students} refreshStudents={fetchStudents} />
    </div>
  );
}

export default App;
