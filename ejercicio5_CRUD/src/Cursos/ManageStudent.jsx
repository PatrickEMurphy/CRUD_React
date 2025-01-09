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

  const [errors, setErrors] = useState({}); // Almacena los errores de cada campo
  const [IDerror, setError] = useState(''); // Para almacenar el error del ID

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

    // Validar si el ID ya existe
    if (name === 'id' && !isEditing) {
      const idExists = alumnos.some((alumno) => alumno.id === parseInt(value));
      if (idExists) {
        setError('Este ID ya existe');
      } else {
        setError('');
      }
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    // Limpiar errores al escribir
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  }

  // Cuando se envía se ejecutan las funciones dependiendo si se edita o ase añade
  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    // Validar campos vacíos
    if (!form.id) newErrors.id = 'El ID es obligatorio';
    if (!form.nombre) newErrors.nombre = 'El nombre es obligatorio';
    if (!form.grupo) newErrors.grupo = 'Debes seleccionar un grupo';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (IDerror) return; // Si el ID está duplicado, no permitir envío

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
      <form onSubmit={handleSubmit} noValidate>
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
          {errors.id && <p className="error">{errors.id}</p>}
          {IDerror && <p className="error">{IDerror}</p>}
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
          {errors.nombre && <p className="error">{errors.nombre}</p>}
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
          {errors.grupo && <p className="error">{errors.grupo}</p>}
        </div>
        <button className="link" type="submit">
          {isEditing ? "Guardar Cambios" : "Enviar" /* Cambia el mensaje dependiendo de si se edita o se añade */}
        </button>
      </form>
    </>
  );
}
