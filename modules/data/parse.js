import { Destructuring } from "./destructuring.js";

/**
 * Analiza la cadena de caracteres, la divide, limpia y convierte cadenas JSON en objetos JavaScript.
 * @param {JSON} decodedChunk
 */
export function Parse(decodedChunk) {
  const arrayObjects = decodedChunk.split("\n"); //Al decodificar obtenemos objetos JSON separados por saltos de linea, por lo tanto los indivualizamos usando split que crea un array
  const parsedObjects = arrayObjects //Creamos un arreglo que contiene el arreglo creado por split pero lo parseamos
    .map((objectJSON) => objectJSON.replace(/^data: /, "").trim()) // Aqui transformamos cada obj JSON en el arreglo, reemplazando cada "data:"" al incio de cada obj JSON por ""(vacio) y trim elimina los espacios en blanco
    .filter((objectJSON) => objectJSON !== "" && objectJSON !== "[DONE]") // Aqui se excluyen los objectJSON vacios y los que contengan [DONE]
    .map((objectJSON) => JSON.parse(objectJSON)); //los objetos JSON restantes las convertimos en objetos JavaScript

  //Desestructuramos los objetos JSON
  Destructuring(parsedObjects);
}
