const fs = require('node:fs')

//Metodo sincrono
const text = fs.readFileSync('./archivo.txt', 'utf-8') // Por dejecto devuelve informacion en bite, debemos decirle que devuelva de modo que podamos entender utf 8
console.log(text)

// Forma asincrona
fs.readFile('./archivo2.txt', 'utf-8', (err, text) =>{
    console.log(text)
})