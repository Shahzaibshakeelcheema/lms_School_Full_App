import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from backend
    axios.get('http://localhost:5000/courses')
      .then(res => {
        setCourses(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>LMS School</h1>
      <h2>Courses:</h2>
      <ul>
        {courses.map(course => (
          <li key={course._id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
