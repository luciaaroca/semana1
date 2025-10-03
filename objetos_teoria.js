//DEFINIR UN OBEJTO (Un elmento con sus carcaterísticas)
const usuario={
    Nombre:"Lucía",
    Apellido:"Aroca Solís" //!!Acordarse de que la última clave del objeto NO coma
}

//ACCEDER A LAS PROPIEDADES DE CADA OBJETO
console.log(usuario.Nombre);
console.log (usuario["Nombre"]);

//PROPIEDADES DINÁMICAS

//AÑADIR
usuario.Direccion = "The Bridge";
console.log(usuario);

//MODIFICAR
usuario.Nombre = "Rebeca"
console.log("Cambio", usuario);

//ELIMINAR
delete usuario.Direccion
//console.log("Eliminado", usuario);

//MÉTODOS NATIVOS ÚTILES (SACAN LAS CLAVES DE LOS OBJETOS Y LAS ENTRYS)

//Object.keys(obj) (te da las claves)
console.log(Object.keys(usuario));

const claves = Object.keys(usuario);
console.log (claves[0]);

//Object.values(obj)
const valores = Object.values(usuario);
console.log("valores", valores);

//Object.entries(obj) (te da tdoos los datos, es un array dentro de un arry)
const entries =Object.entries(usuario);
console.log(entries);


//RECORRER OBJETOS

//for...in
for(let clave in usuario){
  console.log(clave)  
}

const arr= ["hola", "adios", "patata"];

for(let i in arr){
  console.log("indice", i)  //sacamos el indice
}

for(let i in arr){
  console.log("indice", arr[i])  //sacamos el indice con sus elementos
}

for(let elemento of arr){
  console.log("elemento", elemento)  //Estamos sacando el elemnto del array (sacamos el valor con OF)
}

//OBJETOS DENTRO DE OBJETOS
const personas = {
    id: 3,
    nombre: "Lucia",
    direccion: {
        ciudad: "Madrid",
        direcion:"The Bridge"
    }
}
console.log (personas.direccion.ciudad);

//ARRAYS DE OBJETOS

const pelis =[
    {
        titulo: "Matrix",
        year: 1999

    },
    {
        titulo:"El Padrino",
        year: 1972
    }
]

for( let peli in pelis){
    console.log (pelis [peli])
}
for( let peli of pelis){
    console.log (peli.titulo)
}

//COMPARACIÓN DE OBJETOS


let numero1 = 5;
let numero2 = 5;
console.log(numero1 === numero2); //True ---aqui comparamos el valor

let obj1= {titulo:"Matrix"}
let obj2= {titulo: "Matrix"}
console.log(obj1===obj2); //False ----aqui comparamos referencias (tiene distintos id cada objeto)

//SPREAD OPERATOR {...obj} ---coge todos los datos y además le añadimos otra clave más, esto hace una copia
//objetos
const coche ={
  marca:"Peugeot",
  modeo:"306"
}
coche.year = 2000;
console.log (coche);

const coche2 ={...coche, categoria: "deportivo"}
console.log (coche2);

//array
const array1 =["hola", "adios",];
const array2 =[...array1, "muy buenas"];
console.log (array2);