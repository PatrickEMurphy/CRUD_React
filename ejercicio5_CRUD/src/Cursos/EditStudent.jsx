import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { grupos } from './Daw2.jsx'
import { alumnos } from './Grupo';

export default function AddStudent() {
    const {id} = useParams()

    const Alumno = alumnos.filter(alumno => alumno.id == id)[0];

    /*Use state*/
    let changeId, changeNombre, changeGrupo;
    [Alumno.id, changeId] = useState(Alumno.id); 
    [Alumno.nombre, changeNombre] = useState(Alumno.nombre); 
    [Alumno.grupo, changeGrupo] = useState(Alumno.grupo);

    //Función añadir persona
    function addAlumno(persona){
        console.log(persona);
    }

    return (
        <>
        <h2>Editar Alumno</h2>
        <form onSubmit={(e) => { e.preventDefault(); addAlumno(Alumno)}}>
            <div className='mt'>
                <label htmlFor="id">ID</label>
                <input type="text" id="id" className='input' name="id" value={Alumno.id} placeholder='Id' onChange={(e) => changeId(e.target.value)} disabled/>
            </div>
            <div className='mt'>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" className='input' name="nombre" value={Alumno.nombre} placeholder='Nombre' onChange={(e) => changeNombre(e.target.value)} required/>
            </div>
            <div className='mt'>
                <label htmlFor="grupo">Grupo</label>
                <select id="grupo" name="grupo" className='input' value={Alumno.grupo} onChange={(e) => changeGrupo(e.target.value)} required>
                    <option value="" disabled>Selecciona un grupo</option>
                    {grupos.map(grupo => <option key={grupo} value={grupo}>Grupo {grupo}</option>)}
                </select>
            </div>
            <button className='link' type="submit">Enviar</button>
        </form>
        </>
    )
}