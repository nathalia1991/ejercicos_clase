let edad=3
let nombre="Nathalia"

//if
if(edad>=18){
     console.log("BIENVENIDO ",nombre, " a la aplicación")
}else if(edad==18){
     console.log("aun no tienes la edad suficiente")
}
else{
     console.log("LO SIENTO NO ERES MAYOR DE EDAD, TIENES",edad,"AÑOS" )
}


//operador ternario
let mayoredad=(edad>=18)? "eres mayor de edad":"eres menor de edad"
console.log(mayoredad)

//estructura switch
let opcion, num1, num2, result;
opcion="suma"
num1=12
num2=54

switch (opcion){
     case"suma":
     console.log("escogiste suma")
     result=num1+num2
     break;
     case"resta":
     console.log("escogiste resta")
     result=num1-num2
     break;
     case"multiplicacion":
     console.log("escogiste multiplicacion")
     result=num1*num2
     break
     default:
          console.log("operacion no definida")
          break;
}
console.log(result)
