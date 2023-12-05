/**
 * Cierra el modal
 */
const btnClose = document.querySelector(".btn-close");
const backgroundModal = document.querySelector(".background");
const containerModal = document.querySelector(".container-modal");
const pagina = document.querySelector(".search");

export function closeModal() {
  btnClose.addEventListener("click", Close);
  //Si presiona el boton ↑, si presiona el fondo ↓
  backgroundModal.addEventListener("click", Close);

  function Close() {
    containerModal.style.display = "none";
    pagina.style.filter = "blur(5px)";
  }
}
