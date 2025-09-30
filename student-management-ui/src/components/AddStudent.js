import React, { useState } from "react";
import axios from "axios";

const AddStudent = ({ refreshStudents }) => {
  const [student, setStudent] = useState({
    name: "",
    roll_number: "",
    course: "",
    marks: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/students/", {
        ...student,
        marks: parseFloat(student.marks) // ensure marks is a number
      });
      alert("Student added successfully!");
      setStudent({ name: "", roll_number: "", course: "", marks: "" });
      refreshStudents(); // refresh the list in parent
    } catch (error) {
      console.error("Error adding student:", error);
      alert(error.response?.data?.detail || "Error adding student");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
      <input type="text" name="roll_number" placeholder="Roll Number" value={student.roll_number} onChange={handleChange} required />
      <input type="text" name="course" placeholder="Course" value={student.course} onChange={handleChange} required />
      <input type="number" name="marks" placeholder="Marks" value={student.marks} onChange={handleChange} required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
