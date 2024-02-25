const alumnos = [
    {nombre: "Thomas Rodriguez", promedio: 7, id:1131354323},
    {nombre: "Lisandro Correa", promedio: 3, id:1233354323},
    {nombre: "Tomas Galvan", promedio: 8, id:1231354423},
    {nombre: "Lucio Raffin", promedio: 5, id:1231354323}
]

// Este Array guardado en Local Storage tiene su uso en calcular.js //
localStorage.setItem("alumnos", JSON.stringify(alumnos))

document.querySelector("#buttonRegis").addEventListener("click", function(){
    document.querySelector(".popup-Form").classList.add("active")
    document.querySelector(".footerIcon").classList.add("invisibleIcon")
});
document.querySelector(".popup-Form .btn-cerrar").addEventListener("click", function(){
    document.querySelector(".popup-Form").classList.remove("active")
    document.querySelector(".footerIcon").classList.remove("invisibleIcon")
});
let signUpBtn = document.querySelector("#signUpBtn")
let signInBtn = document.querySelector("#signInBtn")
let nombreInput = document.querySelector("#nameInput")
let formTitle = document.querySelector("#formTitle")

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
