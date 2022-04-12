let percent = document.querySelector('.percent')
let bodyfilter = document.querySelector('.bodyfilter')
let count = 0;
let runsession = setInterval(windostart, 100 )
let test = 0;

function windostart() {
    //  document.readyState == "complete"
    if(count == 100 || document.readyState == "complete" ){
        cleanUp()
    }else{
        count++ 
        percent.textContent = `${count}%`
        percent.style.opacity = scale(count,1,100,1,0)
        bodyfilter.style.backdropFilter = `blur(${scale(count,1,100,70,0)}px)`
    }
    
}

function cleanUp(){
    setTimeout(() => {
        clearInterval(runsession) 
        percent.textContent = `100%`
        percent.style.opacity = '0'
        bodyfilter.style.backdropFilter = `blur(0px)`
    }, 1000);
    
}
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

