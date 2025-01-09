import React from 'react'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'

export default function Grupo() {
  const {letra} = useParams() 
  const { alumnos, deleteAlumno } = useOutletContext();

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
                            <td><button onClick={() => deleteAlumno(alumno.id)}>Eliminar</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <Link className='link' to={`/daw2/add`}>Añadir alumno</Link>
    </>
  )
}
