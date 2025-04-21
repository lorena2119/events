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
let palabras = ['colibri', 'palmera', 'edificio', 'botella', 'javascript', 'talia']
for (let i = 65; i <= 90; i++) {
    const letra = String.fromCharCode(i);
    const boton = document.createElement("button");
    boton.textContent = letra;
    boton.addEventListener("click", () => comprobarLetra(letra.toLowerCase(), boton));
    teclado.appendChild(boton);
  }