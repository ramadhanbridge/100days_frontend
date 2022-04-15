let typing = document.querySelector('.tagsInsertArea')
let tagsHolder = document.querySelector('.tagsHolder')

typing.addEventListener('keyup', (e) => {
    
    if(e.key === 'Enter'){
        console.log('234')
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


function selectrandom(){
    let time = 30
    let tagloop = setInterval(higlighttag,1000)
}

function higlighttag(){
    let tags = document.querySelectorAll('.tag')
    tags.forEach(tag => {
       removelight()
    });
    let tag = tags[Math.floor(Math.random*(tags.length))]
    console.log(tag)

}

function removelight() {
    document.querySelectorAll('.tag').forEach(tag => {
        tag.classList.remove('light')
     });
    
}