import { Swipe } from "./swipe.js";

const CloseChat = document.querySelector(".btn-close-chat");

export function Chat() {
  CloseChat.addEventListener("click", () => Swipe(true));
}
