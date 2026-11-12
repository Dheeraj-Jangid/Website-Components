const menu = document.querySelector('.menu-btn')
const shape = document.querySelector(".shape")
const sidebar = document.querySelector(".sidebar")


function checkSize() {
    if (window.innerWidth > 700) {
        menu.style.display = "none"
        shape.style.display = "none"
        sidebar.style.display = "none"
    }
    else if(shape.style.display = "none" ){
        menu.style.display = "block"
        sidebar.style.display = "none"

    }
}

checkSize();                                // run once on load
window.addEventListener('resize', checkSize);

menu.addEventListener("click", ()=>{
    menu.style.display = "none"
    shape.style.display = "block"
    sidebar.style.display = "block"
    
})
shape.addEventListener("click", ()=>{
    menu.style.display = "block"
    shape.style.display = "none"
    sidebar.style.display = "none"
    
})