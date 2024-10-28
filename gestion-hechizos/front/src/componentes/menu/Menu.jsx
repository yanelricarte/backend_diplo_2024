import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../api/AuthContext";
import './Menu.css';

const Menu = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); 
    alert('Sesión cerrada'); 
  };

  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/pociones">Gestión de Pociones</Link></li>
        <li><Link to="/casas">Casas</Link></li>
        <li><Link to="/personajes">Personajes</Link></li>
        <li><Link to="/hechizos">Hechizos</Link></li>
        <li><Link to="/register">Registro</Link></li>
        <li><Link to="/login">Iniciar sesión</Link></li>
        <li><Link to="/protegida">Sección protegida</Link></li>
        <li><button onClick={handleLogout}>Cerrar sesión</button></li>
      </ul>
    </nav>
  );
}

export default Menu;
