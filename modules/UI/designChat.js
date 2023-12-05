export function designChat(Assistant) {
  const assistant = {
    Psicologo: "Psicologo",
    Abogado: "Abogado",
    Medico: "Medico",
  };

  color(assistant[Assistant]);
}

const header = document.querySelector(".container-header");
const btnChat = document.querySelector(".button-chat");
const titleChat = document.querySelector(".title-chat");

function color(Assistant) {
  // REMOVEMOS TODAS LAS CLAES
  header.classList.remove(...header.classList);
  btnChat.classList.remove(...btnChat.classList);
  // AÑADIMOS LAS QUE DAN FORMA
  header.classList.add("container-header");
  btnChat.classList.add("button-chat");
  // AÑADIMOS LAS QUE DAN COLOR
  header.classList.add(Assistant);
  btnChat.classList.add(Assistant);
  // AÑADIMOS TITULARES
  titleChat.innerHTML = Assistant;
}
