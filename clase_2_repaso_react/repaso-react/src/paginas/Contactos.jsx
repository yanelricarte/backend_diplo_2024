import { useState } from "react";
import FormularioContacto from "../componentes/FormularioContacto";
import ListaContactos from "../componentes/ListaContactos";
import Menu from "../componentes/Menu";

function Contactos() {
  const [contactos, setContactos] = useState([]);

  const agregarContacto = (contacto) => {
    setContactos([...contactos, contacto]);
  };

  return (
    <div>
      <Menu />
      <h1>Lista de Contactos</h1>
      <FormularioContacto agregarContacto={agregarContacto} />
      <ListaContactos contactos={contactos} />
    </div>
  );
}
export default Contactos;
