import { Chat } from "./chat.js";
import { Close, CloseModal } from "./close.js";
import { Swipe } from "./swipe.js";
import { designChat } from "./designChat.js";

let assistantSelected;
const assistant = {
  1: "Psicologo",
  2: "Abogado",
  3: "Medico",
};

const containerModal = document.querySelector(".container-modal");
const search = document.querySelector(".search");
const nameAssistant = document.querySelector(".name-assistant");
const btnConsult = document.querySelector(".btn-consult");

export function SuggestAssistant(numAssistant) {
  containerModal.style.display = "flex";
  search.style.filter = "blur(5px)";
  nameAssistant.innerText = assistant[numAssistant];
  assistantSelected = assistant[numAssistant];
  Close();
}

//Cambia el buscador por el chat
btnConsult.addEventListener("click", () => {
  Swipe(false);
  Chat(assistantSelected);
  designChat(assistantSelected);
  CloseModal();
});
