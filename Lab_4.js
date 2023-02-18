//Ejercicio numero dado y sus cuadrados y cubos 
let num= prompt("Hola, dame un número");
for(let i=1; i <=num; i++){
console.log(`iteracion ${i}`);
v=i*i
console.log(`iteracion ${v}`);
f=i*i*i
console.log(`iteracion ${f}`)
}
console.log("Fin");

//Ejercicio 2 suma de dos núemros aleatorios 
let numero1= Math.floor(Math.random()*100);
let numero2= Math.floor(Math.random()*100);
let res = prompt("Dame la suma de " + numero1+ " + " + numero2);

let r=parseInt(numero1)+parseInt(numero2);

if(res == r){
    document.write("Su respuesta es correcta :)");1
}else{
    document.write("Su respuesta es incorrecta :(");
}
//Falta saber el tiempo que tarda en ejecutar

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
let numerosn=0;
let numerosc=0;
let numerosp=0;
let arreglo =[ 0,,-1,-2,3,4];
for (let n= 0;n<arreglo.length;n++){
    if(arreglo[n]<0){
        numerosn=numerosn+1;
        console.log(numerosn);
    }
    if (arreglo[n]==0){
        numerosc=numerosc+1;
        console.log(numerosc);
    }
    if(arreglo[n]>0){
    numerosp=numerosp+1;
    console.log(numerosp);
    }
}
document.write("Numeros en negativos son: "+numerosn);
document.write("Numeros en cero son: "+numerosc);
document.write("Numeros en positivos son: "+numerosp);
