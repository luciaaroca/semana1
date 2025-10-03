//PAso 3
import pokemons from "./pokemons.js" //traemos el scirpt de pokemons, al hacerlo en pokemons por default, se hace por defecto y tiene esta estructura
console.log(pokemons)

//PASO4
//Tengo que hacer un bucle para recoger cada uno de los pokemos y ponerlo en pantalla. Quiero sacar la foto, el nombre y el tipo.

/*for
<h2>NOMBRE</h2>
<p>TIPO</P>
<img src="url">*/
/*const result = document.getElementById("result"); //estamos capturando la ul del html

for(let pokemon of pokemons){ //el pokemon de pokemos
   console.log(pokemon.nombre) //queremos sacar el nombre de cada pokemon
   result.innerHTML += //aqui lo que queremos es modificar el html, crear una lista de los nombres, tipo y su imagen
   `<li>
      <h2>${pokemon.nombre}</h2>
      <p>Tipo: ${pokemon.tipo}</p>
      <img src=${pokemon.imagen_front} alt=${pokemon.nombre}/>
    </li>`  
}*/

//PASO 5 (lo hemos mezclado con el 4)
/*const result =document.getElementById("result");
for(let pokemon of pokemons){ //el pokemon de pokemos
    if (pokemon.tipo === "Agua"){
   console.log(pokemon.nombre) //queremos sacar el nombre de cada pokemon
   result.innerHTML += //aqui lo que queremos es modificar el html, crear una lista de los nombres, tipo y su imagen
   `<li class="card">
     <header class="cardHeader">
       <h2>${pokemon.nombre}</h2>
       <p>Poder:${pokemon.hp}</p>
     </header>
     <div class="image">
        <img src=${pokemon.imagen_front} alt=${pokemon.nombre}/>
     </div>
     <p>Tipo: ${pokemon.tipo}</p>
    </li>` 
    } 
}*/

//6 Parte en css
const agua = document.getElementById("agua")
const fuego = document.getElementById("fuego")
const normal= document.getElementById("normal")
const planta = document.getElementById("planta")
const electrico = document.getElementById("electrico")

// for(let pokemon of pokemons){ //el pokemon de pokemos
//     if (pokemon.tipo === "Agua"){
//    console.log(pokemon.nombre) //queremos sacar el nombre de cada pokemon
//    result.innerHTML += //aqui lo que queremos es modificar el html, crear una lista de los nombres, tipo y su imagen
//    `<li class="card">
//      <header class="cardHeader">
//        <h3>${pokemon.nombre}</h3>
//        <p>Poder:${pokemon.hp}</p>
//      </header>
//      <div class="image">
//         <img src=${pokemon.imagen_front} alt=${pokemon.nombre}/>
//      </div>
//      <p>Tipo: ${pokemon.tipo}</p>
//     </li>` 
//     } 
// }



//7 - funciones (`getPokemonsByType`)(`renderPokemons`)

function getPokemonsByType (type){ //estamos filtrando cualquier tipo de pokemon (type podemos poner lo que queramos)
    const pokemonsFilter =[]
    for (let pokemon of pokemons){
        if (pokemon.tipo === type){
            pokemonsFilter.push(pokemon) //estamos añadiendo al array este tipo de pokemon
        }
    }
    return pokemonsFilter //tenemos que sacarlo para que nos de el resultado ya que tiene que recorrerse el bucle y luego sacar el array
}

function renderPokemons(placeholder, type){ //esto es donde filtramos el tipo (abajo) renderPokemons (agua,"Agua") --la primera agua es placeholder
  for(let pokemon of getPokemonsByType(type)){//nos está dando un array con el tipo filtrado
  placeholder.innerHTML += 
  `<li class="card">
   <header class="cardHeader">
     <h3>${pokemon.nombre}</h3>
     <p>Poder:${pokemon.hp}</p>
     </header>
     <div class="image">
         <img src=${pokemon.imagen_front} alt=${pokemon.nombre}/>
     </div>
     <p>Tipo: ${pokemon.tipo}</p>
   </li>` 
}
}
renderPokemons(agua,"Agua");
renderPokemons(fuego,"Fuego");
renderPokemons(electrico,"Eléctrico");
renderPokemons(normal,"Normal");
renderPokemons(planta,"Planta");




// console.log(getPokemonsByType ("Agua")); //esto tiene que estar escrito igual que el objeto de pokemons.js
// getPokemonsByType ("Fuego"); //esto tiene que estar escrito igual que el objeto de pokemons.js
