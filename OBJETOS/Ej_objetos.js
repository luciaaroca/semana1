
/*### Ejercicio 1
Crea un objeto `coche` con propiedades: `marca`, `modelo`, `año`.
* Añade un método que devuelva la frase `"Mi coche es un [marca] [modelo]"`.
---*/


let coche = {
    marca: "Volvo",
    modelo: "C5",
    year: 2015
};
console.log ("Mi coche es un", coche.marca , coche.modelo);



/*### Ejercicio 2
Dado el objeto:
```js
const libro = {
  titulo: "El Quijote",
  autor: "Cervantes",
  paginas: 863
};
``
* Imprime todas las claves.
* Imprime todos los valores.
* Añade la propiedad `anio: 1605`.
---*/

const libro = {
  titulo: "El Quijote",
  autor: "Cervantes",
  paginas: 863
};

console.log (Object.keys(libro)); //claves
console.log (Object.values(libro)); //valores
libro.anio = 1605 //añadir un valor
console.log(libro);

/*### Ejercicio 3
Crea un array de objetos `pokemons`, con al menos 3 Pokémon, cada uno con: `nombre`, `tipo` y `nivel`.
* Recorre el array e imprime `"Pikachu es de tipo Eléctrico y nivel 12"`.
---*/

let pokemons = [
    {
        nombre: "Picachu",
        tipo: "Fuego",
        nivel: 5
    },
    {
        nombre: "Gormiti",
        tipo: "Tierra",
        nivel: 2
    },
    {
        nombre: "Tor",
        tipo: "Aire",
        nivel: 10
    },
]

for (let pokemon of pokemons){
    console.log (`${pokemon.nombre} es de tipo ${pokemon.tipo} y nivel ${pokemon.nivel}`)
} //sacar todos


console.log (`${pokemons[0].nombre} es de tipo ${pokemons[0].tipo} y nivel ${pokemons[0].nivel}`);
//sacar uno en concreto poniendo el índice del array

/*## Ejercicio 4
Dado:
```js
const usuarios = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 25 },
  { nombre: "Marta", edad: 30 }
];
```
* Devuelve solo los usuarios mayores de 22.
* Devuelve los nombres en un array.
---*/
const usuarios = [
  { 
    nombre: "Ana",
     edad: 20 
    },
  { 
    nombre: "Luis", 
    edad: 25 
    },
  { 
    nombre: "Marta",
    edad: 30 
    }
];

 let maxAge=[]
for (let usuario of usuarios){
    if(usuario.edad>22){
       maxAge.push(usuario);
    }
}
console.log(maxAge);

/*Sistema de gestión de tareas*/

/*1. Crea un array llamado `tareas`, que empiece vacío.*/
let tareas = []; //va fuera porque tiene que ser accesible para todos. Esto se puede meter dentro de la funcion, en vez de poner el console log que tenemos ahora pondriamos un return dentro de tareas.
/*2. Cada tarea será un objeto con:
   * `id`
   * `descripcion`
   * `completada` (true/false).*/

/*3. Crea funciones (métodos independientes) para:*/
  /* `agregarTarea(descripcion)`*/
 

function agregarTarea (id, descripcion){  //definimos los valores que va a tratar la función
   let tarea ={ //generamos el obejto
     id: id,
     descripcion: descripcion,
     completada: false
   }
   tareas.push(tarea) //lo subimos en el array principal (si esto lo sacamos de la función no coge el objeto tarea, por eso hayq ue hacerlo dentro)

}
agregarTarea (3, "aprendiendo programación") //aqui invocamos la función para añadir los valores que nos piden (esto lo podemos hacer varias veces)
agregarTarea (1, "aprendiendo programación")
console.log(tareas); //ejecutamos la función

/* `completarTarea(id)`*/

for (let tarea of tareas){
  if (tarea.id ===1){
    tarea.completado=true
  }
}

/*`listarTareas()` → que muestre todas con su estado*/
function listarTareas(){
  let text =""
  for (let tarea of tareas){
    text += `esta es la tarea ${tarea.id} con la descripción: ${tarea.descripcion}. ¿esta completado?: ${tarea.completado}`
  }
  return text
}
console.log (listarTareas());














