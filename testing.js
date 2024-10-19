const fs = require("node:fs/promises");
const path = require("node:path");

const folder = process.argv[2] ?? ".";

//Se crea una funcion asincrona para leer el directorio
//todo esto lo que haces es crear una funcion asincrona que recibe un directorio y lo guarda en una constante files que es un array
async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch {
    console.error('No se pudo leer el directorio' + folder);
    process.exit(1);
  }

  console.log(files)

}

ls(folder)
