
const grande    = document.querySelector('.ngrande')
const punto     = document.querySelectorAll('.npunto')
let bool = false
let index = 1

punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{
        let posicion  = i
        let operacion = posicion * -20
        grande.style.transform = `translateX(${ operacion }%)`
        punto.forEach( ( cadaPunto , x )=>{
            punto[x].classList.remove('activo')
        })
        punto[i].classList.add('activo')
        bool = true
        index = i
        setTimeout (bool=false, 5000)
    })
})

setInterval(function () {
    let operacion = index * -20;
    if (bool == false) {
        grande.style.transform = `translateX(${ operacion }%)`;
        punto.forEach( ( cadaPunto , x )=>{
            punto[x].classList.remove('activo')
        });
        punto[index].classList.add('activo');
        (index==4)?index=0:index++;
    }
}, 3000);