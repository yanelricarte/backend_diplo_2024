import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './hechizos.css';

const DetalleHechizo = () => {
  const { id } = useParams();
  const [hechizo, setHechizo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHechizo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/hechizos/${id}`);
        const data = await response.json();
        setHechizo(data);
      } catch (error) {
        console.error('Error al obtener hechizo:', error);
      }
    };

    fetchHechizo();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/hechizos/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        navigate('/hechizos');
      } else {
        console.error('Error al eliminar hechizo');
      }
    } catch (error) {
      console.error('Error al eliminar hechizo:', error);
    }
  };

  if (!hechizo) return <p>Cargando...</p>;

  return (
    <div className="detalle-hechizo">
      <h2>{hechizo.nombre}</h2>
      <div className="hechizo-info">
        <p><strong>Descripción:</strong> {hechizo.descripcion}</p>
        <p><strong>Nivel:</strong> {hechizo.nivel}</p>
      </div>
      <div className="acciones">
        <Link to={`/editar-hechizo/${hechizo._id}`} className="editar">Editar</Link>
        <button onClick={handleDelete} className="eliminar">Eliminar</button>
      </div>
    </div>
  );
};

export default DetalleHechizo;
