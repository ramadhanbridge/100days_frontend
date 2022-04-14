let jokeContainer = document.querySelector('#joke');
let getJoke =  document.querySelector('.getJoke')

function fetchJoke(){
    fetch('https://icanhazdadjoke.com/',{headers:{
        'Accept':'application/json'
    }})
    .then(res=>res.json())
    .then(data=>{
        jokeContainer.textContent = data.joke
    })
}
fetchJoke()
getJoke.addEventListener('click',()=>fetchJoke())
