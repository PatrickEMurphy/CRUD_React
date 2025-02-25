import React from 'react';
import { useState, useEffect } from 'react';

function ExamenT5() {
    const [recetas, setRecetas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/recetas')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setRecetas(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Lista de Recetas</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {recetas.map((receta) => (
                    <div key={receta.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', width: '40%' }}>
                        <img src={receta.image} alt={receta.name} style={{ width: '100%', borderRadius: '8px' }} />
                        <h3>{receta.name}</h3>
                        <p><strong>Dificultad:</strong> {receta.difficulty || 'Desconocido'}</p>
                        <p><strong>Tiempo de cocción:</strong> {receta.cookTimeMinutes} min</p>
                        <button 
                            onClick={() => alert(`Ver detalles de la receta ${receta.id}`)} 
                            style={{ padding: '10px', marginTop: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}
                        >
                            Ver Detalles
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExamenT5;
