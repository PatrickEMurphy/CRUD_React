import React from 'react'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'

export default function Grupo() {
  const {letra} = useParams() 
  const { alumnos, deleteAlumno } = useOutletContext();

  return (
    <>
        <h2 className='mb'>Alumnos del curso 2º DAW {letra}</h2>
        <table className='tablaGrupo'>
            <thead>
                <tr>
                    <th>Alumno</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {   // Si no hay alumnos muestra un mensaje de no hay alumnos
                    alumnos.filter(alumno => alumno.grupo === letra).length > 0 ? (
                        alumnos
                        .filter(alumno => alumno.grupo === letra)
                        .map((alumno, i) => (
                            <tr key={i} className="listLi">
                            <td>{alumno.nombre}</td>
                            <td>
                                <Link className="edit" to={`/daw2/edit/${alumno.id}`}>Editar</Link>
                            </td>
                            <td>
                                <button className="delete" onClick={() => deleteAlumno(alumno.id)}>Eliminar</button>
                            </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className='nb'>No hay alumnos en este grupo.</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <Link className='link' to={`/daw2/add`}>Añadir alumno</Link>
    </>
  )
}
