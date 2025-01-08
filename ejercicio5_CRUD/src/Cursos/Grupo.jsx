import React from 'react'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export const alumnos = [
    {id: 1, grupo: "A", nombre: "Juan"},
    {id: 2, grupo: "A", nombre: "Wan"},
    {id: 3, grupo: "B", nombre: "Cain"},
    {id: 4, grupo: "B", nombre: "Pedro"},
    {id: 5, grupo: "B", nombre: "Eva"},
]

export default function Grupo() {
  const {letra} = useParams() 

  const [alumnosPapa, setAlumnos] = useState(alumnos);

  function addPersona(alumnoAgregado) {
    setAlumnos((prevAlumnos) => [...prevAlumnos, alumnoAgregado]);
  }

  function editPersona(alumnoEditado) {
    setAlumnos((prevAlumnos) =>
        prevAlumnos.map((alumno) =>
          alumno.id === alumnoEditado.id ? alumnoEditado : alumno
        )
      );
  }

  function deletePersona(alumnoEliminado) {
    setAlumnos((prevAlumnos) => prevAlumnos.filter(alumno => alumno.id !== alumnoEliminado.id));
  }

  return (
    <>
        <h3 className='mb'>Alumnos del curso 2º DAW {letra}</h3>
        <table>
            <thead>
                <tr>
                    <th>Alumno</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {    
                    alumnos.filter(alumno => 
                        alumno.grupo == letra
                    ).map((alumno, i) =>
                        <tr key={i} className='listLi'>
                            <td>{alumno.nombre}</td>
                            <td><Link to={`/daw2/edit/${alumno.id}`}>Editar</Link></td>
                            <td><Link to={`/daw2/delete/${alumno.id}`}>Eliminar</Link></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <Link className='link' to={`/daw2/add`}>Añadir alumno</Link>
    </>
  )
}
