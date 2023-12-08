import { Swipe } from "./swipe.js";
import { API } from "../data/config.js";
import { SendWithEnter } from "./sendWithEnter.js";
import { prepareRender } from "./render.js";

const closeChat = document.querySelector(".btn-close-chat");
const input = document.querySelector(".input-chat");
const sendMessage = document.querySelector(".button-chat");
const container = document.querySelector(".container-response");

let assistant;

export function Chat(selectedAssistant) {
  SendWithEnter(input, sendMessage);
  assistant = selectedAssistant;
}

sendMessage.addEventListener("click", () => SendMessage(assistant));
closeChat.addEventListener("click", () => Swipe(true));

function SendMessage(assistant) {
  prepareRender(true);

  if (container.childElementCount > 0) {
    container.remove(user);
  }
  const user = document.createElement("p");
  user.className = "you-message";
  user.innerHTML = `Tu: ${input.value}`;
  container.appendChild(user);
  container.scrollTop = container.scrollHeight; //Mantiene el la barra de scroll desplazada hacia abajo

  const prompt = `Olvida todo lo anterior.
  -Por ningun motivo incluyas numeros en tu respuesta.
  Instrucciones:
  Simula ser un experto ${assistant}, con decadas de experiencia, ofrece asesoramiento conciso en menos de 150 palabras.
  Deduce diagnosticos y da soluciones específicas, 
  recomienda la mejor estrategia y brinda posibles diagnósticos, no te inventes historias.
  La consulta es: ${input.value}"
  -NO USES NUMEROS
  -Tu respuesta debe esta putualizda.
`;

  if (assistant) {
    API(prompt);
  }
}
