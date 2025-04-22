// let btn = document.getElementById('btn')
// let counter = document.getElementById('counter')
// let count = 0

// btn.addEventListener('click', () => {
//     count ++
//     counter.textContent = `${count}`
// })

// let caja = document.getElementById('caja')

// caja.addEventListener('mouseover', () => {
//     caja.style.background = 'pink'
// })
// caja.addEventListener('mouseout', ()=>{
//     caja.style.background = 'blue'
// })

// let tecla = document.getElementById('tecla')

// document.addEventListener('keydown', (event)=>{
//     console.log(event);
    
//     tecla.textContent = `${event.key} - ${event.keyCode}`
// })

// let input = document.querySelector('input')
// let preview = document.getElementById('preview')

// // input.addEventListener('input', (event)=>{
// //     console.log(event);
    
// //     preview.textContent = event.target.value

// // })

// input.addEventListener('focus', ()=>{
//     input.style.border = '2px inset pink'
// })

// input.addEventListener('blur', ()=>{
//     input.style.border = ''
// })

// let form = document.querySelector('form')
// form.addEventListener('submit', (event)=>{
//     const name = input.value.trim()
//     if (!name){
//         alert('Escriba su nombre!!!!!!!!!!!!!!!')
//     }else{
//         preview.textContent = name
//     }
// })
// let preview = document.getElementById('preview')
// window.addEventListener('resize', (event)=>{
//     preview.textContent= `${event.target.innerHeight}px - ${event.target.innerWidth}px`
// })

// let top = document.getElementById('btn')
// window.addEventListener('scroll', (event)=>{
//     if(window.scrollY>200){
//         btn.style.display = 'block'
//     }else{
//         btn.style.display = 'none'
//     }
// })

// top.addEventListener('click', ()=>{
//     window.scrollTo({top:0, behavior: "smooth"})
// })


//Ahorcado
let teclado = document.getElementById('letras');
let palabra = document.getElementById('palabra');
let palabras = ['colibri', 'palmera', 'edificio', 'botella', 'javascript', 'talia', ]
let partes = document.querySelectorAll(".parte");
let restart = document.getElementById('btn-reset');
console.log(partes);


function generateWord() {
    let random = Math.floor(Math.random() * palabras.length);
    let word = palabras[random];
    let countererrores = 0;
    let maxErrores = 6;

    for (let i = 0; i < word.length; i++) {
        let letra = document.createElement("span");
        letra.id = i;
        palabra.appendChild(letra)
    }
    console.log(word);
    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        const boton = document.createElement("button");
        boton.textContent = letra;
        boton.addEventListener("click", () => comprobarLetra(letra.toLowerCase(), boton));
        teclado.appendChild(boton);
    }
    function comprobarLetra(letra, boton) {
        boton.disabled = true;
        let acierto = false;
        const spans = palabra.querySelectorAll("span");
  
        word.split("").forEach((letraPalabra, i) => {
          if (letraPalabra === letra) {
            spans[i].textContent = letra;
            acierto = true;
          }
        });
  
        if (!acierto) {
          partes[countererrores].style.display = "block";
          countererrores++;
          if (countererrores === maxErrores) {
            alert("Se ahorcó");
          }
        }
      }
    
}
restart.addEventListener('click', ()=>{
    teclado.innerHTML = '';
    palabra.innerHTML = '';
    partes.forEach(parte=>{
        parte.style.display = 'none'
    })
    generateWord()
})
generateWord()


