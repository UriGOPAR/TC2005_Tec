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

