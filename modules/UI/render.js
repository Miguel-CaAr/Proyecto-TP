const renderResponse = document.createElement("h5");
renderResponse.className = "bot-message";
const container = document.querySelector(".container-response");
const input = document.querySelector(".input-chat");

export function prepareRender() {
  container.innerHTML = "";
  renderResponse.innerHTML = "";
}

export function Render(content) {
  renderResponse.innerText += content;
  container.appendChild(renderResponse);
  container.scrollTop = container.scrollHeight;

  input.value = "";
}
