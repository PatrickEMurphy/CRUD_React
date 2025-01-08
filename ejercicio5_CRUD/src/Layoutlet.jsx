import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layoutlet() {
  return (
    <main>
        <nav>
            <Link to={'/'}>Inicio | </Link>
            <Link to={'/centro'}>Centro | </Link>
            <Link to={'/daw2'}>2º DAW</Link>
        </nav>
        <div>
            <Outlet/>
        </div>
    </main>
  )
}
