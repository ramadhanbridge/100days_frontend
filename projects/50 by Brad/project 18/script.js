const slides = document.querySelectorAll('.slide')
const right = document.querySelector('.arrow-right')
const left = document.querySelector('.arrow-left')
const body = document.body
let activeslide = 0
setBody()
function setBody(){
 body.style.backgroundImage = slides[activeslide].style.backgroundImage
}
right.addEventListener('click',()=>{
    activeslide++
    if(activeslide > slides.length - 1){
     activeslide = 0
    }
    setBody()
    setActivesSlide()
})

left.addEventListener('click',()=>{
    activeslide--
    if(activeslide < 0 ){
     activeslide = slides.length - 1
    }
    setBody()
    setActivesSlide()
})


function setActivesSlide(){
    slides.forEach(slide=>{
      slide.classList.remove('active')
    })
    slides[activeslide].classList.add('active')
}