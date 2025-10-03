console.log("hola");

//DECLARAR UN ARRAY
let frutas = ["plátano","manzana","peras","melón"];

//RECORRER UN ARRAY
for (let i =0; i<frutas.length;i++){
    console.log(frutas[i]); //nos devuelve cada elemento del array
    console.log(frutas[i][2]); //imprime la tercera letra de cada palabra, primero estas accediendo a cada oalabra y luego a la tercera letra de cada una
    //imprimir solo las frutas impares
    if(i%2 !== 0){
        console.log("Impares:", frutas[i]);

    }
}
//BUCLE DOBLE (EJERCICIO DE RAZONAR)
//Quiero que "manzana" se convierta ---> "m:a:n:z:a:n:a" con cada elemeneto
//objetivo de salida: ["p:l:á:t:a:n:o","m:a:n:z:a:n:a".....] ---esto es un nuevo array (todo junto)
let resultadoFrutas=[]; //aqui vamos guardando cada fruta en un array
for (let i =0; i<frutas.length;i++){
    const myFruit= frutas[i]; //Ej:"plátano"
    let resultado = "";
    for (let j =0; j< myFruit.length;j++){ //recorrer cada letra
      if(j<myFruit.length-1) {
        resultado += myFruit[j]+":"; //concatenar (+=)
      }
      else{
        resultado += myFruit[j]; //concatenar última posición
      }
    }
    console.log(resultado); //cada una de las frutas transformadas
    resultadoFrutas.push(resultado) //método push
}
console.log(resultadoFrutas);

//MISMO EJERCICIO CON MÉTODOS (MISMO RESULTADO, MENOS RAZONAMIENTO)
let resultadoFrutas2=[]; //aqui vamos guardando cada fruta en un array
for (let i =0; i<frutas.length;i++){
    const myFruit= frutas[i]; //Ej:"plátano"

    let letras = myFruit.split("") ;// hace un array de letras ---> ["p","l","a","t","a","n","o"]
    let resultado =letras.join(":"); // ["p:l:a:t:a:n:o"]

    console.log(resultado); //cada una de las frutas transformadas
    resultadoFrutas2.push(resultado) //método push
}
console.log(resultadoFrutas2);

//FUNCIONES (en base a unos argumentos te da un resultado)
//objetivo que nos devuelva la función:
   //prefijo entre 1 y 3 cifras
   //teléfono hasta 9 cifras
//return: "Llamando a +34 622726278" o "Error de los datos"
function llamar(prefijo,telefono){ //34 , 622726278
  if(
      (typeof prefijo === "number" &&
        prefijo.toString().length >=1 &&
        prefijo.toString().length <=3) 
        &&
      (typeof telefono ==="number" &&
        telefono.toString().length ==9)
    ) {
     return `Llamando a + ${prefijo} ${telefono}`;

    }else{
      return "Error de datos";
    }
}
console.log (llamar(34, 634587903)); //Ejecutamos la función

function suma (a,b) { //declaración (suma es su nombre) , los parentesis contienen los arguentos, 
  return a + b //una función solo tiene una salida, es decir un return
}
console.log (suma (4, 5));

function suma2 (a,b) {   
  return { //aqui estamos haciendo un objeto ya que queremos varias cosas pero solo podemos poner un return
    resultado: a + b,
    numero1: a,
    numero2:b
  }
}
console.log (suma (4, 5));

//funciones flecha
const suma3 =(a, b) => a + b //la diferencia de la flecha es que directamente te lo pone todo en una variable.
console.log (suma3(1, 5)); //en este caso despues de => al ser tan simple no hace falta {}, cuando se metan concicionales etc.. si que hacen falta, incluido el return

