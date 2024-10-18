const path = require("node:path");

//barra separadora de carpetas segun SO
console.log(path.sep);

//unir rutas con path.join
const filePath = path.join("/content", "subfolder", "test.txt"); // esta es una manera de ir a rutas sin usar las barras
console.log(filePath);

//consultar el nombre del fichero
const base = path.basename("/tmp/midu-secret-files/password.txt"); // Esto da "password.txt"
console.log(base);

//Consultar el fichero sin al extension
const fileName = path.basename("/tmp/midu-secret-files/password.txt", ".txt"); // Esto da "password"
console.log(fileName);

//mas utiles: la extension
const extension = path.extname("image.jpg"); // ayuda por si tenemos imagenes con varios puntos no se confunde
console.log(extension);
