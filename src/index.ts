//creo la funcion dibujoLineas que dibuja una linea de 40 guiones seguidos
function dibujoLineas() {
  let linea1: string = "-";
  for (let i: number = 1; i <= 40; i++) {
    linea1 = linea1 + "-";
  }
  console.log(linea1);
}
// el usuario ingresa dos numeros y elije la operación a realizar
let num1: number = Number(prompt("ingrese el primer numero"));
let num2: number = Number(prompt("ingrese el segundo numero"));
let resultado: number = 0;
let opcion: number = Number(
  prompt(
    "ingrese 1 si desea sumar, 2 si desea restar, 3 si desea multiplicar, 4 si desea dividir"
  )
);
switch (opcion) {
  case 1:
    resultado = num1 + num2;
    dibujoLineas();
    console.log("El resultado de la suma es:", resultado);
    dibujoLineas();
    break;
  case 2:
    resultado = num1 + num2;
    dibujoLineas();
    console.log("El resultado de la resta es:", resultado);
    dibujoLineas();
    break;
  case 3:
    resultado = num1 * num2;
    dibujoLineas();
    console.log("El resultado de la multiplicación es:", resultado);
    dibujoLineas();
    break;
  case 4:
    resultado = num1 / num2;
    dibujoLineas();
    console.log("El resultado de la división es:", resultado);
    dibujoLineas();
    break;
  default:
    console.log("la opción ingresada es incorrecta");
    break;
}
