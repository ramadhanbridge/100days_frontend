let boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', () => {
    loopThroughBoxes()
})

function loopThroughBoxes() {
    let height = window.innerHeight - 20;
    boxes.forEach(box => {
        const position = box.getBoundingClientRect().top;
        if (position < height) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })

}
loopThroughBoxes()