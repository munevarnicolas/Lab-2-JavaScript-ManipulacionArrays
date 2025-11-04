//Ejercicio 1 Calculadora de Propinas
const prompt = require("prompt-sync")()

let cuenta = Number(prompt("Ingrese el total de la cuenta: "));
let propina = Number(prompt("Ingrese porcentaje de Propina: "));

function calcularPropina(cuenta, propina)
{
    let total = cuenta + (cuenta * (propina / 100));
    return total;
}

console.log("El total de su cuenta junto con la propina es de: " + calcularPropina(cuenta, propina));