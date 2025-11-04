//Calcular promedio de notas
const prompt = require("prompt-sync")();

let inputnotas = prompt("Ingrese sus notas separadas por comas: "); 

let notas = inputnotas.split(","); 
for (let i = 0; i < notas.length; i++) 
{
    notas[i] = Number(notas[i]); 
}

console.log(notas);

function calcularPromedio(notas) 
{
    let suma = 0;

    for (let i = 0; i < notas.length; i++) 
    {
        suma = suma + notas[i];
    }

    let promedio = suma / notas.length;
    return promedio;
}

console.log("El promedio de las notas es:", calcularPromedio(notas));
