/*
3.Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y 
muestre por cuantas palabras está
compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 
literal d.
*/

let arreglo = "Javascript es genial"
let palabras=1

for (let index = 0; index < arreglo.length; index++) {
    //if de solucion 
    if (arreglo[index]==" ") {
        palabras++
    }
}

//salida de datos
console.log("esta cadena tiene ",palabras," palabras");