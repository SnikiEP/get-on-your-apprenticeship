import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/hogwarts.png';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/dummy/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Hogwarts logo" />
        <h1>Liste des élèves en préinscription à Poudlard</h1>
      </header>
      <table className="Students-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Maison</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.name}>
              <td>{student.name}</td>
              <td>{student.house}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
