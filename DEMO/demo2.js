//Eliminar duplicados
//parámetro:datos -->[1,2,33,33,4,55,55,6,6,7] este es el array original
//return: [1,2,33,4,55,6,7]


function eliminarDuplicados(datos){
    let result =[]; //Aqui vamos guardando los datos no duplicados
    for (let i= 0; i < datos.length; i++) {

        if(!result.includes(datos[i])){ //comprueba si e numero que le pasas ya está incluido en result
           result.push(datos[i]); //si no esta incluido--almacenar el array sin duplicar
        }
    }
    return result;
}
console.log(eliminarDuplicados([1,2,33,33,4,55,55,6,6,7]));


//MISMO EJERCICIO SIN INCLUDES (método)
function eliminarDuplicados2(datos){
    let result =[]; //Aqui vamos guardando los datos no duplicados (array datos sin duplicar)
    for (let i= 0; i < datos.length; i++) { //recorre cada num

        let encontrado = false;

        for (let j = 0; j < result.lengtht; j++){//Comprobar si ya se guardó el número
          if(result[j]===datos[i]){
            encontrado=true;
            break; //lo paramos (deja de buscar)
          }
        }
        if(encontrado ===false){
            result.push(datos[i]); //almacenar el array de datos sin duplicar
        }    
        }
         return result; 
    }
console.log(eliminarDuplicados2([1,2,33,33,4,55,55,6,6,7]));

//WHILE (lo mismo que anteriormente) ---en este caso es más práctico bucle for ya que son números

function eliminarDuplicados3(datos){
    let result = []; // array datos sin duplicar

    let i = 0;

    while(i < datos.length){
        if(!result.includes(datos[i])){
            result.push(datos[i]); // almacenar en array de datos sin duplicar
        }
        i++;
    }

    return result;
}

console.log(eliminarDuplicados3([1,2,33,33,4,55,55,6,6,7]));

//MÁS EJEMPLOS DE WHILE , quiero que cuando llegue al 2020 haga break
let year = 1995;
while( year<= 2025){
    if (year%2 ===0){
        console.log(year);   
    }
    if (year ===2020){
        break;
    }
    year ++;

}