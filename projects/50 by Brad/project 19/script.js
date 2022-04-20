const hourEl = document.querySelector('.hour')
const minEl = document.querySelector('.min')
const secEl = document.querySelector('.sec')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = ["Sun", "Mon", "Tue", "Wen", "Thur", "Fri", "Sat"]
const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Janu", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

toggleEl.addEventListener('click', (e) => {
    console.log('hello')
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})




function setTime() {
    const time = new Date()
    const Month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursforclock = hours % 12
    const min = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursforclock, 0, 11, 0, 360)}deg)`
    minEl.style.transform = `translate(-50%,-100%) rotate(${scale(min, 0, 59, 0, 360)}deg)`
    secEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    function scale(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
    timeEl.innerHTML = `${hoursforclock}:${min < 10 ? `0${min}` : `${min}`} ${ampm}`

    dateEl.innerHTML = `${days[day]},${Months[Month]} <span class="circle">${date}</span>`
}
setInterval(setTime, 1000);
setTime() 