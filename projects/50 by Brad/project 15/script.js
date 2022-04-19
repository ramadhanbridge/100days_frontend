const follower = document.querySelector('.follower')
const view = document.querySelector('.view')
let followers = 12000
let views = 9800


window.addEventListener('load', () => {
    updatenumber(view, views)
    updatenumber(follower, followers)
})

function updatenumber(tag, counter) {
    for (let index = 0; index <= counter; index++) {
        setTimeout(() => {
            tag.textContent = index
        }, 100);
    }
}