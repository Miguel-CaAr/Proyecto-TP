import { API } from "../data/config.js";
import { SendWithEnter } from "./sendWithEnter.js";

const input = document.querySelector(".input-search");
const btnSearch = document.querySelector(".btn-search");
btnSearch.addEventListener("click", Search);

SendWithEnter(input, btnSearch);

export function Search() {
  !input.value
    ? alert("Campo vacio, favor de llenar")
    : API(`
  Tema: ${input.value} 
  Quiero que respondas únicamente que numero corresponde al profesionsita que se encarga del tema:
  1:Psicólogo
  2:Abogado
  3:Medico
  Responde unicamente con el numero sin comillas, ni dos puntos, ni la palabra de la profesion, solo el numero correspondiente y nada mas`);
  input.value = "";
}
