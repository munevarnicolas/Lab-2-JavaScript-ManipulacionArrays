// Validar Contraseña
const prompt = require("prompt-sync")()

let contraseña = prompt("Ingrese una contraseña para su registro: ");

function validarContraseña(contraseña)
{
    if (contraseña.length < 8) 
    {
        return false;
    }

    let tieneNumero = false;
    let tieneMayuscula = false;


    for (let i = 0; i < contraseña.length; i++) 
    {
        let caracter = contraseña[i];

        if (caracter >= '0' && caracter <= '9') 
        {
            tieneNumero = true;
        }

        if (caracter >= 'A' && caracter <= 'Z') 
        {
            tieneMayuscula = true;
        }
    }

    if (tieneNumero && tieneMayuscula) 
    {
        return true;
    } 
    else 
    {
        return false;
    }
}


if (validarContraseña(contraseña)) 
{
    console.log("Su contraseña cumple con los requisitos de seguridad");
} 
else 
{
    console.log("Su contraseña no es segura. Debe tener al menos 8 caracteres, un numero y una mayuscula.");
}








console.log()