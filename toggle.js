// toggle logic

let menu_icon = document.getElementById('menu-icon');
let links = document.getElementById('links');

menu_icon.addEventListener("click",()=>{
    links.classList.toggle('active')
})