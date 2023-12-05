import { Close } from "./close.js";
import { Chat } from "./chat.js"

const search = document.querySelector(".search");
const chat = document.querySelector(".chat");

export function Swipe(isChat) {
  if (isChat) {
    search.classList.remove("search-swipe");
    chat.classList.add("chat-swipe");
    search.style.filter = "none";
  } else {
    search.classList.add("search-swipe");
    chat.classList.remove("chat-swipe");
    Chat();
  }
  Close();
}
