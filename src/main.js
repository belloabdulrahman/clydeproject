
let openBtn = document.querySelector(".bi-list")
let closeBtn = document.querySelector(".bi-x-square")
let menu = document.querySelector(".navbar__menu")
let Btn  = document.querySelector(".btn-book")
let Btn1  = document.querySelectorAll('.btn');
openBtn.addEventListener("click",()=>{
    openBtn.classList.toggle("hide")
    closeBtn.classList.toggle("hide")
    menu.classList.toggle("hidden")
})

closeBtn.addEventListener("click",()=>{
    openBtn.classList.toggle("hide")
    closeBtn.classList.toggle("hide")
    menu.classList.toggle("hidden")
})


    Btn.addEventListener('click', () => {
     window.location.href = "/booking.html"
    })
   

Btn1.forEach(button => {
    button.addEventListener('click', () => {
         window.location.href = "/services.html"
    })
  })
