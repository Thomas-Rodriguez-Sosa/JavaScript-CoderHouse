class Alumno {
    constructor (nombre, edad, nacionalidad, dni, promedio) {
        this.nombre = `${nombre}`;
        this.edad = edad;
        this.nacionalidad = `${nacionalidad}`;
        this.dni = dni;
        this.promedio = promedio;
    }
}
// Alumnos ya registrados //
const alumno1 = new Alumno("Thomas Rodriguez", 18, "Argentino", 44971946, 8)
const alumno2 = new Alumno("Lisandro Correa", 17, "Argentino", 45594408, 9,5) 
const alumno3 = new Alumno("Tomas Galvan", 18, "Argentino", 44985832, 4)
// Array de Alumnos registrados //
const listaAlumnos = [alumno1, alumno2, alumno3]
const submitCalc = document.querySelector("#submit")
const input1 = document.querySelector("#input-1")
const input2 = document.querySelector("#input-2")
const input3 = document.querySelector("#input-3")
const listaRegis = document.querySelector("#listaRegis")
const listaAlumnosR = document.querySelector("#listaAlumnosR ul")
const botonLista = document.querySelector("#botonLista")
localStorage.setItem("listaAlumnos", JSON.stringify(listaAlumnos))
const listaAlumnosJSON = JSON.parse(localStorage.getItem("listaAlumnos"));
let resultadoInput = 0;

submitCalc.addEventListener("click", calcularEmpieza)
botonLista.addEventListener("click", mostrarLista)

function calcularEmpieza(e) {
    e.preventDefault();
    if (input1.value === "" || input2.value === "" || input3 === "") {
        alert ("Debes ingresar numeros validos para continuar")
    } else {
        resultadoInput = (parseFloat(input1.value) + parseFloat(input2.value) + parseFloat(input3.value)) / 3;
        
        alert (`Tu promedio es de: ${resultadoInput}`)
    }
}
function mostrarLista() {
    botonLista.innerText = "Ocultar lista de estudiantes recientes"
    if (listaRegis.style.display === "none" || listaRegis.style.display === "") {
        listaRegis.style.display = "block";
        listaRegis.innerHTML = "";
        for (Alumno of listaAlumnos) {
            listaRegis.innerHTML += `<li class="lista-Item">${Alumno.nombre}</li>`
        }
        listaAlumnosR.append(listaRegis)
    } else {
        listaRegis.style.display = "none";
        botonLista.innerText = "Mostrar estudiantes recientes"
    }
}


