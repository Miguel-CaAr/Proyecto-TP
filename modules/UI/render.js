const renderResponse = document.createElement("h5");
renderResponse.className = "bot-message";
const container = document.querySelector(".container-response");

export function Render(content) {
  renderResponse.innerText += content;
  container.appendChild(renderResponse);
  container.scrollTop = container.scrollHeight;
}
