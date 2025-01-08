import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function curso() {
  const navegar = useNavigate();
  return (
    <>
        <h1>SEGUNDO CURSO ε=ε=ε=(~￣▽￣)~</h1>
        <button className='link' onClick={(e) => navegar('/')}>Ir a inicio</button>
    </>
  )
}
