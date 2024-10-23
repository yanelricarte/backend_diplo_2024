import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaHechizos = () => {
  const [hechizos, setHechizos] = useState([]);

  useEffect(() => {
    const fetchHechizos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hechizos');
        setHechizos(response.data);
      } catch (error) {
        console.error('Error al obtener los hechizos:', error);
      }
    };

    fetchHechizos();
  }, []);

  return (
    <div>
      <h1>Lista de Hechizos</h1>
      <Link to="/crear" className="crear-hechizo">Crear nuevo hechizo</Link>
      <ul>
        {hechizos.map((hechizo) => (
          <li key={hechizo._id}>
            {hechizo.nombre} - <Link to={`/hechizos/${hechizo._id}`}>Ver Detalle</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaHechizos;