import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { alumnos as initialAlumnos } from './main.jsx';



export default function Layoutlet() {

  const [alumnos, setAlumnos] = useState(initialAlumnos);

  function addAlumno(alumno) {
    setAlumnos((prevAlumnos) => [...prevAlumnos, alumno]);
  }

  function editAlumno(alumnoEditado) {
    setAlumnos((prevAlumnos) =>
      prevAlumnos.map((alumno) =>
        alumno.id === alumnoEditado.id ? alumnoEditado : alumno
      )
    );
  }

  function deleteAlumno(id) {
    setAlumnos((prevAlumnos) =>
      prevAlumnos.filter((alumno) => alumno.id !== id)
    );
  }

  return (
    <main>
        <nav>
            <Link to={'/'}>Inicio | </Link>
            <Link to={'/centro'}>Centro | </Link>
            <Link to={'/daw2'}>2º DAW</Link>
        </nav>
        <div>
            <Outlet context={{ alumnos, addAlumno, editAlumno, deleteAlumno }} />
        </div>
    </main>
  )
}
