function mostrarmodal() {
        modal.style.left= '50%'
        mascara.style.visibility= 'visible'
}

const modal= document.querySelector(".modal")
const mascara= document.querySelector(".mascara-modal")

function escondermodal() {
    modal.style.left= '-30%'
    mascara.style.visibility= 'hidden'

}