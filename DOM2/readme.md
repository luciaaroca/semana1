# Ejercicio: Pokémons con JavaScript y el DOM
En este ejercicio vamos a practicar:
- Uso de **módulos en JavaScript** (`import` / `export`)
- Manipulación del **DOM**
- Filtrado de arrays
- Creación de funciones reutilizables
---
## Pasos del ejercicio
### 1. Crear el archivo `pokemons.js`
- Dentro de este archivo definiremos un **array de objetos** con los Pokémon.
- Cada Pokémon debe tener como mínimo:
  - `id`
  - `nombre`
  - `tipo` (`Agua`, `Fuego`, `Planta` o `Eléctrico`) - Más abajo está el array de pokemons
  - `ataque`
  - `imagen_front`
  - `imagen_back`
---
### 2. Configurar el `index.html`
* Enlazamos `script.js` pero usando **type="module"** para poder importar.
---
### 3. Importar en `script.js`
* Importamos el array de los pokemons y lo mostramos por consola:
---
### 4. Pintar en pantalla
* usamos un bucle para recorrer el array y mostrar cada Pokémon en pantalla. Usamos `innerHTML`.
---
### 5. Filtrar solo los Pokémon de tipo Agua
* Creamos un nuevo array filtrado solo por los pokemos de agua y lo mostramos en pantalla.
---
### 6. Dale estilo
* Haz cards de cada uno de los pokemons, que tengan un aspecto similar a las cartas pokemon
### 7. :bum: Nivel "explotar la cabeza". Creamos funciones reutilizables
* Separar responsabilidades en **dos funciones**:
  1. Una para obtener datos filtrados (`getPokemonsByType`)
  2. Otra para pintar (`renderPokemons`)
---
## :dardo: Objetivos de aprendizaje
* Aprender a **modularizar código** con `import`/`export`.
* Practicar la manipulación del **DOM** con `innerHTML`.
* Crear **funciones reutilizables** para mantener el código limpio.

