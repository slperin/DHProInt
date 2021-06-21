function listar(){
  const fs = require("fs");

  let tareas = fs.readFileSync("./tareas.json","utf-8");
  let arrayTareas = JSON.parse(tareas);
  console.log("--------------------------------------------");
  console.log("            Listado de Tareas");
  console.log("--------------------------------------------");
  for (let i = 0 ; i < arrayTareas.length ; i++){
    console.log("Titulo: " + arrayTareas[i].titulo + " - Estado: " + arrayTareas[i].estado)
  }
  console.log("--------------------------------------------");
}
module.exports = listar;