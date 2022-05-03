// Resolver problemas logicos o amtematicos//
// La programacion es una herramienta para resolver problemas//
// Descomosicion: descomponer el problema//
// Patrones: similitudes//
// Abstraccion: achicar el problema, eliminar lo superfluo//
// Algoritmos: pasos para resolver el problema//

console.log("Hola mundo")
document.write('La Web de Manu');

/*
Variable: Espacio en memoria donde se almacena un valor.
Que es? Un cajon.
como armo un avariable?
let nombreDeLaCVaribale = "valor"
let nombre = "manu"
= es el operador de asignacion
var << para crear variable 
const: variables que no se pueden cambiar 

Tipos de datos: 
numerico: enteros (integers) o con coma (float)
strings: cadena de caracteres
booleano: puede ser o true o false, la computadora valida por si o por no 
+ > suma o concatena (el + no es solo para los numeros, tambien esx para strings)
en la suma, el string tiene mas peso que un valor numerico 
con las "" es una cadena de caracteres 
Nan: Not a Number
JV tiene por convencion 
camel Case: primera letra de la primera palabra minus, primera letra segunda palabra mayus.
snake case: usar guin bajo entre palabras
kebbab case: usar guin medio entre palabras
pascal case: primera letra de la primera y segunda palabra en mayus

= asigna un valor a una variable 
== pregunta si el valor coinciden 
=== pregunta si el valor y el tipo de dato coincide
nosotros vamos a usar siempre el triple = 
no se usa elif como en phyton, se usa else if 

el if necesita un true para ejecutar 
por ejemplo: 
let verdadera = true
if (verdadera) {

} aca ya le estoy ingresando un true poniendo if verdadera. 

    y   &
1   2   R
v   f   f
f   v   f
f   f   f
v   v   v  

1   2   R
v   f   v
f   v   v
v   v   v
f   f   f

El or se escribe como la doble barra vertical || (shift y abajo de delete)
!: el signo de esclamación es negción, entonces si le pongo (! true) me devuelve false 
!= aca estoy negando la igualdad 

prompt sirve para leer un dato 
alert sirve para presentar un cartelito 

para vincular mi JV con mi html lo que hago es 
</script>
<script src="./script.js">
</script> 
*/

/*
funcion: conjunto de instrucciones

la puedo declarar (crearla) o invocarla (utilizarla)

YAGNI: creo la funcion a medida que la necesito 
*/
/*
function saludar(){ // declarando 
    console.log("Hola estudiante!")

}
*/
//invocar 
saludar()

//estructura basica de una funcion: function nombre (){ instrucciones }

// parametro: valor que va a ingresar el usuario, como un comodin

function siguiente(numero){
console.log(numero+1)
}
siguiente(1)

function saludarConParametro(nombre){
    console.log("Hola " + nombre)
}

saludarConParametro("Manu")

// los parametros nos permiten reemplazar el codigo dentro de la funcion con el valor que nos pase el usuario 

/*************************/

function sumarDos(numero1, numero2){
    let resultado = numero1 + numero2
    return resultado
}

function mostrar (visible){
    console.log(visible)
}
mostrar(sumarDos(1,2)) //aca estoy haciendo una doble invocación, es una función dentro de otra 
 //tu console.log no deberia estar dentro de la función, con return le digo bueno, este es el resultado, agarralo vos. 

/*******************/

function calculadora (numero1,numero2,operacion){

    if(operacion === "+"){

        return numero1 + numero2
}
else if(operacion === "-"){

        return numero1 - numero2
}
 else if(operacion === "*"){

        return numero1 * numero2
}
 else if(operacion === "/"){

        if(numero2 !== 0){
        return numero1 / numero2}
        
        else{

            return "No se puede dividir por cero"
 }
    }else{
        return "Ingrese una operación valida"
    }
}

/*******************/

//los ambitos son casas dpnde viven las variables 

let variableNombre = "Manu" //esta varaibale es global pq no pertenece a ningun ambito 

function saludarALaVariable(){
    return "Hola " + variableNombre + edad
}
