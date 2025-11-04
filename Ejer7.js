// Simulador de Cajero Automático
const prompt = require("prompt-sync")();

let saldo = Number(prompt("Ingrese su saldo actual: "));
let montoretiro = Number(prompt("Ingrese el monto a retirar: "));

function retirarDinero(saldo, montoretiro) 
{
    if (montoretiro <= saldo) 
    {
        let nuevoSaldo = saldo - montoretiro;
        return "Retiro exitoso, su nuevo saldo es de: " + nuevoSaldo;
    } else 
    {
        return "No puede retirar es emonto, sus fondos son insuficientes";
    }
}

console.log(retirarDinero(saldo, montoretiro));
