let circles = document.querySelectorAll('.circle')
let prev = document.querySelector('.prebtn')
let next = document.querySelector('.nxtbtn')
let activeprogress = document.querySelector('.activeprogress')
let activesize = 1;

prev.addEventListener('click', () => {
    activesize--
    if (activesize > 1) {
        next.removeAttribute("disabled", "")
    } else {
        prev.setAttribute("disabled", "")
    }
    update()
    let size = circles.length - activesize
    progress(size)
})

next.addEventListener('click', () => {
    activesize++
    if (activesize < circles.length) {
        prev.removeAttribute("disabled", "")
    } else {
        next.setAttribute("disabled", "")
    }
    update()
    let size = circles.length - activesize
    progress(size)
})

function update() {
    circles.forEach((circle, index) => {
        if (index < activesize) {
            console.log("hello")
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
}

function progress(size) {
    activeprogress.style.width = `${100 / size}` + '100'
}
