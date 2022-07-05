//visto en clase práctica//
// Resolver problemas logicos o amtematicos//
// La programacion es una herramienta para resolver problemas//
// Descomosicion: descomponer el problema//
// Patrones: similitudes//
// Abstraccion: achicar el problema, eliminar lo superfluo//
// Algoritmos: pasos para resolver el problema//

/*console.log("Hola mundo")
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
//funciones declaradas 
function saludar(){ // declarando 
    console.log("Hola estudiante!")

}
*/
//invocar 
/*saludar()

//estructura basica de una funcion: function nombre (){ instrucciones }

// parametro: valor que va a ingresar el usuario, como un comodin

/*function siguiente(numero){
console.log(numero+1)
}
siguiente(1)

function saludarConParametro(nombre){
    console.log("Hola " + nombre)
}

saludarConParametro("Manu")

// los parametros nos permiten reemplazar el codigo dentro de la funcion con el valor que nos pase el usuario 

/*************************/

/*function sumarDos(numero1, numero2){
    let resultado = numero1 + numero2
    return resultado
}

function mostrar (visible){
    console.log(visible)
}
mostrar(sumarDos(1,2)) //aca estoy haciendo una doble invocación, es una función dentro de otra 
 //tu console.log no deberia estar dentro de la función, con return le digo bueno, este es el resultado, agarralo vos. 

/*******************/

/*function calculadora (numero1,numero2,operacion){

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

mostrar(calculadora(1,2,"+"))
mostrar(calculadora(2,3,"-"))
mostrar(calculadora(5,10,"*"))
mostrar(calculadora(8,4,"/"))

/*******************/

//los ambitos son casas habitan los valores 
//las variables van a vivir dentro de =/ ambitos 
//SCOPE es el ambito donde habitan las variables 
//no puedo volver a declarar otra variable con el mismo nombre pero si puedo si estas se encuentran en diferentes ambitos, scopes 


/*let variableNombre = "Manu" //esta varaibale es global pq no pertenece a ningun ambito, quiere decir que todas las funciones van a poder aceder a esta variable
function nuevoAmbito(){ //variable local 
    let edad = 19
    let variableNueva;
    return edad 
}
function saludarALaVariable(){
    return "Hola " + variableNombre +" " + nuevoAmbito() 
    let variableNueva
}

mostrar(saludarALaVariable())

/*******************/

//funciones anonimas o expresadadas, no tienen un nombre y habitan dentro de una variable 

/*let suma = function(a,b){
    return a + b 
}

let resta =  function(a,b){
    return a - b 
}

//diferencia de declaradas vs expresadas 

mostrar(duplicarDeclarada(4))
//mostrar(duplicarExpresada(5))
//RefernceError: cannot access 'duplicarExpresada' before initialization 

/*function duplicarDeclarada(numero){
    return numero * 2
}

let duplicarExpresada = function(numero){
    return numero * 2
}
mostrar(duplicarExpresada(5))
//principal problema de las funciones expresadas, que no puedo invocarlas previas a su inicializacion 

/*******************/

//funcion flecha, es similar a las funciones expresadas pero con la sintaxis,
//la forma de escribirlas más acotada
/* function multiplicar(a,b){return a * b}
*
*
*/
//esta es la funcion flecha, me ahorra hacer lo de arriba, es menos sintaxis lo que tengo que escribir 
/*let multiplicar = (a,b) => a * b // >1 parametro va con parentesis
let siguienteFlecha = numero => numero + 1 
mostrar(siguienteFlecha(1))
mostrar(multiplicar(2,2))

/* EJERCICIOS DE PRACTICA 

-Calcular costo total de productos y/o servicios seleccionados para el usuario.
-Calcular pagos en cuotas sobre un monto determinado.
-Calcular el valor final de un producto seleccionado en función de impuestos y descuentos.
-Calcular el tiempo de espera promedio en relación a la cantidad de turnos registrados.
-Calcular edad promedio de personas registradas. 
-Calcular nota final de alumnos ingresados.
-Nos indique si el número es par o impar.  
*/
/*
function costoTotal(precio, cantidad){
    return "Tu costo total es " + (precio * cantidad)  
}

function calcularCostos (eleccion1,eleccion2,eleccion3){
    let costoTotal = 0
    servicio1=1000
    servicio2=2000
    servicio3=3000
    if(eleccion1=="limpieza de cutis" || eleccion2 =="limpieza de cutis" || eleccion3 == "limpieza de cutis"){
        costoTotal = costoTotal + servicio1;
   }
    if(eleccion1=="uñas esculpidas" || eleccion2 =="uñas esculpidas" || eleccion3 == "uñas esculpidas"){
        costoTotal = costoTotal + servicio2;
   }
    if(eleccion1=="uñas encarnadas" || eleccion2 =="uñas encarnadas" || eleccion3 == "uñas encarnadas"){
        costoTotal = costoTotal + servicio3;
   }
   return costoTotal
    }
    mostrar(calcularCostos("limpieza de cutis","uñas esculpidas","limpieza de cutis"))
*/

/*
Array: conjunto de variables. 
 let profesor = ["esteban", 29, "profesor"]
 console.log(profesor)
 console.log(profesor[0/])

 console.log(profesor[0]) ----> esto me devuelve esteban, porque la primera posicion es 0 

let profesor = ["Esteban", 29, "profesor", true]
 for (let i = 0; i < 4; i++){
     console.log(profesor[i])
 }

 let profesor = ["Esteban", 29, "profesor", true]
console.log(profesor.lenght)
 for (let i = 0; i < profesor.length; i++){
     console.log(profesor[i])
 }
 */