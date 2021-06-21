// 1. Puesta en común de los tipos de datos que vamos a necesitar
// para guardar nuestras tareas

// 2. Se arma un array 

// 3. Se hace evidente que los datos tienen que estar afuera
// Creamos un archivo JSON

// console.log(tareasJson)
// console.log(typeof tareasJson)

// Salto de Fé
// Módulos nativos
// const fs = require('fs');
// let tareasJson = fs.readFileSync('tareas.json', 'utf-8');
// let tareas = JSON.parse(tareasJson);

// Micro desafío 1
// transformar el código anterior en una función
// function leerJson() {
//    return JSON.parse(fs.readFileSync('tareas.json', 'utf-8'));;
// }

// 4. Se lleva el código a un modulo

let archivoTareas = require('./tareas');
let estados = ["terminada", "en progreso", "pendiente"];
let accion = process.argv[2];

switch(accion) {
  case 'listar':
    console.log();
    console.log('>>> Listado de tareas <<<');
    let tareas = archivoTareas.leerJSON();
    if (!archivoTareas.errMsg) {
      tareas.forEach((tarea,i) => {
        console.log((i+1) + '. ' + tarea.titulo + ' - ' + tarea.estado);
      });
    }
    break;

  case 'crear':
    let title = process.argv[3];
    if (title == undefined){
      console.log("Debe informar un titulo de tarea");
    } else {
      let tareas = archivoTareas.leerJSON();
      if (!archivoTareas.errMsg) {
        tareas.push({titulo: title, estado: "Pendiente"});
        archivoTareas.escribirJSON(tareas);
      }
    }
    break;

  case 'filtrar':
    let state = process.argv[3];
    if (state == undefined){
      console.log("Debe informar un estado valido");
    } else {
      state = state.toLowerCase()
      if (estados.includes(state)){
        console.log();
        console.log(">>> Filtrado de tareas por '" + state + "' <<<");
        let tareas = archivoTareas.leerJSON();
        if (!archivoTareas.errMsg) {
          tareas.filter(function (tarea){
            if (tarea.estado.toLowerCase() == state){
              console.log(tarea.titulo + " " + tarea.estado);
            }
          })
        }
      } else {
        console.log("Estado invalido. Estados posibles 'terminada', 'en progreso' o 'pendiente'");
      }
    }
    break;

  // Micro desafío 1
  // Atajar el caso en que no se envíe un parámetro
  case undefined:
    console.log('Tenés que pasarme una acción');
    break;

  // Micro desafío 2
  default:
    console.log('No entiendo qué me estás pidiendo');
    console.log('Las acciones disponibles son: listar, crear <titulo>, filtrar <estado>');
    break;
}