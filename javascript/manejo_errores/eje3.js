let persona = { 
    id: 19310, 
    nombre: "Bautista", 
    apellido: "Di Santo"
 }

function pedirInformacion(){
    if(Math.random()< 0.25){
        throw new Error("NetworkError")
    }

    if(Math.random()< 0.18){
        throw new Error("InternalError")
    }

    if(Math.random()< 0.1){
        throw new Error("AlienError")
    }
    return persona 
}


try{
let resultado = pedirInformacion()
console.log(resultado)

}catch(error){

    console.log(error.message)
}

