//Ejercicio numero dado y sus cuadrados y cubos 
document.write("1.- Dado un número se desplejara la lista hasta el número dado con sus cuadrados y cubos:")
document.write("<br>");
document.write("<br>");
let num= prompt("Hola, dame un número");
for(let i=1; i <=num; i++){
document.write("Número "+ i);
document.write("<br>");
console.log(`número ${i}`);
v=i*i
document.write("Número al cuadrado "+v);
document.write("<br>");
console.log(`Cuadrado ${v}`);
f=i*i*i
document.write("Número al cubo "+f);
document.write("<br>");
console.log(`Cubo ${f}`)
}
console.log("Fin");
document.write("<br>");
//Ejercicio 2 suma de dos núemros aleatorios 
document.write("2.- Dado la respuesta de la suma va a saber si es correcta o incorrecta")
document.write("<br>");
document.write("<br>");

let numero1= Math.floor(Math.random()*100);
let numero2= Math.floor(Math.random()*100);
var primera=Date.now();
let res = prompt("Dame la suma de " + numero1+ " + " + numero2);
let r=parseInt(numero1)+parseInt(numero2);

if(res == r){
    document.write("Su respuesta es correcta :)");1
}else{
    document.write("Su respuesta es incorrecta :(");
}
var segunda=Date.now();
resul=(segunda-primera)/1000;
alert("Te haz tardado en contestar: " +resul);


//Ejercicio 3 Contador
/*
let u=0;
let arreglo =[ 0,0,-1,-2,3,4];
for(let n=0;n<=arreglo.length;n++){
    if(arreglo == 0){
        u++
    }
    console.log(arreglo[u]);
}*/
/*
const negativos="Cantidad de valores <0 ";
const cero="Cantidad de valores <0 ";
const positivos="Cantidad de valores <0 ";
const numeros={};
numeros[negativos]=0;
numeros[cero]=0;
numeros[positivos]=0;
*/
document.write("<br>");
document.write("<br>");
document.write("3.- Dado un arreglo vamos a encontrar la cantidad de números que son 0, negativos y positivos")
document.write("<br>");
let numerosn=0;
let numerosc=0;
let numerosp=0;
let arreglo =[ 0,-1,-2,3,4,0,-4,5,5];
for (let n= 0;n<arreglo.length;n++){
    if(arreglo[n]<0){
        numerosn=numerosn+1;
    }
    if (arreglo[n]==0){
        numerosc=numerosc+1;
    }
    if(arreglo[n]>0){
    numerosp=numerosp+1;
    }
}
document.write("<br>");
document.write("Numeros en negativos son: "+numerosn);
document.write("<br>");
document.write("Numeros en cero son: "+numerosc);
document.write("<br>");
document.write("Numeros en positivos son: "+numerosp);
document.write("<br>");
document.write("<br>");
//Ejercicio 4
document.write("4.- Promedios de los renglones de una matriz: ")
document.write("<br>");
document.write("<br>");
let matriz=new Array();
matriz.push([10,8,7]);
matriz.push([9,8,10]);
matriz.push([10,10,10]);
let promedio=0;
document.write("Matriz Inicial");
document.write("<br>");
document.write(matriz);
for(let m=0;m<matriz.length;m++){
    document.write("<br>");
    document.write("<br>");
    /*
    let promedio=matriz.reduce((a,n)=>a+n)
    console.log("El promedio es: " +promedio);*/
    document.write("Matriz dividida por filas <br>");
    document.write(matriz[m]);
    document.write("<br>");
    document.write("Promedio de las filas <br>");
  
    let promedio=matriz[m].reduce((a,n)=>(a+=n,a),0)/matriz[m].length;

    document.write(promedio);
    document.write("<br>");
}
document.write("<br>");
//Ejercicio 5
document.write("5.-Al proporcionar un número de 2 caracteres este se invierte:")
document.write("<br>");
let invnum= prompt("Dame un número con más de dos digitos");
function invertir(numero){
    return Number(numero.toString().split('').reverse().join(''))
}document.write("<br>");
document.write("Número que proporcionaste:");
document.write(invnum);
document.write("<br>");
document.write("Número Invertido");
document.write("<br>");
document.write(invertir(invnum));
document.write("<br>")

//Ejercicio 6
document.write("6.- Busqueda por medio de Binary Search");
document.write("<br>")
document.write("El cual conciste en encontrar elementos de un arreglo ordenado, de manera rápida")
document.write("<br>")
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
let arr =[1,5,6,8,9,11,12,15,26];
let buscar =5;
document.write("La posisción del dato que quieres buscar en el arreglo es: "+binary(arr,buscar));