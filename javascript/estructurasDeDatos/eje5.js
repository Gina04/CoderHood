// Dado un array de estudiantes de una universidad, mostrar los nombres de los estudiantes de la carrera Ingenieria en computacion.

let alumnos = [
    {
      nombre: 'Ema',
      carrera: 'Ingenieria en computacion'
    },
    {
      nombre: 'Luis',
      carrera: 'Produccion audiovisual'
    },
    {
      nombre: 'Pablo',
      carrera: 'Ingenieria en computacion'
    },
    {
      nombre: 'Meison',
      carrera: 'Ingenieria en computacion'
    }
  ]

  //me devuelve un arreglo con los alumos cuya carrera estudiaron es 'Ingenieria en computacion'
  let alm = alumnos.filter(alumno => alumno.carrera == 'Ingenieria en computacion')

  //Recorro ese array y muestro los nombres de cada objeto osea cada alumno
  for(let i=0; i< alm.length; i++){
    console.log(alm[i].nombre)
  }
  

