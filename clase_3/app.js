var saludo = "Hola mundo";
console.log(saludo);
var nombre = "Cosme";
var edad = 30;
var esActivo = true;
nombre = "Fulano";
var PI = 3.14;
console.log(nombre, PI);
//Funciones TS
//tipo de dato en los parametros
//Parametros opcionales
function greet(name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greet("Harry"));
console.log(greet("Hermione", "Hola"));
function saludar() {
    console.log("Hola, Typescript");
}
saludar();
function sumar(a, b) {
    return a + b;
}
var resultado = sumar(5, 3);
console.log(resultado);
function saludando(nombre, saludo) {
    return saludo ? "".concat(saludo, ", ").concat(nombre) : "Hola ".concat(nombre);
}
console.log(saludando("Pepito"));
console.log(saludando("Pepito", "Buenas tardes"));
//Valores predeterinados
function multiplicar(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
var producto = multiplicar(5);
console.log(multiplicar(5, 4));
console.log(producto);
//Funciones anónimas
var dividir = function (a, b) {
    return a / b;
};
console.log(dividir(10, 2));
//Funciones flecha
var restar = function (a, b) { return a - b; };
console.log(restar(20, 2));
var usuario = {
    nombre: "Pepito",
    edad: 45,
};
//Clases
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.presentarse = function () {
        return "Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    return Persona;
}());
var persona = new Persona("Cosme", 40);
console.log(persona.presentarse());
var GestorUsuarios = /** @class */ (function () {
    function GestorUsuarios() {
        this.usuarios = [];
    }
    GestorUsuarios.prototype.agregarUsuario = function (usuario) {
        this.usuarios.push(usuario);
    };
    GestorUsuarios.prototype.listarUsuarios = function () {
        return this.usuarios;
    };
    return GestorUsuarios;
}());
//Uso de las clases 
var gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario({ nombre: "Cosme", edad: 28 });
gestorUsuarios.agregarUsuario({ nombre: "Fulano", edad: 18 });
gestorUsuarios.agregarUsuario({ nombre: "Fulanito", edad: 51 });
gestorUsuarios.agregarUsuario({ nombre: "Homero", edad: 48 });
console.log("Usuarios: ");
gestorUsuarios.listarUsuarios().forEach(function (usuario) {
    console.log("Nombre: ".concat(usuario.nombre, ", Edad ").concat(usuario.edad, " "));
});
