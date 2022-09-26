// obtener hojas
// asignar evento
// mover el caracol a la position de la hoja
//obtener la posición de la hoja
//Modificar la position del caracol
//el caracol augmenta de tamaño cuando come una hoja


let leaves = document.getElementsByClassName('leaf') as HTMLCollection;
let snail = document.getElementById('snail') as HTMLImageElement;

// loop - bucle
for (let index = 0; index < leaves.length; index++) {
    leaves[index].addEventListener('click', (element) => {
        let el = element.target as HTMLImageElement;
        snail.style.left = el.offsetLeft + "px";
        snail.style.top = el.offsetTop + "px";

        // hoja desaparece
        el.hidden = true;

        // caracol cambia de tamaño
        snailGetFat();
    })
}

function snailGetFat() {
    let size = snail.width + 20;
    snail.style.width = size + "px";
}


