// Contador de Palabras
const prompt = require("prompt-sync")();

let texto = prompt("Escribe un texto: ");

function contarPalabras(texto)
{
    let palabras = texto.split(" ");
    return palabras.length;
}

console.log("El numero de palabras es: ", contarPalabras(texto));