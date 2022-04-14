let sounds = ['dog', 'pig', 'lion']

sounds.forEach(sound => {
    let btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopsounds()
        document.getElementById(sound).play()
    })
    document.querySelector('.btns').appendChild(btn)
})
let stopsounds = () => {
    sounds.forEach(sound => {
        document.getElementById(sound).pause()
        document.getElementById(sound).currentTime = 0
    })
}

