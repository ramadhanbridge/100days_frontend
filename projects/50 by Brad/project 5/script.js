let percent = document.querySelector('.percent')
let bodyfilter = document.querySelector('.bodyfilter')
let count = 0;
let runsession = setInterval(windostart, 100 )



function windostart() {
   
    count == 100 ? clearInterval(runsession) : count++ 
    percent.textContent = `${count}%`
    percent.style.opacity = scale(count,1,100,1,0)
    bodyfilter.style.backdropFilter = `blur(${scale(count,1,100,70,0)}px)`
}


function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}