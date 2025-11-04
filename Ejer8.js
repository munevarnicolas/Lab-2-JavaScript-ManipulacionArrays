// Cambio de Moneda

const prompt = require("prompt-sync")();
let monto = Number(prompt("Ingrese el monto en pesos colombianos (COP): "));

function convertirUSD(monto) 
{
    let tasaUSD = 0.00025; 
    let resultado = monto * tasaUSD;
    return "El monto en USD es: " + resultado;
}

console.log(convertirUSD(monto));
