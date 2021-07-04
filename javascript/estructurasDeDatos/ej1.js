// dado un array de usuarios, indicar si existe un usuario llamado Lucas

let usuarios = [
    {
      nombre: 'Ema',
      edad: 27,
      habilidades: ['html, css, javascript, react']
    },
    {
      nombre: 'Meison',
      edad: 27,
      habilidades: ['mongodb, node, express']
    }
  ]

for(let i= 0; i< usuarios.length; i++){
    if(usuarios[i].nombre == 'Lucas'){
        console.log('Existe el usuario')
        breack;
    }else{
        console.log('No existe el usuario')
        breack; 
    }
}