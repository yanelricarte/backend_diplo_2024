/** Validación formulario con JS */

//console.log(document.getElementById('registroForm'))


document
.getElementById("registroForm")
.addEventListener("submit", function(event){
  event.preventDefault(); // Prevenir el envio del formualrio por defecto
  validarFormulario(); //LLamar a la función de validación 
});


function validarFormulario(){
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let password = document.getElementById("password").value;
  let repetirPassword = document.getElementById("repetirPassword").value;

  let valid = true; // variable para indicar si el formulario es válido

//console.log(nombre, apellido, password, repetirPassword);

//Validar que no este vacío 
if (nombre == ""){
  document.getElementById("errorNombre").innerText = "El nombre es obligatorio";
  valid = false;
} else{
  document.getElementById("errorNombre").innerText = "";
}

//Validad que el apellido no esre vacío
if (apellido == ""){
  document.getElementById("errorApellido").innerText = "El apellido es obligatorio";
  valid = false;
} else{
  document.getElementById("errorApellido").innerText = "";
}

if (password !== repetirPassword){
  document.getElementById("errorRepetirPassword").innerText = "Las contraseñas no coinciden";
  valid = false;
} else{
  document.getElementById("errorRepetirPassword").innerText = "";
}

//Mostrar un mensaje si el formualrio es válido
if(valid){
  alert("Formulario enviado correctamente");
}


}
