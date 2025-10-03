

//IMPRIMIR LA TERCERA ELTRA DE CADA ELEMENTO DEL ARRAY
let frutas = ["plátano","manzana","peras","melón"];

for (let i=0; i<frutas.length; i++){
     console.log(frutas[i][2]);
}
//frutas[1] ---> accede a cada elemento del array
//frutas[1](2) ---> accede a cada elemento del array y dentro a la 3º letra




//LO MISMO PERO CON FOR..OF

for(let fruta of frutas){
 console.log(fruta[2])
}





//BUCLE DOBLE (EJERCICIO DE RAZONAR)
//Quiero que "manzana" se convierta ---> "m:a:n:z:a:n:a" con cada elemeneto
//objetivo de salida: ["p:l:á:t:a:n:o","m:a:n:z:a:n:a".....] ---esto es un nuevo array (todo junto)
//LO HABIAMOS HECHO CON FOR, AQUI CON FOR..OF

const resultadoFrutas = [];

for (let fruta of frutas){
    const letras =[];
    for(let letra of fruta){
      letras.push(letra)
    }
resultadoFrutas.push(letras.join(":"));
}
console.log(resultadoFrutas);






//FUNCIONES (en base a unos argumentos te da un resultado)
//objetivo que nos devuelva la función:
   //prefijo entre 1 y 3 cifras
   //teléfono hasta 9 cifras
//return: "Llamando a +34 622726278" o "Error de los datos"

function llamar(prefijo, tlf){
    if(
        (typeof prefijo ==="number" &&
         prefijo.toString().length >=1 &&
         prefijo.toString().length <=3  
        )&&
        (typeof tlf ==="number" &&
            tlf.toString().length >=1&&
            tlf.toString().length <=9 
        )
    ){
        return `llamar a ${prefijo} ${tlf} `
    } else{
        return "Error de datos"
    }
};
console.log(llamar(35, 679045678));

//LO MISMO PERO CON UNA FUNCIÓN FLECHA
/* const llamar = (prefijo, tlf) => {
    if (
        (typeof prefijo === "number" &&
         prefijo.toString().length >= 1 &&
         prefijo.toString().length <= 3) &&
        (typeof tlf === "number" &&
         tlf.toString().length >= 1 &&
         tlf.toString().length <= 9)
    ) {
        return `llamar a ${prefijo} ${tlf}`;
    } else {
        return "Error de datos";
    }
};

console.log(llamar(35, 679045678)); */







//ELIMINAR DUPLICADOS DE UN ARRAY

function eliminarDuplicados(datos){
    let result=[];
    for (let num of datos){
        if(!result.includes(num)){ //nos dice si ya existe ese valor en un array o string
            result.push(num)
        }
    }
    return result
}

console.log(eliminarDuplicados([1,2,33,33,4,55,55,6,6,7]));





//ENCONTRAR UN PUNTO FIJO (INIDICE=NÚMERO)
//ESTO ES COMO LO HICIMOS EN CLASE---YO LO VOY A HACER CON UN FOR...OF
/* function findFixedPoint(apple){
    for(i=0; i<apple.length; i++){ //recorremos el bucle
        if(i==apple[i]){ // si la posición es igual al número
            return i;
        }
    }
    return false;
}

console.log(findFixedPoint([44,3434,21,3,22])); */ 

function findPoint(numeros){
    for(let numero of numeros){ //el numero de cada numeros
        if(numero==numeros[numero]){ //si numero es igual (==) a el indice de numeros
            return numero;
        }
    }
    return false;
}

console.log(findPoint([44,3434,21,3,22])); //3
console.log(findPoint([44,3434,21,8,22])); //false




//DIFERENCIA CLARA ENTRE FOR OF / FOR IN EN ARRAYS

const array1 =["patata", "tortilla", "pescado"];

for(let elemento of array1){
    console.log(elemento)
} // patata...tortilla...pescado

for(let indice in array1){
    console.log(indice)
} // 0,1,2


//RECORRER OBJETOS ---FOR IN (TE DEVUELVE LA CLAVE DEL OBJETO)
const usuario={
    Nombre:"Lucía",
    Apellido:"Aroca Solís" //!!Acordarse de que la última clave del objeto NO coma
}

for (let clave in usuario){
    console.log(clave)
}
