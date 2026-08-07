// toggle logic

let menu_icon = document.getElementById('menu-icon');
let icon_img = document.getElementById('icon-image')
let links = document.getElementById('links');

console.log(icon_img.src)
menu_icon.addEventListener("click",()=>{
    
    let check = links.classList.toggle('active')
    
    if(check){
        icon_img.src = 'close.png'
    }else{
        icon_img.src = 'menus.png'
    }

})