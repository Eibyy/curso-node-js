const os = require('node:os')

//os nos da informacion respecto al sistema operativo

//Nombre del sistema operativo
console.log(os.platform())

//Version del sistema operativo
console.log(os.release())

//Arquitectura (bits)
console.log(os.arch())

//Ver cuantas cpu tiene el pc
console.log(os.cpus()) // nos deja escalar procesos en node ES IMPORTANTE

//Memoria libre
console.log(os.freemem() / 1024 / 1024)

//Memoria total
console.log(os.totalmem() / 1024 / 1024)// Se divide por eso para obtenerlo en megas



