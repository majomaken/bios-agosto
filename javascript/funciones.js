/*
 Las funciones en JavaScript son bloques de código reutilizables que se pueden definir una vez y
 ejecutar múltiples veces.
 Permiten modularizar el código, hacerlo más legible y facilitar su mantenimiento.
 las funciones tienen una entrada -> proceso -> salida
 */

 // Sintaxis de una funcion declarativa

function greet(){
console.log("Hello World")
}
// llamada de la funcion
greet() // Salida: Hello world

//parametros y argumentos: las funciones permiten recibir datos por parametros desde fuera de la funcion:

function greetWithName(name){
    console.log(`hello ${name}`)
}

greetWithName("Karina")

//valores de retorno: Una funcion puede devolver un valor utilizando la palabra clave return

function sum(a,b){ // entrada a y b
    const result = a + b //proceso de suma
    return result; // salida de la funcion number
}
//tipos: Number, String, Booleano, null o undefined

const result = sum(2,4)
console.log(result)


// Funciones Expresivas o Funciones Anonimas
/* Una funcion puede ser asignada a una variable, lo que permite definir funciones anonimas o
expresivas Las funciones en JavaScript son bloques de código reutilizables que se pueden definir
una vez y ejecutar múltiples veces. Permiten modularizar el código, hacerlo más legible y facilitar
su mantenimiento. */

const multiply = function (a,b) {
    return a * b;
}

// Funciones Flecha (arrow functions)
/* Ofrecen una sintaxis mas compacta */

const divide = (a,b) => a/b;
const divideResult = divide(10,2)
console.log(`El resultado de la div ${divideResult}`)

//funciones flechas con cuerpo completo
const addAndMultiply = (a,b) => {
    const sum = a + b
    return sum * 2
}

console.log(addAndMultiply(4,3))

const globalVariable = "Soy global"

const showGlobal = () => {
    console.log(globalVariable)
}



const localScope = () =>{
    showGlobal()
    const localVariable = "soy local"
    console.log(localVariable)

}

localScope()

//funciones anidadas:
/* Son funciones definidas dentro de otras funciones lo que crea un "ambito lexico", la funcion
definida dentro de otra funcion teiene acceso a las variables de la funcion externa.*/

const outerFunction = (outerVariable) =>{
    // se puede utilizar para inicializar variables o estados.
    const innerFunction = (innerVariable) => {
        console.log(`Outer: ${outerVariable}`)
        console.log(`Inner: ${innerVariable}`)
    }
    innerFunction("Hola desde adentro")
}
outerFunction("Hola desde afuera")


//Cierres o Closures
/* Un cierre es una funcion que recuerda el entorno en el que se creo.
Los cierres son utiles para crear funciones con un "Estado" persistente:*/

const makeCounter = () => {
    let count = 0

    return () => {
        count++
        return count
    }
}

const counter = makeCounter()

for(i=0; i < 5; i++){
   console.log(counter())
}