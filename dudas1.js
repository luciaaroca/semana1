function suma(a, b){
  return a+b //si no está da undefined (aqui es donde ejecuta la función, con el console.log vemos los resultados)
}
console.log (suma (1,4) +5)
console.log (suma (1,4) + " hola");


/*const suma2 = (a,b) => { //si le ponemos llaves necesitamos las llaves, se utilizan paara NO ponerlas y que sean más visuales.
return a + b
}*/
const suma2 = (a, b) => a+b //esta es la forma útil de utilizarlo, son para cosas muy pequeñas.
console.log (suma2 (1,4));