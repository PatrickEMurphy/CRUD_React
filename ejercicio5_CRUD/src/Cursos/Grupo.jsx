import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'

export default function Grupo() {
    const [ alumnosF, setAlumnos] = useState([]);
    const { letra } = useParams() 
    const { alumnos, deleteAlumno } = useOutletContext();

    useEffect(() => {
        fetch('http://localhost:3000/alumnos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                return response.json();
            })
            .then(data => {
                let alumnosGrupo = data.filter(alumno => alumno.grupo == letra)
                setAlumnos(alumnosGrupo)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    return (
        <>
            <h1>Con Fetch</h1>
            <h2 className='mb'>Alumnos del curso 2º DAW {letra}</h2>
            <table className='tablaGrupo'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Alumno</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {    
                        alumnosF.map((alumnoF, i) =>
                            <tr key={i} className='listLi'>
                                <td>{alumnoF.id}</td>
                                <td>{alumnoF.nombre}</td>
                                <td><Link to={`/daw2/edit/${alumnoF.id}`}>Editar</Link></td>
                                <td><Link onClick={() => deleteAlumno(alumnoF.id)}>Eliminar</Link></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link className='link' to={`/daw2/add`}>Añadir alumno</Link>


            <h1 style={{marginTop: "1em"}}>Sin Fetch</h1>
            <h2 className='mb'>Alumnos del curso 2º DAW {letra}</h2>
            <table className='tablaGrupo'>
                <thead>
                    <tr>
                        <th>Id</th>
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
                                <td>{alumno.id}</td>
                                <td>{alumno.nombre}</td>
                                <td><Link to={`/daw2/edit/${alumno.id}`}>Editar</Link></td>
                                <td><Link onClick={() => deleteAlumno(alumno.id)}>Eliminar</Link></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link className='link' to={`/daw2/add`}>Añadir alumno</Link>
        </>
    )
}
