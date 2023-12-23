// Calculadora de promedios escolares

let resultado1Trimestre, resultado2Trimestre, resultado3Trimestre
let promedio1, promedio2, promedio3
let numeroAlumnos = 3
class alumno {
    constructor (nombre, edad, nacionalidad, dni, promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.dni = dni;
        this.promedio = promedio
    }
}
// Alumnos ya registrados
const alumno1 = new alumno("Thomas Rodriguez", 18, "Argentino", 44971946, 8)
const alumno2 = new alumno("Lisandro Correa", 17, "Argentino", 44979302, 9,5) 
const alumno3 = new alumno("Tomas Galvan", 18, "Argentino", 44985832, 4)
const listaAlumnos = [alumno1, alumno2, alumno3]
let nombreAlumno = prompt("Ingrese su nombre y apellido:")
const nuevoAlumno = new alumno(
    nombreAlumno,
    parseInt(prompt("Ingrese su edad:")),
    prompt("Ingrese su nacionalidad:"),
    parseInt(prompt("Ingrese su DNI:")),
    0
)
const promedioMinimo = parseFloat(prompt("Ingrese el promedio con el que aprueba en su institucion: "))


function calificarAlumnoTrimestreUno()
{
    alert("A continuacion ingrese las notas de su primer trimestre")
    let nota1 = parseFloat(prompt("Ingrese su primer nota: "))
    let nota2 = parseFloat(prompt("Ingrese su segunda nota: "))
    let nota3 = parseFloat(prompt("Ingrese su tercera nota: "))

    let resultado1Trimestre = (nota1 + nota2 + nota3) / 3
    return resultado1Trimestre
}
function calificarAlumnoTrimestreDos()
{
    alert("A continuacion ingrese las notas de su segundo trimestre")
    let nota4 = parseFloat(prompt("Ingrese su primer nota: "))
    let nota5 = parseFloat(prompt("Ingrese su segunda nota: "))
    let nota6 = parseFloat(prompt("Ingrese su tercera nota: "))

    let resultado2Trimestre = (nota4 + nota5 + nota6) / 3
    return resultado2Trimestre
}
function calificarAlumnoTrimestreTres()
{
    alert("A continuacion ingrese las notas de su tercer trimestre")
    let nota7 = parseFloat(prompt("Ingrese su primer nota: "))
    let nota8 = parseFloat(prompt("Ingrese su segunda nota: "))
    let nota9 = parseFloat(prompt("Ingrese su tercera nota: "))

    let resultado3Trimestre = (nota7 + nota8 + nota9) / 3
    return resultado3Trimestre
}
let menu = parseInt(prompt("1) Calcular 1 trimestre. 2) Calcular 2 trimestres. 3) Calcular 3 trimestres. 4) Guardar mis datos en la lista de alumnos. 5) Ver perfiles ya registrados. 0) Salir"))
do {
    switch(menu) 
    {
    case 1:
        resultado1Trimestre = calificarAlumnoTrimestreUno()
        promedio1 = resultado1Trimestre
        if (promedio1 >= promedioMinimo) {
            alert("Felicitaciones " + nuevoAlumno.nombre + " esta aprobando su materia con un promedio de: " + promedio1)
        }
        else {
            alert("Lamentablemente esta desaprobando su materia con un promedio de: " + promedio1)
        }
        break
    case 2:
        resultado1Trimestre = calificarAlumnoTrimestreUno()
        resultado2Trimestre = calificarAlumnoTrimestreDos()
        let promedio2 = (resultado1Trimestre + resultado2Trimestre) / 2
        if (promedio2 >= promedioMinimo) {
            alert("Felicitaciones " + nuevoAlumno.nombre + " esta aprobando su materia con un promedio de: " + promedio2)
        }
        else {
            alert("Lamentablemente esta desaprobando su materia con un promedio de: " + promedio2)
        }
        break
    case 3:
        resultado1Trimestre = calificarAlumnoTrimestreUno()
        resultado2Trimestre = calificarAlumnoTrimestreDos()
        resultado3Trimestre = calificarAlumnoTrimestreTres()
        let promedio3 = (resultado1Trimestre + resultado2Trimestre + resultado3Trimestre) / 3;
        if (promedio3 >= promedioMinimo) {
            alert("Felicitaciones " + nuevoAlumno.nombre + " esta aprobando su materia con un promedio de: " + promedio3)
        }
        else {
            alert("Lamentablemente esta desaprobando su materia con un promedio de: " + promedio3)
        }
        break
    case 4:
        listaAlumnos.push(nuevoAlumno)
        numeroAlumnos++
        alert("Sus datos han sido registrados.")
        break
    case 5:
        for (i = 0; i < numeroAlumnos; i++){
            console.log(listaAlumnos[i])
        }
        break
    default:
        alert("Gracias por elegirnos, adios.")
    }
    menu = parseInt(prompt("1) Calcular 1 trimestre. 2) Calcular 2 trimestres. 3) Calcular 3 trimestres. 4) Guardar mis datos en la lista de alumnos. 5) Ver perfiles ya registrados. 0) Salir"))
} while (menu != 0)