import { Stream } from "./stream.js";

const API_KEY = "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";
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
