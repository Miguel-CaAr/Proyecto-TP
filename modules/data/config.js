import { Stream } from "./stream.js";

<<<<<<< HEAD
const API_KEY = "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";
=======
const API_KEY = "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";
>>>>>>> 2df492b194ddd298072d2ebc0f4c73348a85e775
const URL = "https://api.openai.com/v1/chat/completions";

/**
 * Funcion para realizar la solicitud a la API de OPENAI
 * @param {String} message Cadena de texto que sera enviada al chatbot
 */
export async function API(message) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
      stream: true,
    }),
  });
  Stream(response.body); //Mandamos el cuerpo de la respuesta ser leida en un flujo de datos.
  //Aqui mandamos el status de la respuesta para verificar si da error;
}
