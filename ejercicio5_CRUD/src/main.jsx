import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Link} from 'react-router-dom'
import Curso from './Cursos/curso.jsx'
import Inicio from './inicio.jsx'
import Layoutlet from './Layoutlet.jsx'
import Daw2 from './Cursos/Daw2.jsx'
import Grupo from './Cursos/Grupo.jsx'
import ManageStudent from './Cursos/ManageStudent.jsx'



export const alumnos = [
  {id: 1, grupo: "A", nombre: "Juan"},
  {id: 2, grupo: "A", nombre: "Wan"},
  {id: 3, grupo: "A", nombre: "Cain"},
  {id: 4, grupo: "A", nombre: "Pedro"},
  {id: 5, grupo: "A", nombre: "Eva"},
  {id: 6, grupo: "B", nombre: "David"},
  {id: 7, grupo: "B", nombre: "Leslie"},
  {id: 8, grupo: "B", nombre: "Ruth"},
  {id: 9, grupo: "B", nombre: "Evelyn"},
  {id: 10, grupo: "B", nombre: "Papaya"},
]

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layoutlet/>}>
        <Route index element={<Inicio/>}></Route>
        <Route path='/centro' element={<><h1>CIFP Cesar (●'◡'●)</h1><Link className='link' to="/">Inicio</Link></>}></Route>
        <Route path='/ciclo' element={<><h1>Desarrollo de Aplicaciones WEB</h1><Link className='link' to="/">Inicio</Link></>}></Route>
        <Route path='/curso' element={<Curso/>}></Route>
        <Route path='/daw2' element={<Daw2/>}></Route>
        <Route path='/grupo/:letra' element={<Grupo/>}></Route>
        <Route path="/daw2/add" element={<ManageStudent />} />
        <Route path="/daw2/edit/:id" element={<ManageStudent />} />
        <Route path='*' element={<Navigate to="/" replace="true"/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
