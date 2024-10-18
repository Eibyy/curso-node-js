const fs = require('node:fs')

//Lee el directorio
fs.readdir('.', (err, files) => {
    if (err) {
        console.error("Error al leer el directorio: ", err)
        return;
    } else {
        console.log(files)
    }

    files.forEach(file => {
        console.log(file)
    })
})