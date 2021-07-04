let usuarios ={
    nombre:'Juan', provincia: "valencia", 
    stack : {
        lenguaje: 'JS', editor: 'VsCode',
    }
}

let {nombre, ...resto} = usuarios

console.log(resto) // Vscode