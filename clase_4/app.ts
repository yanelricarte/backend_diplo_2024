//Clases
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
  mostraInformacion(): void {
    const div = document.getElementById("persona");
    if (div) {
      div.innerHTML = `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años `;
    }
  }
}

class Curso {
  nombre: string;
  codigo: string;
  horas: number;

  constructor(nombre: string, codigo: string, horas: number) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.horas = horas;
  }

  mostrarDetalles(): string {
    return `Curso: ${this.nombre}, Código ${this.codigo}, Horas: ${this.horas} `;
  }
}

//Clase Estudiantes
class Estudiante {
  nombre: string;
  matricula: number;
  cursos: Curso[] = [];

  constructor(nombre: string, matricula: number) {
    this.nombre = nombre;
    this.matricula = matricula;
  }
  inscribirCurso(curso: Curso): void {
    this.cursos.push(curso);
  }

  mostrarInformacion(): void {
    const div = document.getElementById("estudiante");
    if (div) {
      div.innerHTML += `<h3>${this.nombre} Matricula ${this.matricula} </h3> `;
      div.innerHTML += `Cursos Inscriptos <br> `;
      this.cursos.forEach((curso) => {
        div.innerHTML += curso.mostrarDetalles();
      });
    }
  }
}

//Clase Profesor (hereda de estudiante)
class Profesor extends Estudiante {
  departamento: string;

  constructor(nombre: string, matricula: number, departamento: string) {
    super(nombre, matricula);
    this.departamento = departamento;
  }

  mostrarInformacion(): void {
    const div = document.getElementById("profesores");
    if (div) {
      div.innerHTML += `<h3>${this.nombre} Matrícula ${this.matricula}, Departamento ${this.departamento} </h3> `;
      div.innerHTML += `Cursos que dicta <br> `;
      this.cursos.forEach((curso) => {
        div.innerHTML += curso.mostrarDetalles();
      });
    }
  }
}

//Instancias y llamadas a métodos

const persona1 = new Persona("Cosme", 35);
persona1.mostraInformacion();

const cursoEstadistica = new Curso("Estadística", "EST203", 30);
const cursoMatematica = new Curso("Matematica", "MAT001", 40);

//Estudiantes
const estudiante1 = new Estudiante("Pepe Fulano", 12345);
const estudiante2 = new Estudiante("Pepa Fulana", 67890);
const estudiante3 = new Estudiante("Tota Fulanita", 12122);

estudiante1.inscribirCurso(cursoEstadistica);
estudiante2.inscribirCurso(cursoMatematica);
estudiante3.inscribirCurso(cursoEstadistica);
estudiante3.inscribirCurso(cursoMatematica);

estudiante1.mostrarInformacion();
estudiante2.mostrarInformacion();
estudiante3.mostrarInformacion();


//Profesores

const profesor1 = new Profesor("Cosme Fulana", 12345, 'Ciencias Naturales');
const profesor2 = new Profesor("Ema Fulana", 67890, 'Matemática');

profesor1.inscribirCurso(cursoEstadistica);
profesor2.inscribirCurso(cursoMatematica);

profesor1.mostrarInformacion();
profesor2.mostrarInformacion();
