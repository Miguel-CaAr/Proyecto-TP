const body = document.querySelector("body");
const p = document.createElement("p");

const renderResponse = document.createElement("h5");
renderResponse.className = "bot-message";
const input = document.querySelector(".input");
const container = document.querySelector(".container-response");
const btnSend = document.querySelector(".button");

export function Render(content) {
  renderResponse.innerText += content;
  container.appendChild(renderResponse);
  container.scrollTop = container.scrollHeight;
}
