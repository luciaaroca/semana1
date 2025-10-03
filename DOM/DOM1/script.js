//1
const h1 =document.getElementById("titulo");
h1.innerText = "Ahora soy un innerText"; //cambia a traves de JS el html (el DOM)
h1.innerHTML = "Ahora soy un <span>innerText</span>"; //aqui podemos poner lo de span

console.log(h1.innerHTML);

//2
const parrafo =document.getElementById("parrafo")
parrafo.style.color ="#dd8a0eff"
parrafo.style.backgroundColor ="beige"
parrafo.style.fontSize="30px"

//3
const cambioParafo =document.getElementById ("cambioParrafo")
const boton =document.getElementById ("boton")

boton.addEventListener("click",()=> {
    cambioParafo.innerText ="He cambiado, ves!!"
    cambioParafo.style.backgroundColor = "#76dcd4ff"
})

//4
const imagen = document.getElementById ("imagen")
const btnImagen = document.getElementById ("cambioImagen")

btnImagen.addEventListener("click",()=>{
    imagen.src = "https://i.pinimg.com/736x/fa/96/bf/fa96bf18aeab6c3a88d380a8fa0bb3bc.jpg"
})

//5
const mouse = document.getElementById("mouse"); //el nombre de la variable (const mouse) no es el mismo luego el id, la variable es donde guardamos todo (normalmente se llama igual que el id)
mouse.addEventListener("mouseover",()=>{
    mouse.style.backgroundColor = "#2fc92aff"
})
mouse.addEventListener("mouseout",()=>{
    mouse.style.backgroundColor = "pink"
})

//6
const frases =document.querySelectorAll(".frase") //genera una lista
console.log (frases)
console.log (frases[0])

for(let elemento of frases){
    elemento.addEventListener("click", () =>{
    elemento.innerHTML = "HOLA"
})
}

//7
const msg =document.getElementById("msg")
const enlace =document.getElementById("enlace")

enlace.addEventListener("click", (evento) =>{
   evento.preventDefault()
   msg.innerText ="No puedes Salir!"
})

//8
const h2 =document.querySelector("article h2")
const p =document.querySelector("article p")
const img =document.querySelector("article img")

h2.addEventListener("click", ()=>{
    h2.innerText ="Hechizo Lanzado"
})

p.addEventListener("click", () => {
    p.style.backgroundColor= "green"
    p.style.color = "white"
})

img.addEventListener ("mouseover", ()=>{
    img.src ="https://i.pinimg.com/736x/fa/96/bf/fa96bf18aeab6c3a88d380a8fa0bb3bc.jpg"
})

img.addEventListener ("mouseout", ()=>{
    img.src ="https://i.pinimg.com/736x/a6/bb/c0/a6bbc01e88fb716f2502b999a8e1f5b5.jpg"
})

//BONUS

const input = document.getElementById("input")
const listado =document.getElementById("listado")
const buttonList =document.getElementById("buttonList")

buttonList.addEventListener("click", ()=>{
    const texto = input.value //aqui cogemos el valor del input y lo cogemos en una nueva variable
    if(texto.trim()!== ""){ //este if lo hemos puesto para si no se escribe algo que no se mande
    listado.innerHTML +=`<li>${texto}</li>` //aqui estamos cambiando el id listado de texto---li (), el += es ir sumando cada vez, si fuse  = nos lo cambiaria pero no acumula esa lsita
    input.value=""
    }else{
        console.log("Escribe algo por favor") //aqui nos sale un aviso por consola 
    }
})

//BOTÓN ENTER
//KEY UP


