/*
2.Dada la cadena “Somos SENA”:
c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”
d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
variable contadora para contar el número de veces que se encuentra la letra “o”
*/

let arreglo = "Somos SENA"
let e = false 
let o = 0

for (let index = 0; index < arreglo.length; index++) {
    //A
    if (arreglo[index]== "e" ||  arreglo[index]=="E") {
        e = true
    }
    //B
    if (arreglo[index] =="o" || arreglo[index]=="O") {
        o++
    }
}


// verificacion de A y B 
if (e) {
    console.log("esta cadena SI contiene la letra e");
    console.log("esta cadena tiene ",o, " veces la letra o");
}else{
    console.log("esta cadena NO contiene la letra e");
    console.log("esta cadena tiene ",o, " veces la letra o");
}
