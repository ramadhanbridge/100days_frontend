const APi_Fetch = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d79fc5e3844468b5a37f5902531fdb1f&page=1'
const Image_Path = 'https://image.tmdb.org/t/p/w1280'
const Search_URL = 'https://api.themoviedb.org/3/search/movie?api_key=d79fc5e3844468b5a37f5902531fdb1f&query='

let form = document.querySelector('form')
let search = document.querySelector('.search')
let main = document.querySelector('main')

getMovies(APi_Fetch)
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showmovies(data.results)
}
function showmovies(movies) {
    main.innerHTML = ''
    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie
        const moviecard = `<div class="movie">
      <div class="movieinfo">
          <img src="${Image_Path + poster_path}" alt="">
          <div class="rating">
              <h4>
                  ${title}
                  <span class="${helper(vote_average)}">${vote_average}</span>
              </h4>
          </div>
      </div>
      <div class="overview">
          <h4>overview</h4>
          <p>${overview}
          </p>
      </div>
  </div>`
  main.innerHTML += moviecard
    });

}
function helper(vote) {
    if (vote >= 8) {
        return "green"
    } else if (vote >= 5) {
        return "orange"
    } else {
        return "red"
    }
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const searchTerm = search.value
    if (searchTerm !== '') {
        getMovies(Search_URL + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
})