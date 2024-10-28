import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Seccion from './componentes/seccion/Seccion';
import GestionPociones from './componentes/pociones/GestionPociones';
import Menu from './componentes/menu/Menu';
import ListaCasas from './componentes/casas/ListaCasas';
import ListaPersonajes from './componentes/personajes/ListaPersonajes';
import DetallePersonaje from './componentes/personajes/DetallePersonaje'
import ListaHechizos from './componentes/hechizos/ListaHechizos';
import DetalleHechizo from './componentes/hechizos/DetalleHechizo';
import CrearHechizo from './componentes/hechizos/CrearHechizo';
import EditarHechizo from './componentes/hechizos/EditarHechizo';
import Register from './componentes/api/Register';
import Login from './componentes/api/Login';
import { AuthProvider } from './componentes/api/AuthContext';
import Protegida from './componentes/protegida/Protegida';
import ProtectedRoute from './componentes/api/ProtectedRoute';



function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="container">
        <Header />
        <Menu /> {/* Muestra el menú de pestañas */}
        <main>
          <Routes>
            <Route path="/" element={<Seccion />} />
            <Route path="/pociones" element={<GestionPociones />} />
            <Route path="/casas" element={<ListaCasas />} />
            <Route path="/personajes" element={<ListaPersonajes />} />
            <Route path='/DetallePersonaje/:id' element={<DetallePersonaje />} />
            <Route path="/hechizos" element={< ListaHechizos />} />
            <Route path="/crear" element={<CrearHechizo />} />
            <Route path="/hechizos/:id" element={<DetalleHechizo />} />
            <Route path="/editar-hechizo/:id" element={<EditarHechizo />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/protegida" element={<ProtectedRoute element={<Protegida />} />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
