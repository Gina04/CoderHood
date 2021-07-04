/*
Crear una funcion que recibe tres parametros chance, mensaje y resultado.
chance: es un numero que indica el porcentaje que tiene esa funcion de arrojar un error. 
si chance = 20 entonces la funcion tiene 20% de posibilidades de disparar un error
mensaje: el mensaje que tiene que tener el error que puede disparar la funcion.
resultado: es cualquier cosa, un numero, un texto, un objeto, etc. es lo que retorna
 la funcion si no arrojo un error

*/

function chanceError(chance, mensaje, resultado){
    if(chance == 20){
        throw new Error(mensaje)
    }

    return resultado
}

try{
    let resultado = chanceError(20, "Tiene 20% de posibilidades de error", 1)
    console.log(resultado)
   
}catch(error){
    console.log(error.message)
}