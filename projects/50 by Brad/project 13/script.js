let typing = document.querySelector('.tagsInsertArea')
let tagsHolder = document.querySelector('.tagsHolder')

typing.addEventListener('keyup', (e) => {

    if (e.key === 'Enter') {
        selectrandom()
    }
    createtags(e.target.value)
})

function createtags(input) {

    let tags = input.trim().split('.').filter(tag => {
        return tag.trim() !== ''
    }).map(tag => tag.trim())
    tagsHolder.innerHTML = ''

    tags.forEach(tag => {
        const tagel = document.createElement('span')
        tagel.classList.add('tag')
        tagel.innerText = tag
        tagsHolder.appendChild(tagel)

    });

}


function selectrandom() {
    let time = 30
    let tags = document.querySelectorAll('.tag')
    let tagloop = setInterval(() => {
        const randomtag = pickrandom()
        higlighttag(randomtag)
        setTimeout(() => {
            removelight(randomtag)
        }, 100);
    }, 100)

    setTimeout(() => {
        
        clearInterval(tagloop)
        setTimeout(() => {
            const randomtag = pickrandom()
            higlighttag(randomtag)
        }, 100);
    }, time * 100)


}

function pickrandom() {
    let tags = document.querySelectorAll('.tag')
    let random = Math.floor(Math.random() * tags.length)
    console.log(random)
    return tags[random]
}
function higlighttag(tag) {
    tag.classList.add('light')
}

function removelight(tag) {
    tag.classList.remove('light')
}