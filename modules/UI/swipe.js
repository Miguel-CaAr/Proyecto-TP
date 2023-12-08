import { Close } from "./close.js";

const search = document.querySelector(".search");
const chat = document.querySelector(".chat");
const container = document.querySelector(".container-response");

export function Swipe(isChat) {
  if (isChat) {
    search.classList.remove("search-swipe");
    chat.classList.add("chat-swipe");
    search.style.filter = "none";
    container.innerHTML = "";
  } else {
    search.classList.add("search-swipe");
    chat.classList.remove("chat-swipe");
    container.innerHTML = "";
  }
}
