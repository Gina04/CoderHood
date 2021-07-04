import axios from 'axios';


//https://reqres.in/api/users?per_page=2
function programa(){
    axios.get("https://reqres.in/api/users?page=2").then((resultado)=>{
        console.log("El resultado es:" + resultado);
    }).catch((error)=>{
        console.log("Lo sentimos ocurrio un error: " + error.message)
    })
    console.log(resultado);
}
programa();