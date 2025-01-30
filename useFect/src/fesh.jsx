import React from 'react'
import { useState, useEffect } from 'react';

function fesh() {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setDogs(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    },[]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Lista de Razas de Perros</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {dogs.slice(0, 10).map((dog) => (
                    <div key={dog.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', width: '250px' }}>
                        <h3>{dog.name}</h3>
                        {dog.reference_image_id ? (
                            <img 
                                src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} 
                                alt={dog.name} 
                                style={{ width: '100%', borderRadius: '8px' }} 
                            />
                        ) : (
                            <p>Imagen no disponible</p>
                        )}
                        <p><strong>Temperamento:</strong> {dog.temperament || 'Desconocido'}</p>
                        <p><strong>Peso:</strong> {dog.weight.metric} kg</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default fesh