console.log("Hola mundo desde node");
console.info("Este script se ejecuta por una computadora y no por un navegador");
console.warn("document,alert,confirm y prompt, no existe en el entorno de Node")
console.error("Así se ve un error");

//fs es el módulo para trabajar con el sistema de archivos
const filesystem =require('fs');
//Con la función Syn le decimos a node que se espere para terminar de ejecutar otro archivo
filesystem.writeFileSync('Hola.txt','hola desde node');
console.log("Terminamos de escribir el archivo");

