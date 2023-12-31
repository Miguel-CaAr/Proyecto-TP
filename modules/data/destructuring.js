import { SuggestAssistant } from "../UI/suggestAssistant.js";
import { RenderMessageAssistant } from "../UI/render.js";
/**
 * Desestructura el arreglo con objetos
 * @param {Array} parsedObjects
 */
export function Destructuring(parsedObjects) {
  //Se itera sobre cada objeto en el arreglo, en cada iteracion parsedObject toma el valor de cada objeto.
  for (const parsedObject of parsedObjects) {
    //Aqui se realiza la desestructuracion, los nombres de las variables deben coincidir con los nombres de las propiedades del objeto
    const { choices } = parsedObject;
    const { delta } = choices[0];
    const { content } = delta;
    if (content) {
      switch (content) {
        case "1":
        case "2":
        case "3":
          SuggestAssistant(content);
          break;
        default:
          RenderMessageAssistant(content);
          break;
      }
    }
  }
}
