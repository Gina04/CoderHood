/* Recopilación de datos personales */

/* 
Esta función obtiene los datos de una persona y los devuelve. 
(Se podría usar window.prompt para obtenerlos). 
*/

  function obtenerDatosPersonales() {
    // Se obtienen los datos de alguna forma

    let infoPersona = {
        nombre : 'Pepe',
        apellido : "Pipo",
        edad : 99,
        profesion : "Programador",
        animeFavorito : "Evangelion"

    } 
  
    // TODO: Devolver esta información en una estructura de datos.
    return infoPersona; 
}


let datosPersonales = obtenerDatosPersonales();


// Imprimir los datos obtenidos
console.log(datosPersonales);

// TODO: Imprimir la profesión de la persona

console.log(datosPersonales.profesion)
// TODO: Agregar el campo "procesado" y asignarle el valor "true" e imprimir todos los datos nuevamente.

datosPersonales.procesado = 'true'

console.log(datosPersonales)