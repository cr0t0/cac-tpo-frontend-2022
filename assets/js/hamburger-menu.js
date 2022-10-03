const menu = document.querySelector ('.hamburger-menu');
const close = document.querySelector ('.close-button');
const nav = document.querySelector ('.nav-links-container');

menu.addEventListener ('click', () => {
    nav.classList.add ('open-nav')
    console.log ('me abriste')
})


close.addEventListener ('click', () => {
    nav.classList.remove ('open-nav')
    console.log ('me cerraste')

})

