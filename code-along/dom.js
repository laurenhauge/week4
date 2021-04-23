let pageTitleElement = document.querySelector(`.page-title`)
// console.log(pageTitleElement)
pageTitleElement.innerHTML = `Movies to Watch!`

let movieElements = document.querySelectorAll(`.movies-to-watch li`)
console.log(movieElements)

for(let i = 0; i < movieElements.length; i++){
let movieElement = movieElements[i]
// console.log(movieElement)
}
let moviesListElement = document.querySelector(`.movies-to-watch`)

moviesListElement.insertAdjacentHTML(`beforeend`,`
<li>The Martian<li>`)