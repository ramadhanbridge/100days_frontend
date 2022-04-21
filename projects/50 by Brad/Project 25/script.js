const nav = document.querySelector('nav')
window.addEventListener('scroll',()=>{
    console.log(window.scrollY,nav.offsetHeight)
    window.scrollY > nav.offsetHeight + 100 ?
    nav.classList.add('active') : nav.classList.remove('active')
})