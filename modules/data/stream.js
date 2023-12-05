import { Decoder } from "./decoder.js";

/**
 * Realiza el flujo de datos leyendo los chunks.
 * @param {Object} responseBody Objeto ReadableStreamDefaultReader
 */
export async function Stream(responseBody) {
  const reader = responseBody.getReader(); //Se usa el metodo para obtener un lector que reciba los datos

  while (true) {
    const chunk = await reader.read(); //read() realiza la lectura del dato (chunk, trozo de dato) y devuelve una promesa
    const { done, value } = chunk; //Objeto para manejar la promesa, value(alamcena los datos leidos) y done(true si finalizo y false si no)
    if (done) {
      //Si "done" es true o sea si finalizo de leer datos
      break; // Entonces deten el bucle while
    }
    Decoder(value); //Mandamos los datos leidos a decodificar ya que estan en binario
  }
}
