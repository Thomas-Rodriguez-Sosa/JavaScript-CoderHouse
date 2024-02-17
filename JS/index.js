const alumnos = [
    {nombre: "Thomas Rodriguez", edad: 20, nacionalidad: "Argentina", dni: 44971946, promedio: 7},
    {nombre: "Lisandro Correa", edad: 17, nacionalidad: "Argentina", dni: 23234322, promedio: 3},
    {nombre: "Tomas Galvan", edad: 19, nacionalidad: "Argentina", dni: 54566334, promedio: 8},
    {nombre: "Lucio Raffin", edad: 18, nacionalidad: "Argentina", dni: 44456432, promedio: 5}
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
    