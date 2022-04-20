const button = document.querySelector('.ripple')
button.addEventListener('click', (e) => {
    const x = e.clientX
    const y = e.clientY
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
    const xinside = x - buttonLeft
    const yinside = y - buttonTop
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yinside + 'px'
    circle.style.left = xinside + 'px'
    button.appendChild(circle)
    setTimeout(()=>circle.remove(),500)
})
