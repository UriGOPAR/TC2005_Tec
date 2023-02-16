/*
//Var es para variables como también con let 
var comida="Chilaquiles";
let cena="tacos";

let precio=70;

console.log("Hola");
console.info("valor  de la comida "+ comida);
console.warn("El precio se puede modificar");
console.error("Te dije que el precio no se puede modificar")

console.assert(1 === 1);
console.assert(1 === "1");
console.assert(1 == "1");
console.assert( 1 == true);

//alcance de las variables Aquí Ocurre un Error porque la variables i ya murio
for(var i=1; i<= 10; i++) {

    console.log(i);

}
console.log(i);
*/
//Soltar alertas antres de entrar
alert("hola!");
let nombre=prompt("¿Como te llamas?");

console.log("hola "+nombre);

let is_hungry=confirm("Tienes hambre");

console.log(is_hungry);

//Funcion tradicionales
function numero_tacos (){
    return 5;
}
console.log(numero_tacos());

//Funciones modernas
let cantidad_tacos=() => {5}
console.log(cantidad_tacos());

//Html dinámico
let boton=document.getElementById("Buenos_días");
boton.innerHTML= "¡Buenos Días!" ;
boton.onclick= ()=> alert("¡Buenos Días!")

//arreglos
const arreglos=["Elementos"];
arreglos.push("Otro elemnto");
arreglos["dos"] = 2;
arreglos.length=10; 
arreglos[20]="Fin del arreglo";
console.log(arreglos);

//ciclo For
for (let elementos in arreglos){
    console.log(elementos);
}

for (let elementos of arreglos){
    console.log(elementos);
}
//OBJETOS
let objeto ={
    atributo_1:"Valor 1",
    atributo_2:2,
}
console.log(objeto.atributo_1);
console.log(objeto.atributo_2);
console.log(objeto);

for (let elementos in objeto){
    console.log(elementos);}

for (let elementos in objeto){
    console.log(objeto.elementos);}

const arreglo_de_objetos=[{atributo_1:"Valor 0",atributo_2:1},{},objeto];
console.log(arreglo_de_objetos); 