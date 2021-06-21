const process = require("process");
const listar = require("./funcionesDeTareas");

switch (process.argv[2]){
  case "listar":
    listar();
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;
  default:
    console.log("No entiendo qué quieres hacer.");
}