import { Swipe } from "./swipe.js";
import { API } from "../data/config.js";
import { SendWithEnter } from "./sendWithEnter.js";
import { PrepareRender, RenderMessageUser } from "./render.js";

const closeChat = document.querySelector(".btn-close-chat");
const input = document.querySelector(".input-chat");
const sendMessage = document.querySelector(".button-chat");

let assistant;
let prompt;

export function Chat(selectedAssistant) {
  SendWithEnter(input, sendMessage);
  assistant = selectedAssistant;
}

sendMessage.addEventListener("click", () => SendMessage(assistant));
closeChat.addEventListener("click", () => Swipe(true));

function SendMessage(assistant) {
  if (!input.value) {
    alert("Campo vacio, favor de llenar");
  } else {
    prompt = `Olvida todo lo anterior.
    -Por ningun motivo incluyas numeros en tu respuesta.
    Instrucciones:
    Simula ser un experto ${assistant}, con decadas de experiencia, ofrece asesoramiento conciso en menos de 150 palabras.
    Deduce diagnosticos y da soluciones específicas, 
    recomienda la mejor estrategia y brinda posibles diagnósticos, no te inventes historias.
    La consulta es: ${input.value}"
    -NO USES NUMEROS
    -Tu respuesta debe esta putualizda.
    `;

    assistant ? API(prompt) : null;

    PrepareRender();
    RenderMessageUser();
  }
}
