import { Swipe } from "./swipe.js";
import { API } from "../data/config.js";
import { SendWithEnter } from "./sendWithEnter.js";

const closeChat = document.querySelector(".btn-close-chat");
const input = document.querySelector(".input-chat");
const sendMessage = document.querySelector(".button-chat");

export function Chat(Assistant) {
  sendMessage.addEventListener("click", () => SendMessage(Assistant));
  SendWithEnter(input, sendMessage)
  closeChat.addEventListener("click", () => Swipe(true));
}

const container = document.querySelector(".container-response");

function SendMessage(Assistant) {
  const user = document.createElement("p");
  user.className = "you-message";
  user.innerHTML = `Tu: ${input.value}`;
  container.appendChild(user);
  input.value = '';
  container.scrollTop = container.scrollHeight; //Mantiene el la barra de scroll desplazada hacia abajo

  const prompt = `Contexto:
  Desempeña el papel de un ${Assistant} experto con conocimientos en todas las especialidades.
  Ofrece orientación y asesoramiento de manera concisa y breve de maximo 100 palabras, brindando soluciones específicas a la situación presentada.
  Recomienda la mejor manera de abordar el problema y ofrece posibles diagnosticos.
  Al final de tu asesoramiento, añade, "Un placer asesorarte ♡."
  La consulta es: ${input.value}`;

  if (Assistant) {
    API(prompt);
  }
}
