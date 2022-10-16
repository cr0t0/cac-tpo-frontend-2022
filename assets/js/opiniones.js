let url = "./assets/data.json"
let opiniones1 = document.getElementById ('opiniones')

fetch(url)
.then (res => res.json())
.then (opiniones => localStorage.setItem('opiniones', JSON.stringify(opiniones.opiniones)))

let opiniones = JSON.parse( localStorage.getItem('opiniones'));

function render (eRoot, data) {
    let div = document.createElement('div');
        div.setAttribute('class', 'opinioninfo');
    let h3 = document.createElement('h3');
        h3.innerHTML = data.nombre;
        h3.setAttribute('class', 'nombre')
    let star = +data.calificacion;
    let div2 = document.createElement('div');
    for (let index = 0; index < star; index++) {
        let div3 = document.createElement('div')
            div3.setAttribute('class', 'starimg')
        let img = document.createElement('img');
            img.setAttribute('src', '/assets/icons/star.svg');
            img.setAttribute('class', 'staricon')
        div3.appendChild(img)
        div2.appendChild(div3)
    }
        div2.setAttribute('class', 'starcontainer')
    let par = document.createElement('p');
        par.innerHTML = data.opinion;
        par.setAttribute('class', 'opinion');
    div.appendChild(h3);
    div.appendChild(div2);
    div.appendChild(par);
    eRoot.appendChild(div);
}

opiniones.forEach(e => render (opiniones1, e));