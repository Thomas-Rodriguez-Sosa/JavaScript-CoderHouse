// Query Selectors //
const submitCalc = document.querySelector("#submit")
const clear = document.querySelector("#clear")
const input1 = document.querySelector("#input-1")
const input2 = document.querySelector("#input-2")
const input3 = document.querySelector("#input-3")
const listaRegis = document.querySelector("#listaRegis")
const listaAlumnosR = document.querySelector("#listaAlumnosR ul")
const botonLista = document.querySelector("#botonLista")
const tablaResul = document.querySelector("#tablaResul")
let listaAlumnos;
let resultadoInput = 0;
// Fetch //
fetch("/js/calcular.json")
    .then(response => response.json())
    .then(data => {
        mostrarLista(data)
        console.log(data)
    })





submitCalc.addEventListener("click", calcularEmpieza)
clear.addEventListener("click", limpiarEmpieza)
botonLista.addEventListener("click", mostrarLista)

function calcularEmpieza(e) {
    e.preventDefault();
    if (input1.value === "" || input2.value === "" || input3 === "") {
        Toastify({
            text: "Numeros invalidos",
            duration: 2000,
            destination: "#",
            newWindow: false,
            close: true,
            gravity: "bottom", 
            position: "right", 
            stopOnFocus: false, 
            style: {
              background: "red",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    } else {
        resultadoInput = (parseFloat(input1.value) + parseFloat(input2.value) + parseFloat(input3.value)) / 3;
        
        tablaResul.innerHTML += `<th>Promedio Final: ${resultadoInput}</th>`
    }
}

// Functions //
function limpiarEmpieza () {
    tablaResul.remove()
}

function mostrarLista(alumnos) {
    botonLista.innerText = "Ocultar estudiantes recientes"
    if (listaRegis.style.display === "none" || listaRegis.style.display === null || listaRegis.style.display === "") {
        listaRegis.style.display = "block";
        alumnos.forEach(alumno => {
            const li = document.createElement("li")
            li.textContent = `${alumno.nombre} - ${alumno.promedio}`
            listaRegis.appendChild(li)
        }); 
    } else {
        listaRegis.style.display = "none";
        botonLista.innerText = "Mostrar estudiantes recientes"
    }
}
