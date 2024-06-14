let scrollContainer = document.querySelector('.gallery')

let angle_droite = document.getElementById('angle-droite')

let angle_gauche = document.getElementById('angle-gauche')

scrollContainer.addEventListener('wheel', (event)=>{
     event.preventDefault()

     scrollContainer.scrollLeft += event.delTaY
})

angle_droite.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft += 900
})

angle_gauche.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft -= 900
})