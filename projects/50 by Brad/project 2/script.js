let circles = document.querySelectorAll('.circle')
let prev = document.querySelector('.prebtn')
let next = document.querySelector('.nxtbtn')
let progressbar = document.querySelector('.progress')
let interval = 0;
let activesize = 1;

next.addEventListener('click', () => {
    activesize++
    if (activesize < circles.length) {
        prev.removeAttribute("disabled", "")
    } else {
        next.setAttribute("disabled", "")
    }
    update()
    interval = interval + 100 / (circles.length - 1);
    progress(interval)

})

prev.addEventListener('click', () => {
    activesize--
    if (activesize > 1) {
        next.removeAttribute("disabled", "")
    } else {
        prev.setAttribute("disabled", "")
    }
    update()
    interval = interval - 100 / (circles.length - 1);
    if (activesize == 1) {
        interval = 0
        progress(interval)
    } else {
        progress(interval)
    }

})



function update() {
    circles.forEach((circle, index) => {
        if (index < activesize) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
}

function progress(interval) {
    progressbar.style.width = `${interval}` + '%'
}
progress(interval)
