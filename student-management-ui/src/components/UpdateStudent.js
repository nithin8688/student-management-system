import React, { useState, useEffect } from "react";
import "./UpdateStudent.css";

const UpdateStudent = ({ student, onClose, refreshStudents }) => {
  const [updatedStudent, setUpdatedStudent] = useState({
    name: "",
    roll_number: "",
    course: "",
    marks: ""
  });

  // Prefill form when student data is received
  useEffect(() => {
    if (student) {
      setUpdatedStudent(student);
    }
  }, [student]);

  // Handle input changes
  const handleChange = (e) => {
    setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
  };

  // Submit updated data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://127.0.0.1:8000/students/${student.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedStudent),
      });
      alert("Student updated successfully!");
      refreshStudents();  // Refresh parent list
      onClose();          // Close modal
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  // If no student, don’t show modal
  if (!student) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Update Student</h3>
        <form onSubmit={handleSubmit}>
          {/* Row 1: Name and Roll Number */}
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={updatedStudent.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="roll_number"
              placeholder="Roll Number"
              value={updatedStudent.roll_number}
              onChange={handleChange}
              required
            />
          </div>

          {/* Row 2: Course and Marks */}
          <div className="form-row">
            <input
              type="text"
              name="course"
              placeholder="Course"
              value={updatedStudent.course}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="marks"
              placeholder="Marks"
              value={updatedStudent.marks}
              onChange={handleChange}
              required
            />
          </div>

          {/* Buttons */}
          <div className="modal-buttons">
            <button type="submit">Update</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
