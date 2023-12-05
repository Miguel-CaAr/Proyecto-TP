import { Close } from "./close.js";
import { Swipe } from "./swipe.js";
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
  btnConsult.addEventListener("click", () => Swipe(false));

  Close();
}

// prompt = `Contexto:
// Desempeña el papel de un ${assistant[numAssistant]} experto con conocimientos en todas las especialidades.
// Ofrece orientación y asesoramiento de manera concisa y breve, brindando soluciones específicas a la situación presentada.
// Deduce y recomienda la mejor manera de abordar el problema.
// No seas ambiguo.
// Ofrece posibles diagnosticos.
// La situación es: `;
