import React from 'react'
import { Link } from 'react-router-dom'

export const grupos = ["A", "B"]

export default function Daw2() {
  return (
    <>
        <h2>Grupos del curso 2º DAW</h2>
        <ul>
            {
            grupos.map(grupo => {
                return  <li key={grupo} className='listLi'>
                            <Link to={`/grupo/${grupo}`}>Grupo 2ºDAW {grupo}</Link>
                        </li>
            })
            }
        </ul>
        <Link className='link' to={`/daw2/add`}>Añadir alumno</Link>
    </>
  )
}
