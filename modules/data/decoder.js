import { Parse } from "./parse.js";

const decoder = new TextDecoder("utf-8"); //Se hace instancia del constructor con la codificacion utf-8
/**
 * Decodifica el parametro de binario a texto cadena.
 * @param {bytes} value 
 */
export function Decoder(value) {
  const decodedChunk = decoder.decode(value); //decodificamos el chunk con el metodo del objeto decodificador
  Parse(decodedChunk);
}
