/*
Usando then y catch completar la función "programa" dada para llamar a dividirNumeros
e imprimir el resultado o imprimir un mensaje de error si ocurriera. Para provocar un error pueden enviar 0 como divisor.

*/
//Creo mi Promesa 
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
//aca trabajo con ella puede ser de dos maneras async/await o then()/catch();
async function programa() {
    try{
        const resultado = await dividirNumeros(6,0);
        console.log(resultado);

    }catch(error){
        console.log("Lo sentimo hay un error: " + error)

    }
}

programa();