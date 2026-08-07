// toggle logic

let menu_icon = document.getElementById('menu-icon');
// let close_icon = document.getElementById('close-icon');
let links = document.getElementById('links');

menu_icon.addEventListener("click",()=>{
    let check = links.classList.toggle('active')
})