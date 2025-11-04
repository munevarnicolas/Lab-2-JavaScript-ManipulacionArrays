// Filtrar Usuarios por Edad

const prompt = require("prompt-sync")();

const usuarios = [
    { nombre: "Ana", edad: 27 },
    { nombre: "Nicolas", edad: 25 },
    { nombre: "Mauricio", edad: 55 },
    { nombre: "Marleny", edad: 57 },
    { nombre: "Nikoll", edad: 15 }
];

let edadMinima = Number(prompt("Ingrese la edad minima: "));

console.log("Los usuarios que cumplen con la edad minima son: ");

let hayUsuarios = false; 

for (let i = 0; i < usuarios.length; i++) 
{
    if (usuarios[i].edad >= edadMinima)
    {
        console.log(usuarios[i].nombre + " con " + usuarios[i].edad + " años");
        hayUsuarios = true;
    }
}


if (!hayUsuarios) 
{
    console.log("No hay usuarios que cumplan con la edad minima.");
}
