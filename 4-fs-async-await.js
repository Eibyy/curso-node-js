// con common js se requiere para un await estar dentro de una funcion

const {readFile} = require('node:fs/promises')

;(
    async() =>{
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('Primer texto: ', text)

        const text2 = await readFile('./archivo2.txt', 'utf-8')
        console.log('segundo texto: ', text2)
    }
)()