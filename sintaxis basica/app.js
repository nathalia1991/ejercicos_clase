//Para definir una variable global utilizo var
var variable="Nombre variable"
// Para imprimir el valor de la variable en consola utilizo console.log()
console.log(variable)
console.log("Hola mundo! Es mi primera aplicación")

variable="Segundo nombre de la variable"
console.log(variable)

variable=2345678
console.log(variable)

var variableDos;
console.log(variableDos)

variableDos="Segunda variable"
console.log(variableDos)

//Variables locales
//Un bloque de codigo es cualquier codigo que este encerrado en llaves
let variableLocal="Segundo valor";
{
    let variableLocal="Primer valor"
    console.log(variableLocal)
    var variableGlobal="Variable global"
    console.log(variableGlobal)
}
console.log(variableGlobal)
console.log(variableLocal)

let numero = 13;
//Para los booleanos tenemos dos posibles valores:
//True=>Verdadero
//False=>Falso
let booleano=false
let caracteres="Hola mundo!"
let caracter='C'

let nombre="Liliana"
{
    let nombre="Oscar"
    console.log(nombre)
}
console.log(nombre)

var edad=32;
{
    var edad=23;
    console.log(edad)
}
console.log(edad)

// Constantes: es un dato que no va a cambiar

const PI=3.1416
console.log(PI)

console.log("-------------------- Operadores aritmeticos")



//operadores aritmeticos
let num1, num2, resuktado

num1=65
num2=87

//suma
resultado=num1+num2
console.log("el resultado de la suma es: ", resultado)
//resta
resultado=num1-num2
console.log("el resultado de la resta es: ", resultado)
//multiplicacion
resultado=num1*num2
console.log("el resultado de la multiplicacion: ", resultado)
//division
resultado=num1/num2
console.log("el resultado de la division es: ", resultado)

//operaciones combinadas
resultado=(num1*num2)/(num2-num1)
console.log("el resultado de op combinada es: ", resultado)

num1=num1+1
//incremento, aumenta la variable en una unidad

num2++
console.log(num1)
console.log(num2)

//decremento, quita a la variable una unidad
num1--
num2--
console.log(num1)
console.log(num2)

console.log("operadores comparacion")

num1=13
num2=5
//mayor que
resultado=num1>num2;
//menor que
resultado=num1<num2;
//mayor o igual que
resultado=num1>=num2;
//menor o igual que
resultado=num1<=num2;
//igual, me permite comparar nuemros y caracteres
resultado=num1==num2;
//modulo o residuo
resultado=num1%2;
console.log(resultado)
num1%num2

console.log("-------------------- Operadores logicos")

//El operador Y (AND) &&
//Verdadero => True
//Falso => False
resultado=true && true
//Operador O (OR) ||
resultado=false || false
//Negación !
resultado=!true
console.log(resultado)