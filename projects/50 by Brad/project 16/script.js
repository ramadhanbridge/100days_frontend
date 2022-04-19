const remained = document.querySelector('.remained')
const percentage = document.querySelector('.percentage')
const liters = document.querySelector('.liters')
const cups = document.querySelectorAll('.cup-small')

cups.forEach((cup,index)=>{
    cup.addEventListener('click',()=>{
       higlight(index)
    })
})
function higlight(index){
    if(cups[index].classList.contains('full') && !cups[index].nextElementSibling.classList.contains('full')){
        index--
    }
    cups.forEach((cup,index2)=>{
        if(index2<=index){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
    updateinfo()
}
updateinfo()
function updateinfo(){
    const filledcups = document.querySelectorAll('.cup-small.full').length
    let totalcups = cups.length
    if (filledcups == 0){
        percentage.style.visibility = "hidden"
        percentage.style.height = "0"
    }else{
        percentage.style.visibility = "visible"
        percentage.style.height = `${(filledcups/totalcups)*330}px`
        percentage.textContent =  `${(filledcups/totalcups)*100}%`
    }
    if(filledcups == totalcups){
        remained.style.visibility = 'hidden'
        remained.style.height = '0'
    }else{
        remained.style.visibility = 'visible'
        liters.textContent = `${2-(250 * filledcups)/1000}L`
    }
}