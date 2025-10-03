// Este problema fue planteado por Apple.
// Un punto fijo en un array es un elemento cuyo valor es igual a su índice.
// Dado un array ordenado de elementos distintos, se devuelve un punto fijo, si existe.
// De lo contrario, se devuelve Falso.
// Por ejemplo, dado [-6, 0, 2, 40], se debe devolver 2. 
// Dado [1, 5, 7, 8], se debe devolver Falso.

function findFixedPoint(apple){
    for(i=0; i<apple.length; i++){ //recorremos el bucle
        if(i==apple[i]){ // si la posición es igual al número
            return i;
        }
    }
    return false;
}

console.log(findFixedPoint([44,3434,21,3,22]));

