console.log("Hola mundo desde node");
console.info("Este script se ejecuta por una computadora y no por un navegador");
console.warn("document,alert,confirm y prompt, no existe en el entorno de Node")
console.error("Así se ve un error");

//fs es el módulo para trabajar con el sistema de archivos
const filesystem =require('fs');
//Con la función Syn le decimos a node que se espere para terminar de ejecutar otro archivo
filesystem.writeFileSync('Hola.txt','hola desde node');
console.log("Terminamos de escribir el archivo");

const arreglo =[5000,60,90,100,10,20,10000,0,120,2000,340,1000,50];
for(let item of arreglo){
    setTimeout(() => {console.log(item);},item);
}
console.log("Este log esta después de imprimir el arrelgo");

setTimeout(()=>{console.log("Ya te hackié");},1200);
//http es elmódulo que permite crear un servidor que pueda atender peticiones http
const http= require('http');
const server = http.createServer((request,response)=>{
    console.log(request.url);
    response.setHeader('Content-Type','text/html');
    response.write("<h1> Hola desde Node </h1>");
    response.end();

});

server.listen(3000);