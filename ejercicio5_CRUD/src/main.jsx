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
import AddStudent from './Cursos/AddStudent.jsx'
import EditStudent from './Cursos/EditStudent.jsx'
import DeleteStudent from './Cursos/DeleteStudent.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layoutlet/>}>
        <Route index element={<Inicio/>}></Route>
        <Route path='/centro' element={<><h1>CIFP Cesar (●'◡'●)</h1><Link className='link' to="/">Inicio</Link></>}></Route>
        <Route path='/ciclo' element={<><h1>DAW A (づ￣ 3￣)づ</h1><Link className='link' to="/">Inicio</Link></>}></Route>
        <Route path='/curso' element={<Curso/>}></Route>
        <Route path='/daw2' element={<Daw2/>}></Route>
        <Route path='/grupo/:letra' element={<Grupo/>}></Route>
        <Route path='/daw2/add' element={<AddStudent/>}></Route>
        <Route path='/daw2/edit/:id' element={<EditStudent/>}></Route>
        <Route path='/daw2/delete/:id' element={<DeleteStudent/>}></Route>
        <Route path='*' element={<Navigate to="/" replace="true"/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
