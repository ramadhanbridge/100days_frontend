let labels = document.querySelectorAll('label')
labels.forEach((label)=>{
    label.innerHTML = label.textContent
    .split('')
    .map((letter,index)=>{
        return `<span style="transition-delay:${index*50}ms">${letter}</span>`
    })
    .join('')
    
})
document.getElementById