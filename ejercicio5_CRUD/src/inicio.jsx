import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function inicio() {
    const navegar = useNavigate();
    return (
        <>
            <h1>Hola inicio :3</h1>
            <button className='link' onClick={(e) => navegar('/centro')}>Centro</button>
            <button className='link' onClick={(e) => navegar('/ciclo')}>Ciclo</button>
            <button className='link' onClick={(e) => navegar('/curso')}>Curso</button>
            <button className='link green' onClick={(e) => navegar('/daw2')}>2º DAW</button>
        </>
    )
}
