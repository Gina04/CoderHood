let lista = [{
    id: 19310,
    nombre: "Bautista"
},
{
    id: 90010,
    nombre: "Ema"
},
{
    id: 00519,
    nombre: "Lucas"
},
{
    id: 00000,
    nombre: "Meison"
}
]

function pedirUsuario(){
    let valorRandom = lista[Math.floor(Math.random()*lista.length)]

    // puede disparar un error, devuelve un usuario
    if(valorRandom.id == 00000){
        throw new Error("ForbiddenInformation")
    }
    return valorRandom
}

try {
    console.log(pedirUsuario());
} catch (error) {
    console.log(error.message);
}