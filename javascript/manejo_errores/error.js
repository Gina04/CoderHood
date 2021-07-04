/*
Crear una funcion 'randomError' que tenga 50% de posibilidades de disparar un error con
mensaje "Error catastrofico"
En caso de no disparar un error, la funcion debe devolver un mensaje "Todo ok"
Capturar el error e informar 'Error capturado'

*/
// Retorna un número aleatorio entre 0 (incluido) y 1 (excluido)
function randomError() {
    if (Math.random() < 0.5) {
        // Esto se ejecutara el 50% de las veces
        throw new Error("Error catastrofico")
    }
    return "Todo ok"
}

try {
    // ambiente seguro
    let resultado = randomError();
    console.log(resultado)
}catch (error) {
    console.log(error.message);
}