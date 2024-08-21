import Contacto from './Contacto';

function ListaContactos({ contactos }){
  return(
    <div>
      {contactos.map((contacto, index) => (
        <Contacto key={index} nombre={contacto.nombre} telefono={contacto.telefono} />
      ))}
    </div>);
}


export default ListaContactos;