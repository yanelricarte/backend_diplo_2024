var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Clases
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.mostraInformacion = function () {
        var div = document.getElementById("persona");
        if (div) {
            div.innerHTML = "Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os ");
        }
    };
    return Persona;
}());
var Curso = /** @class */ (function () {
    function Curso(nombre, codigo, horas) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.horas = horas;
    }
    Curso.prototype.mostrarDetalles = function () {
        return "Curso: ".concat(this.nombre, ", C\u00F3digo ").concat(this.codigo, ", Horas: ").concat(this.horas, " ");
    };
    return Curso;
}());
//Clase Estudiantes
var Estudiante = /** @class */ (function () {
    function Estudiante(nombre, matricula) {
        this.cursos = [];
        this.nombre = nombre;
        this.matricula = matricula;
    }
    Estudiante.prototype.inscribirCurso = function (curso) {
        this.cursos.push(curso);
    };
    Estudiante.prototype.mostrarInformacion = function () {
        var div = document.getElementById("estudiante");
        if (div) {
            div.innerHTML += "<h3>".concat(this.nombre, " Matricula ").concat(this.matricula, " </h3> ");
            div.innerHTML += "Cursos Inscriptos <br> ";
            this.cursos.forEach(function (curso) {
                div.innerHTML += curso.mostrarDetalles();
            });
        }
    };
    return Estudiante;
}());
//Clase Profesor (hereda de estudiante)
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(nombre, matricula, departamento) {
        var _this = _super.call(this, nombre, matricula) || this;
        _this.departamento = departamento;
        return _this;
    }
    Profesor.prototype.mostrarInformacion = function () {
        var div = document.getElementById("profesores");
        if (div) {
            div.innerHTML += "<h3>".concat(this.nombre, " Matr\u00EDcula ").concat(this.matricula, ", Departamento ").concat(this.departamento, " </h3> ");
            div.innerHTML += "Cursos que dicta <br> ";
            this.cursos.forEach(function (curso) {
                div.innerHTML += curso.mostrarDetalles();
            });
        }
    };
    return Profesor;
}(Estudiante));
//Instancias y llamadas a métodos
var persona1 = new Persona("Cosme", 35);
persona1.mostraInformacion();
var cursoEstadistica = new Curso("Estadística", "EST203", 30);
var cursoMatematica = new Curso("Matematica", "MAT001", 40);
//Estudiantes
var estudiante1 = new Estudiante("Pepe Fulano", 12345);
var estudiante2 = new Estudiante("Pepa Fulana", 67890);
var estudiante3 = new Estudiante("Tota Fulanita", 12122);
estudiante1.inscribirCurso(cursoEstadistica);
estudiante2.inscribirCurso(cursoMatematica);
estudiante3.inscribirCurso(cursoEstadistica);
estudiante3.inscribirCurso(cursoMatematica);
estudiante1.mostrarInformacion();
estudiante2.mostrarInformacion();
estudiante3.mostrarInformacion();
//Profesores
var profesor1 = new Profesor("Cosme Fulana", 12345, 'Ciencias Naturales');
var profesor2 = new Profesor("Ema Fulana", 67890, 'Matemática');
profesor1.inscribirCurso(cursoEstadistica);
profesor2.inscribirCurso(cursoMatematica);
profesor1.mostrarInformacion();
profesor2.mostrarInformacion();
