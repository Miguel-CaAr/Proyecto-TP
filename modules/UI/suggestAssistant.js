import { closeModal } from "./closeModal.js";
export function SuggestAssistant(numAssistant) {
  const assistant = {
    1: "Psicologo",
    2: "Abogado",
    3: "Medico",
  };
  const containerModal = document.querySelector(".container-modal");
  containerModal.style.display = "flex";
<<<<<<< HEAD
  const pagina = document.querySelector('.search');
  pagina.style.filter = "blur(5px)";
=======
>>>>>>> 2df492b194ddd298072d2ebc0f4c73348a85e775
  const nameAssistant = document.querySelector(".name-assistant");
  nameAssistant.innerText = assistant[numAssistant];
  closeModal();
}

// prompt = `Contexto:
// Desempeña el papel de un ${assistant[numAssistant]} experto con conocimientos en todas las especialidades.
// Ofrece orientación y asesoramiento de manera concisa y breve, brindando soluciones específicas a la situación presentada.
// Deduce y recomienda la mejor manera de abordar el problema.
// No seas ambiguo.
// Ofrece posibles diagnosticos.
// La situación es: `;
