import React from 'react'
import { useState} from 'react'
import './StudentGrades.css'


const students = [
  { name: 'Chidi Okafor', score: 75, subject: 'Math' },
  { name: 'Amaka Johnson', score: 45, subject: 'Math' },
  { name: 'Tunde Adeyemi', score: 88, subject: 'Math' },
  { name: 'Ngozi Eke', score: 62, subject: 'Science' },
  { name: 'Femi Alabi', score: 30, subject: 'Science' },
];


const StudentGrades = () => {
    const [filter, setFilter] = useState('All');

const filteredStudents = students.filter(student => {
    if (filter === 'All') {
      return true;
    }
    if (filter === 'Passed') {
      return student.score >= 50;
    }
    if (filter === 'Failed') {
      return student.score < 50;
    }
    return true;
  });

  return (
    <div className="student-grades-container">
      <h1>Student Grades</h1>
      <div className="filter-buttons">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Passed')}>Passed</button>
        <button onClick={() => setFilter('Failed')}>Failed</button>
      </div>
      <ul className="student-list">
        {filteredStudents.map((student, index) => (
          <li key={index} className="student-item">
            <span>{student.name} - {student.subject}: {student.score}</span>
            <span className={student.score >= 50 ? 'pass' : 'fail'}>
              {student.score >= 50 ? 'PASS' : 'FAIL'}
            </span>
          </li>
        ))}
      </ul>
      <div className="total-count">
        Total students: {filteredStudents.length}
      </div>
    </div>
  );
};

export default StudentGrades