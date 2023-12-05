/**
 * Cierra el modal
 */
const btnClose = document.querySelector(".btn-close");
const backgroundModal = document.querySelector(".background");
const containerModal = document.querySelector(".container-modal");
const search = document.querySelector(".search");
const btnConsult = document.querySelector(".btn-consult");

export function Close() {
  btnClose.addEventListener("click", CloseModal);
  //Si presiona el boton ↑, si presiona el fondo ↓
  backgroundModal.addEventListener("click", CloseModal);
  //Si se presiona asesorar
  btnConsult.addEventListener("click", CloseModal);

}

function CloseModal() {
  containerModal.style.display = "none";
  search.style.filter = "none";
}