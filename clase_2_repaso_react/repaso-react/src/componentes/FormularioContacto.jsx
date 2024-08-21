import { useState } from 'react';
import '../estilos/formulario.css';

function FormularioContacto({ agregarContacto }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    agregarContacto({ nombre, telefono });
    setNombre('');
    setTelefono('');
  };

  return (
    <div className='form-container'>
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <button type="submit">Agregar Contacto</button>
    </form></div>
  );
}

export default FormularioContacto;