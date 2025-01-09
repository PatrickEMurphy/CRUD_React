import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useOutletContext } from 'react-router-dom';
import { grupos } from './Daw2.jsx'

export default function ManageStudent() {
  const { alumnos, addAlumno, editAlumno } = useOutletContext();
  const { id } = useParams();   // Obtenemos el parametro del ID
  const navigate = useNavigate();
  const isEditing = Boolean(id); // Si no existe ID, es que no voy a editar
  const [form, setForm] = useState({
    id: '',
    nombre: '',
    grupo: '',
  });

  // Si estamos editando, cargar los datos del estudiante correspondiente.
  useEffect(() => {
    if (isEditing) {
      const alumnoToEdit = alumnos.find((alumno) => alumno.id === parseInt(id));
      if (alumnoToEdit) {
        setForm(alumnoToEdit);
      } else {
        console.error("Alumno no encontrado");
      }
    }
  }, [id, isEditing, alumnos]);

  // Manejar los cambios en los campos del formulario
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  // Cuando se envía se ejecutan las funciones dependiendo si se edita o ase añade
  function handleSubmit(e) {
    e.preventDefault();

    if (isEditing) {
      editAlumno(form); // Editar el alumno existente
    } else {
      addAlumno({ ...form, id: parseInt(form.id) }); // Agregar un nuevo alumno
    }

    navigate(-1); // Se navega a la página anterior en la que estaba
  }

  return (
    <>
      <h2>{isEditing ? "Editar Alumno" : "Añadir Alumno"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mt">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            name="id"
            className="input"
            value={form.id}
            placeholder="Id"
            onChange={handleChange}
            required
            disabled={isEditing} // Deshabilitar el ID si estamos editando
          />
        </div>
        <div className="mt">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="input"
            value={form.nombre}
            placeholder="Nombre"
            onChange={handleChange} // Cambiamos el estado si se cambia
            required
          />
        </div>
        <div className="mt">
          <label htmlFor="grupo">Grupo</label>
          <select id="grupo" name="grupo" className="input" value={form.grupo} onChange={handleChange} required>
            <option value="" disabled>
              Selecciona un grupo
            </option>
            {grupos.map((grupo) => ( // Se cargan los grupos que existen
              <option key={grupo} value={grupo}>
                Grupo {grupo}
              </option>
            ))}
          </select>
        </div>
        <button className="link" type="submit">
          {isEditing ? "Guardar Cambios" : "Enviar" /* Cambia el mensaje dependiendo de si se edita o se añade */}
        </button>
      </form>
    </>
  );
}
