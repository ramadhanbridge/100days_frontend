const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const decrease = document.querySelector('#decrease')
const increase = document.querySelector('#increase')
const clear = document.querySelector('#clear')

let color = ''
let size = +document.querySelector('#size').textContent
let x
let y
let isPressed = false

clear.addEventListener('click',()=>{
    ctx.clearRect(0,0,800,800)
})
decrease.addEventListener('click',()=>{
    size--
    document.querySelector('#size').textContent = size
})
increase.addEventListener('click',()=>{
    size++
    document.querySelector('#size').textContent = size
})

// ctx.fillStyle = 'green'
// ctx.fillRect(10,10, 150, 100)

canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})
canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
     color = document.querySelector('#color').value
     size = +document.querySelector('#size').textContent
    if (isPressed) {
        x2 = e.offsetX
        y2 = e.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill()
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}
