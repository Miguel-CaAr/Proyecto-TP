const renderResponse = document.createElement("h5");
renderResponse.className = "bot-message";
const container = document.querySelector(".container-response");
const input = document.querySelector(".input-chat");

export function Render(content) {
  renderResponse.innerText += content;
  container.appendChild(renderResponse);
  if (input.value !== null) {
    input.value = "";
  }
  container.scrollTop = container.scrollHeight;
}
