import { API } from "../data/config.js";

const input = document.querySelector(".input-search");
const btnSearch = document.querySelector(".btn-search");
btnSearch.addEventListener("click", Search);

export function Search() {
  API(`
  Tema: ${input.value} 
  Quiero que respondas únicamente que numero corresponde al profesionsita que se encarga del tema:
    1:Psicólogo
    2:Abogado
    3:Medico
    Responde unicamente con el numero sin comillas ni nada extra`);
}
