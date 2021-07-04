// Dado un array de alumnos de Coderhood Academy,
// indicar quien es el que lidera el ranking de participacion en Discord

let alumnos = [
    {
      nombre: 'MiaFate',
      ranking: 4
    },
    {
      nombre: 'Argentum',
      ranking: 2
    },
    {
      nombre: 'Lucas',
      ranking: 1
    },
    {
      nombre: 'Ema',
      ranking: 3
    }
  ]


let liderDiscord = {
    mayorRanking:0
}

for(let i = 0; i< alumnos.length; i++){

    if(alumnos[i].ranking > liderDiscord.mayorRanking){
        const alumno = alumnos[i]
        
        liderDiscord= alumno
    }
}

const solucion1 = 'Quien lidera el ranking es: ' + liderDiscord.nombre
console.log(solucion1)

