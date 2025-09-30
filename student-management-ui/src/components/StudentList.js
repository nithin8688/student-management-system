import React, { useState, useEffect } from "react";
import UpdateStudent from "./UpdateStudent";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch all students
  const fetchStudents = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/students");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Delete student
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    try {
      await fetch(`http://127.0.0.1:8000/students/${id}`, {
        method: "DELETE",
      });
      alert("Student deleted successfully!");
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Open modal for editing
  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Course</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.roll_number}</td>
                <td>{student.course}</td>
                <td>{student.marks}</td>
                <td>
                  <button onClick={() => handleEdit(student)}>Edit</button>
                  <button onClick={() => handleDelete(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal for updating student */}
      {editingStudent && (
        <UpdateStudent
          student={editingStudent}
          onClose={() => setEditingStudent(null)}
          refreshStudents={fetchStudents}
        />
      )}
    </div>
  );
};

export default StudentList;
