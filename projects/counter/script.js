let screen = document.querySelector(".screen");
let add = document.querySelector(".add");
let remove = document.querySelector(".remove");
let initial = 0;
screen.innerText = initial;
add.addEventListener('click', () => {
    initial = initial + 1;
    screen.innerText = initial;
})
remove.addEventListener('click', () => {
    initial = initial - 1;
    initial > 0 ? screen.innerText = initial : screen.innerText = 0;
    initial = 0;

})