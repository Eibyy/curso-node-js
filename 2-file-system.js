// FILL SYSTEM, SISTEMA DE ARCHIVO, DE LO MAS INTERESANTE Y MAS UTILIZADO
const fs = require('node:fs')

//Informacion del archivo
//Metodo sincrono
const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // Es un archivo?
    stats.isDirectory(), // es un directorio?
    stats.size // Tamaño en bytes
)