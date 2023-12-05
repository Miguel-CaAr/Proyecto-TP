import { Chat } from "./chat.js";
import { Close } from "./close.js";
import { Swipe } from "./swipe.js";
import { designChat } from "./designChat.js";

export function SuggestAssistant(numAssistant) {
  const assistant = {
    1: "Psicologo",
    2: "Abogado",
    3: "Medico",
  };
  const containerModal = document.querySelector(".container-modal");
  containerModal.style.display = "flex";
  const search = document.querySelector(".search");
  search.style.filter = "blur(5px)";
  const nameAssistant = document.querySelector(".name-assistant");
  nameAssistant.innerText = assistant[numAssistant];
  const btnConsult = document.querySelector(".btn-consult");

  //Cambia el buscador por el chat
  btnConsult.addEventListener("click", () => {
    Swipe(false)
    Chat(assistant[numAssistant]);
    designChat(assistant[numAssistant])
  });

  Close();
}
