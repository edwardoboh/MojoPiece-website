const menuOpen = document.querySelector(".menu-open")
const menuClose = document.querySelector(".menu-close")
const nav = document.querySelector("nav")

menuOpen.addEventListener('click', function(){
    nav.setAttribute("class", "animate")
})

menuClose.addEventListener('click', function(){
    nav.removeAttribute("class", "animate")
})