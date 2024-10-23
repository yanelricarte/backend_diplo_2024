import './Seccion.css';
import hogwarts from '../../assets/img/hogwarts.jpg';
import Boton from '../boton/Boton';

function Seccion() {
  const handleClicEnBoton = () =>{
    alert ('Hiciste click en el botón');
  }
  return(
  <section className="seccion"> 
  <h2> Información sobre Hogwarts</h2>
  <p> La escuela de magia y hechiceria de Hogwarts es un lugar mágico donde los jóvenes magos y brujas aprenden a dominar sus poderes.</p>
  <img src={hogwarts} alt="Hogwarts" />

  <Boton color="pink" texto = "Leer más" onClick={handleClicEnBoton} />

  <Boton className="boton" texto = "Comprar" onClick={handleClicEnBoton} />



  </section>
  )
}

export default Seccion;