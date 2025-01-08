import React from 'react'
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { alumnos } from './Grupo';

export default function DeleteStudent() {
    const {id} = useParams()
    const navigate = useNavigate();
    const Alumno = alumnos.filter(alumno => alumno.id == id)[0];

    function handleDelete() {
        //deletePersona(Alumno.id);
        console.log(Alumno);
        navigate(`/grupo/${Alumno.grupo}`);
    }
    
    return (
        <>
        <h2 className='mb'>¿Eliminar Alumno?</h2>
        <form onSubmit={(e) => { e.preventDefault(); /*aaaaaaaaaa*/}}>
            <p className='bb mt'><strong>ID</strong></p>
            <p>{Alumno.id}</p>
            <p className='bb mt'><strong>NOMBRE</strong></p>
            <p>{Alumno.nombre}</p>
            <p className='bb mt'><strong>GRUPO</strong></p>
            <p>{Alumno.grupo}</p>
            <button className='link' type="submit" onClick={handleDelete}>Enviar</button>
        </form>
        </>
    )
}