const sumar = require("./sumar");
const restar = require("./restar");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");

let n1 = 2;
let n2 = 0;
let op = "*";

if (op == "+"){
  console.log(sumar(n1,n2));
} else if (op == "-") {
  console.log(restar(n1,n2));
} else if (op == "*"){
  console.log(multiplicar(n1,n2));
} else if (op == "/"){
  console.log(dividir(n1,n2));
} else {
  console.log("Operador invalido !!")
}
let saludar = nombre => 'Hola, ' + nombre + '!';
console.log(saludar("Sergio"));
for (let j = -6 ; j < 6 ; j++){
  for (let i = -6 ; i < 6 ; i++){
    console.log(j,i,"Sergio".slice(j,i));
  }
}