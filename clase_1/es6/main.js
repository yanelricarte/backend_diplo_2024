/** ECMAScript 6 (ES6) */
/*

//Templete Strings 
const NOMBRE = 'Pepito';
let edad = 30;
const mensaje = `Hola, mi nombre es ${NOMBRE} y tengo ${edad} años.`;
console.log(mensaje);

//Funciones flechas 

function suma(a, b){
  return a + b;
}

console.log(suma(5, 6))


const sumar = (a, b) => a + b; 
console.log(sumar(15, 6))


//Promesas 
const promesa = new Promise(( resolve, reject) => {
  setTimeout(() =>{
    resolve('Operación completada');
  }, 2000);
})
promesa.then(resultado => {
  console.log(resultado); //"Operación completada" después de 2 segundos 
}).catch(error =>{
  console.error(error);
});


// Async/Await 
async function ejecutarPromesa() {
  try{
    const resultado = await promesa;
    console.log(resultado) //"Operación completada" después de 2 segundos 
  } catch (error){
    console.error(error);
  }
  
}
ejecutarPromesa();
*/
//Simulación de API 
const obtenerDatos = () => {
  return new Promise(( resolve, reject) => {
    setTimeout(() => {
      const exito = true; 
      if (exito){
        resolve({data: 'Datos de la API'});
      } else{
        reject('Error al obtener datos');
      }
    }, 2000) // simula una espera de 2 segundos
  })
}


const fetchData = async () =>{
  try{
    console.log('Solicitando datos...');
    const resultado = await obtenerDatos();
    console.log('Datos recibidos: ', resultado.data);
  } catch(error){
    console.error('Error: ', error);
  }
} 

fetchData();