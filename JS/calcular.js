// Query Selectors //
const submitCalc = document.querySelector("#submit")
const clear = document.querySelector("#clear")
const inputNombre = document.querySelector("#input-nombre")
const input1 = document.querySelector("#input-1")
const input2 = document.querySelector("#input-2")
const input3 = document.querySelector("#input-3")
const listaRegis = document.querySelector("#listaRegis")
const listaAlumnosR = document.querySelector("#listaAlumnosR ul")
const botonLista = document.querySelector("#botonLista")
const tablaResul = document.querySelector("#tablaResul")
let signUpBtn = document.querySelector("#signUpBtn")
let signInBtn = document.querySelector("#signInBtn")
let nombreInput = document.querySelector("#nameInput")
let formTitle = document.querySelector("#formTitle")
document.querySelector("#buttonRegis").addEventListener("click", function(){
    document.querySelector(".popup-Form").classList.add("active")
    document.querySelector(".footerIcon").classList.add("invisibleIcon")
});
document.querySelector(".popup-Form .btn-cerrar").addEventListener("click", function(){
    document.querySelector(".popup-Form").classList.remove("active")
    document.querySelector(".footerIcon").classList.remove("invisibleIcon")
});
document.querySelector("#botonBorrar").addEventListener("click", function(e){
    e.stopPropagation();
    localStorage.clear();
    return localStorage.setItem("alumnos", JSON.stringify(alumnos = []))
})

signInBtn.addEventListener("click", function(){
    if (signInBtn.innerHTML == "Iniciar Sesion") {
        nombreInput.style.maxHeight = "0";
        formTitle.innerHTML = "Iniciar Sesion";
        signUpBtn.innerHTML = "Iniciar Sesion";
        signInBtn.innerHTML = "¿No tiene una cuenta? Registrese aqui.";
    } else {
        nombreInput.style.maxHeight = "80px";
        formTitle.innerHTML = "Registrarse";
        signUpBtn.innerHTML = "Registrarse";
        signInBtn.innerHTML = "Iniciar Sesion";
    }
});

submitCalc.addEventListener("click", calcularEmpieza)
clear.addEventListener("click", limpiarEmpieza)
botonLista.addEventListener("click", () => mostrarLista());
listaAlumnosR.addEventListener("click", borrarUltimo)
let resultadoInput = 0;

// Functions //
function listener() {
    document.addEventListener("DOMContentLoaded", () => {
        alumnos = JSON.parse(localStorage.getItem("alumnos"));
    })
}
function actualizarLista() {
    listaRegis.innerHTML = "";
    alumnos = JSON.parse(localStorage.getItem("alumnos")) || alumnos;
    alumnos.forEach(alumno => {
        const li = document.createElement("li")
        li.innerHTML = `${alumno.nombre} - ${alumno.promedio} <span alumnoid="${alumno.id}" class="btn-Borrar">X</span>`
        listaRegis.appendChild(li)
    });    
    listener();
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
}
function calcularEmpieza(e) {
    e.preventDefault();
    if (input1.value === "" || input2.value === "" || input3 === "" || inputNombre === "") {
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
            onClick: function(){}
          }).showToast();
    } else {
        tablaResul.innerHTML = "";
        resultadoInput = (parseFloat(input1.value) + parseFloat(input2.value) + parseFloat(input3.value)) / 3;
        // Usando Local Storage puedo guardar el nombre y promedio del nuevo alumno para asi poder mostrarlos en la lista de "Alumnos Recientes"
        let nuevoAlumno = {nombre: inputNombre.value, promedio: resultadoInput, id:Date.now()}
        let alumnos = JSON.parse(localStorage.getItem("alumnos"))
        alumnos = [...alumnos, nuevoAlumno]
        actualizarLista();
        localStorage.setItem("alumnos", JSON.stringify(alumnos));
        nuevoAlumno = "";
        inputNombre.value = '';
        input1.value = '';
        input2.value = '';
        input3.value = '';
        tablaResul.innerHTML += `<th>Promedio Final: ${resultadoInput}</th>`
    }
}
function limpiarEmpieza () {
    tablaResul.remove()
}
function borrarUltimo(e) {
    if (e.target.classList.contains("btn-Borrar")) {
        const borrarAtt = parseInt(e.target.getAttribute("alumnoid"))
        alumnos = alumnos.filter(alumno => alumno.id !== borrarAtt)
        localStorage.setItem("alumnos", JSON.stringify(alumnos))
    }
}
// Cada vez que clickea el boton "Mostrar lista" esta misma lista se actualiza con el ultimo alumno que haya sido agregado en Local Storage. //
function mostrarLista() {
    if (listaRegis.style.display === "none" || listaRegis.style.display === null || listaRegis.style.display === "") {
        listaRegis.style.display = "block"    
        botonLista.innerText = "Ocultar estudiantes recientes"
    } else {
        listaRegis.style.display = "none"
        botonLista.innerText = "Mostrar estudiantes recientes"
    }
    actualizarLista();
}