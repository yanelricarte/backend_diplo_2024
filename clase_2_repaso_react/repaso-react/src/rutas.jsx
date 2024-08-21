import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Contactos from "./paginas/Contactos";
import Sobre from "./paginas/Sobre";

function Rutas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default Rutas;
