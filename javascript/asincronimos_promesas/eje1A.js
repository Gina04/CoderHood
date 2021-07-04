/*
Reescribir la siguiente función tal que retorne una promesa que se cumpla 
luego de 3 segundos (usar setTimeout), devolviendo el mismo resultado que la función dada.
*/

function dividirNumeros(dividendo, divisor) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(divisor != 0){
                const resultado =  dividendo / divisor;
                resolve(resultado);
            }else{
                reject("No se puede dividir por cero");
            }
            
        }, 3000)
    })
   
}

dividirNumeros(6,0).then((resultado)=>{
    console.log("El resultado de la division es: " + resultado)
}).catch((error)=> {
    console.log("Lo sentimos hay un error:  " + error); 
})
