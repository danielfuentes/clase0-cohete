let titulo = document.getElementById('titulo');
let nombre = prompt('Indique su nombre');
if(nombre === ''){
    titulo.innerHTML = `Bienvenid@ Invitado`;
    titulo.classList.add('titulo');
}else{
    titulo.innerHTML = `Bienvenid@ ${nombre}`;
    titulo.classList.add('titulo');
}
