import { Link } from "react-router-dom"
import '../estilos/menu.css';

function Menu(){
  return (
    <nav className="menu">
      <ul> 
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/contactos">Contactos</Link></li>
      <li><Link to="/sobre">Sobre Nosotros</Link></li>
      </ul>
    </nav>
  )
}
export default Menu;