import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/hogwarts.png';
import crown from './assets/crown.png';
import defaultImage from './assets/default.png';

function App() {
  const [students, setStudents] = useState([]);
  const [randomStudent, setRandomStudent] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/real/students')
      .then(response => response.json())
      .then(data => {
        const hogwartsStudents = data.filter(student => student.hogwartsStudent);
        setStudents(hogwartsStudents);
        if (hogwartsStudents.length) {
          setRandomStudent(hogwartsStudents[Math.floor(Math.random() * hogwartsStudents.length)]);
        }
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Hogwarts logo" />
        <h1>Liste des élèves en préinscription à Poudlard</h1>
      </header>
      {randomStudent && (
        <div className="Random-student">
          <img src={crown} alt="Crown" className="Crown-image" />
          <div className="Student-info">
            <img src={randomStudent.image || defaultImage} alt={randomStudent.name} className="Student-image" />
            <h2>{randomStudent.name}</h2>
            <p>Maison : {randomStudent.house}</p>
            <p>Genre : {randomStudent.gender}</p>
            <p>Ascendance : {randomStudent.ancestry}</p>
          </div>
        </div>
      )}
      <table className="Students-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Nom</th>
            <th>Maison</th>
            <th>Genre</th>
            <th>Ascendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td><img src={student.image || defaultImage} alt={student.name} className="Student-image" /></td>
              <td>{student.name}</td>
              <td>{student.house}</td>
              <td>{student.gender}</td>
              <td>{student.ancestry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
