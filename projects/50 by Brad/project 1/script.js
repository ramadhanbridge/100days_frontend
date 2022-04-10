let imgs = document.querySelectorAll('img');
imgs.forEach(img => {
    img.addEventListener('mouseover', () => {
        removeActive()
        img.classList.contains('active') ? img.classList.remove('active') : img.classList.add('active') 
    })
})

function removeActive() {
    imgs.forEach((img) => {
        img.classList.remove('active')
    })
}

