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

  //la constante filesPromises es un array de promesas esto quiere decir que cada archivo se va a leer de manera asincrona
  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file);
    let stats
    
    try {
      stats = await fs.stat(filePath);
    } catch {
      console.error('No se pudo leer el archivo' + filePath);
      process.exit(1);
    } 

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'd' : 'a';
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString();
    
    return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
  })

  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach(fileInfo => console.log(fileInfo))
}
ls(folder)
