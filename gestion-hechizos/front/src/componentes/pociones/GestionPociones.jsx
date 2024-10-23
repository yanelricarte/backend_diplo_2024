import { useState, useEffect } from "react";
import './Pociones.css';
import ListaDePociones from "./ListaDePociones";
import FormularioDePociones from "./FormularioDePociones";

const GestionPociones = () =>{
  const [pociones, setPociones] = useState([]);

  // Carga inicial de las pociones desde localStorage al montar el componente
  useEffect(() => {
    const pocionesGuardadas = JSON.parse(localStorage.getItem('pociones'));
    if (pocionesGuardadas) {
      setPociones(pocionesGuardadas);
    }
  }, []);

  // Guarda las pociones en localStorage cada vez que cambia el estado de pociones
  useEffect(() => {
    localStorage.setItem('pociones', JSON.stringify(pociones))
  }, [pociones]);


  //Marcar una poción como completada o no completada
  const completarPocion = (id) => {
    const nuevasPociones = pociones.map((pocion) =>
    pocion.id === id ? { ...pocion, completada: !pocion.completada } : pocion
    );
    setPociones(nuevasPociones);
};

// Eliminar una poción 
const eliminarPocion = (id) => {
  const nuevasPociones = pociones.filter((pocion) => pocion.id !== id);
  setPociones(nuevasPociones);
};

  // Función para agregar una nueva poción a la lista
  const agregarPocion = (nombre) => {
    const nuevaPocion = {
      id: Date.now(), // Genera un ID único basado en el tiempo actual
      nombre,
      completada: false
    };
    // Actualiza el estado de pociones agregando la nueva poción
    setPociones([...pociones, nuevaPocion]);
  }
  return(
    <div className="contenedor-pociones">
      <h1 className="titulo"> Gestión de Pociones en Hogwarts</h1> 
      {/* Componente ListaDePociones que muestra todas las pociones */}
      <ListaDePociones 
      pociones={pociones}
      completarPocion={completarPocion}
      eliminarPocion={eliminarPocion}
      
      />
      {/* Componente FormularioDePociones para agregar nuevas pociones */}
      <FormularioDePociones agregarPocion={agregarPocion} />
    </div>
  )
}

export default GestionPociones;
