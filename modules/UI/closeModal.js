/**
 * Cierra el modal
 */
const btnClose = document.querySelector(".btn-close");
const backgroundModal = document.querySelector(".background");
const containerModal = document.querySelector(".container-modal");
<<<<<<< HEAD
const pagina = document.querySelector(".search");
=======
>>>>>>> 2df492b194ddd298072d2ebc0f4c73348a85e775

export function closeModal() {
  btnClose.addEventListener("click", Close);
  //Si presiona el boton ↑, si presiona el fondo ↓
  backgroundModal.addEventListener("click", Close);

  function Close() {
    containerModal.style.display = "none";
<<<<<<< HEAD
    pagina.style.filter = "blur(5px)";
=======
>>>>>>> 2df492b194ddd298072d2ebc0f4c73348a85e775
  }
}
