function sleep(milisegundos){
    new Promise((resolve, reject)=>{ 
        if(milisegundos < 5000){
            setTimeout(()=>{
                resolve();
            }, milisegundos)
        }else{
            reject("Tanto tiempo no dormilon"); 
        }
    })
}

async function programa(){
    try{
        console.log("Hola!"); 
        await sleep(4000); 
        console.log("Chau!");
        await sleep(1000); 
        console.log("Ya me fui!");
    } catch(error){
        console.log("Lo sentimos ocurrio un erro" + error);
    }
   
}

programa(); 