const fs = require('node:fs')

//Lee el directorio
//Cuando se trabaja con callbacks se debe tener en cuenta que el primer parametro es el error
//Mete cada archivo dentro de un array
fs.readdir('.', (err, files) => {
    if (err) {
        console.error("Error al leer el directorio: ", err)
        return;
    } else {
        console.log(files)
    }

    //Al estar dentro de un array 
    files.forEach(file => {
        console.log(file)
    })
})