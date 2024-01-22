                                             // Calculadora de promedios escolares //
let resultado1Trimestre, resultado2Trimestre, resultado3Trimestre
let promedio1, promedio2, promedio3

// let nombreAlumno = prompt("Ingrese su nombre y apellido:")
// const nuevoAlumno = new alumno(
//     nombreAlumno,
//     parseInt(prompt("Ingrese su edad:")),
//     prompt("Ingrese su nacionalidad:"),
//     parseInt(prompt("Ingrese su DNI:")),
//     0
// ) Voy a crear un Login/Register con esto, en construccion. :) 

// // Functions para calcular los promedios //
// const promedioMinimo = parseFloat(prompt("Ingrese el promedio con el que aprueba en su institucion: "))

// function calificarAlumnoTrimestreUno()
// {
//     alert("A continuacion ingrese las notas de su primer trimestre")
//     let nota1 = parseFloat(prompt("Ingrese su primer nota: "))
//     let nota2 = parseFloat(prompt("Ingrese su segunda nota: "))
//     let nota3 = parseFloat(prompt("Ingrese su tercera nota: "))

//     let resultado1Trimestre = (nota1 + nota2 + nota3) / 3
//     return resultado1Trimestre
// }
// function calificarAlumnoTrimestreDos()
// {
//     alert("A continuacion ingrese las notas de su segundo trimestre")
//     let nota4 = parseFloat(prompt("Ingrese su primer nota: "))
//     let nota5 = parseFloat(prompt("Ingrese su segunda nota: "))
//     let nota6 = parseFloat(prompt("Ingrese su tercera nota: "))

//     let resultado2Trimestre = (nota4 + nota5 + nota6) / 3
//     return resultado2Trimestre
// }
// function calificarAlumnoTrimestreTres()
// {
//     alert("A continuacion ingrese las notas de su tercer trimestre")
//     let nota7 = parseFloat(prompt("Ingrese su primer nota: "))
//     let nota8 = parseFloat(prompt("Ingrese su segunda nota: "))
//     let nota9 = parseFloat(prompt("Ingrese su tercera nota: "))

//     let resultado3Trimestre = (nota7 + nota8 + nota9) / 3
//     return resultado3Trimestre
// }
// // Menu & Switch para que el usuario seleccione lo que quiera hacer //
// let menu = parseInt(prompt("1) Calcular 1 trimestre. 2) Calcular 2 trimestres. 3) Calcular 3 trimestres. 4) Guardar mis datos en la lista de alumnos. 5) Ver perfiles ya registrados. 0) Salir"))
// do {
//     switch(menu) 
//     {
//     case 1:
//         resultado1Trimestre = calificarAlumnoTrimestreUno()
//         promedio1 = resultado1Trimestre
//         if (promedio1 >= promedioMinimo) {
//             alert("Felicitaciones " + nuevoAlumno.nombre + " esta aprobando su materia con un promedio de: " + Math.round(promedio1))
//         }
//         else {
//             alert("Lamentablemente esta desaprobando su materia con un promedio de: " + Math.round(promedio1))
//         }
//         break
//     case 2:
//         resultado1Trimestre = calificarAlumnoTrimestreUno()
//         resultado2Trimestre = calificarAlumnoTrimestreDos()
//         let promedio2 = (resultado1Trimestre + resultado2Trimestre) / 2
//         if (promedio2 >= promedioMinimo) {
//             alert("Felicitaciones " + nuevoAlumno.nombre + " esta aprobando su materia con un promedio de: " + Math.round(promedio2))
//         }
//         else {
//             alert("Lamentablemente esta desaprobando su materia con un promedio de: " + Math.round(promedio2))
//         }
//         break
//     case 3:
//         resultado1Trimestre = calificarAlumnoTrimestreUno()
//         resultado2Trimestre = calificarAlumnoTrimestreDos()
//         resultado3Trimestre = calificarAlumnoTrimestreTres()
//         let promedio3 = (resultado1Trimestre + resultado2Trimestre + resultado3Trimestre) / 3;
//         if (promedio3 >= promedioMinimo) {
//             alert("Felicitaciones " + nuevoAlumno.nombre + " esta aprobando su materia con un promedio de: " + Math.round(promedio3))
//         }
//         else {
//             alert("Lamentablemente esta desaprobando su materia con un promedio de: " + Math.round(promedio3))
//         }
//         break
//     case 4:
//         listaAlumnos.push(nuevoAlumno)
//         numeroAlumnos++
//         alert("Sus datos han sido registrados.")
//         break
//     case 5:
//         for (i = 0; i < numeroAlumnos; i++){
//             console.log(listaAlumnos[i])
//         }
//         break
//     default:
//         alert("Gracias por elegirnos, adios.")
//     }
//     menu = parseInt(prompt("1) Calcular 1 trimestre. 2) Calcular 2 trimestres. 3) Calcular 3 trimestres. 4) Guardar mis datos en la lista de alumnos. 5) Ver perfiles ya registrados. 0) Salir"))
// } while (menu != 0)
// DOM //
// let lista = document.createElement("ul");
// lista.classList.add("listaAlumnos");
// for (alumnos of listaAlumnos) {
//     lista.innerHTML += `<li class="lista-item">${alumnos.nombre}</li>`
// }
// const listaDeAlumnos = document.querySelector("#listaDeAlumnosR ul");
// const listaAlumnosR = document.querySelector("#listaDeAlumnosR");
// console.log(lista)
// listaAlumnosR.append(lista);

// LocalStorage //

localStorage.setItem("alumno-1", JSON.stringify(alumno1))
localStorage.setItem("alumno-2", JSON.stringify(alumno2))
localStorage.setItem("alumno-3", JSON.stringify(alumno3))
localStorage.setItem("nuevoAlumno", JSON.stringify(nuevoAlumno))
