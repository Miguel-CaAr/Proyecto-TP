/**
 * Cierra el modal
 */
const btnClose = document.querySelector(".btn-close");
const backgroundModal = document.querySelector(".background");
const containerModal = document.querySelector(".container-modal");
const search = document.querySelector(".search");

export function Close() {
  btnClose.addEventListener("click", CloseModal);
  //Si presiona el boton ↑, si presiona el fondo ↓
  backgroundModal.addEventListener("click", CloseModal);

}

export function CloseModal() {
  containerModal.style.display = "none";
  search.style.filter = "none";
}