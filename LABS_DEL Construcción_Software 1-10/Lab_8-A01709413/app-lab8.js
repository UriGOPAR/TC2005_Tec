console.log("Hola mundo desde node");
console.info("Este script se ejecuta por una computadora y no por un navegador");
console.warn("document,alert,confirm y prompt, no existe en el entorno de Node")
console.error("Así se ve un error");
//Ejercicio 1
let arreglo =[5,1,8,5,3,5];
function promedio(arreglo){
    let res;
    let sum=0;
    let el=0;
    for(let i=0; i<arreglo.length;i++){
        sum += arreglo[i];
        el++;
    }
    res=sum/el
    return res;

}
console.log("El promedio del arreglo es " + promedio(arreglo));

//Ejercicio 2
const filesystem=require('fs');
let text="Hola Desde NODE";
function texto(text){
    filesystem.writeFileSync("output.txt",text);
}
texto(text);
console.log("Ya se creo y escribio en el archivo output :)")

//Binary search
function binary(datos,val){
    let first=0;
    let end= datos.length-1;
    while (first <= end){
        let mitad=Math.floor((first + end)/2);
        let dato=datos[mitad];

        if(dato == val){
            return mitad;
        }
        else if (val > dato){
            first = mitad +1;
        }else{
            end=mitad-1;
        }
    }
    return -1;
}
let arr =[1,5,6,8,9,11,12,26,36];
let num =12;
console.log("La posisción del dato que quieres buscar en el arreglo es: "+binary(arr,num));

const http = require('http');
filesystem.readFile("../Lab_2-A01709413/Lab_2-A01709413.html",  function (error, html) {
    if (error) {
        throw error; 
    }
    const server = http.createServer((request, response) => {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(html);
        response.end();
    })
    server.listen(3000);
});
//COMENTARIO DE LO VISTO EN CLASE, NODE
/*
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

server.listen(3000);*/