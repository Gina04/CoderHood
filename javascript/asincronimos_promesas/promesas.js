function desarrollarProyecto(){
   return new Promise(function(resolve, reject){
      const proyecto = 'Completo'
      setTimeout(function(){
         let aleatorio = Math.random()

         if(aleatorio < 0.4){
            resolve(proyecto)
         }else{
            reject("proyecto imcompleto")
         }
      }, 3000)
   })
}
 /*desarrollarProyecto()
   //Proyecto recibido
   .then(proyecto => console.info("Proyecto: " + proyecto))
   //Error proyecto incompleto
   .catch(error=>console.error("Error" + error))
   //Promesa finalizada
   .finally(()=>console.log("Promesa finalizada"))
*/

async function programa(){
   try{
   const resultado1 = await desarrollarProyecto();
   console.log("El resultado es: " + resultado1);
   const resultado2 = await desarrollarProyecto();
   console.log("El resultado es: " + resultado2);
   const resultado3 = await desarrollarProyecto();
   console.log("El resultado es: " + resultado3);
   const resultado4 = await desarrollarProyecto();
   console.log("El resultado es: " + resultado4);
   }catch(error){
   console.log("lo sentimos ocurrio un error: " + error);
    } 
}
programa();

/*
[Running] node "d:\CoderHood\javascript\asincronimos_promesas\promesas.js"
El resultado es: Completo
El resultado es: Completo
lo sentimos ocurrio un error: proyecto imcompleto

[Done] exited with code=0 in 9.241 seconds


*/
