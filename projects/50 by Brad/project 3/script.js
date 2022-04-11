let hide = document.querySelector('.hide')
let view = document.querySelector('.show')
let menu = document.querySelector('.menu')

view.addEventListener('click',()=> menu.classList.add('menurotate'))
hide.addEventListener('click',()=> menu.classList.remove('menurotate'))