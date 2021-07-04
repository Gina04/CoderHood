  /* un taller mecanico tiene una lista de autos para arreglar en el dia, de cada auto sabemos:
  * nombre del duenio
  * valor del arreglo
  * tiempo que tarda el arreglo (en horas)
  * lista de repuestos necesarios

  el duenio del taller quiere saber
  1. cual es el arreglo mas caro y los repuestos que necesita
  2. todos los arreglos para personas que se llamen `juan`
  3. el precio total los arreglos */

  let taller = [
      {
          nombreDuenio:'Georgina', 
          valorArreglo: 6789,
          tiempoTardaArreglo: 4,
          respuesto : ['paragolpe', 'puerta']

      },
      {
        nombreDuenio:'Fatima', 
        valorArreglo: 3455,
        tiempoTardaArreglo: 3,
        respuesto : ['baul', 'rueda']

    },
    {
        nombreDuenio:'Juan', 
        valorArreglo: 200,
        tiempoTardaArreglo: 1,
        respuesto : ['espejoRetrovisor']

    },
    {
        nombreDuenio:'Juan', 
        valorArreglo: 200,
        tiempoTardaArreglo: 1,
        respuesto : ['vidrio', 'baul']

    }

  ]
 
  
  let autoMasCaro ={
      valorArreglo:0
  }

  let respuestosJuan = []

  let precioTotal=0;

function  sumarRespuestoJuanes(respuestos, respuestosJuan){
    for(let i=0; i< respuestos.length; i++){

        let respuesto = respuestos[i]

        respuestosJuan.push(respuesto)
     }

    return respuestosJuan

  }

  for(let i=0; i< taller.length; i++){
    const auto = taller[i]

    if(auto.valorArreglo > autoMasCaro.valorArreglo ){
        autoMasCaro = auto
    }

    if(auto.nombreDuenio == 'Juan'){
        respuestosJuan = sumarRespuestoJuanes(auto.respuesto, respuestosJuan)
    } 
    
    precioTotal+= auto.valorArreglo

  }

  const solucion1 = 'El arreglo mas caro cuesta $' + autoMasCaro.valorArreglo + ' y necesita los respuesto ' +
  autoMasCaro.respuesto

  const solucion2 = 'Los juanes tienen que arreglar' + respuestosJuan

  const solucion3 = 'El precio total de los arreglo del taller es de: $' + precioTotal

  console.log(solucion1)
  
  console.log(solucion2)

  console.log(solucion3)

 
 
