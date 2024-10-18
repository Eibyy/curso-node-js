const fs = require('node:fs/promises')

//Metodo con promesas
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text =>{
        console.log("primer texto:", text)
    })