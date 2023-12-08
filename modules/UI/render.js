const renderResponse = document.createElement("h5");
renderResponse.className = "bot-message";
const container = document.querySelector(".container-response");
const input = document.querySelector(".input-chat");

export function PrepareRender() {
  container.innerHTML = "";
  renderResponse.innerHTML = "";
}

export function RenderMessageAssistant(content) {
  renderResponse.innerText += content;
  container.appendChild(renderResponse);
  container.scrollTop = container.scrollHeight;

  input.value = "";
}

export function RenderMessageUser() {
  container.childElementCount > 0 ? container.remove(user) : null;

  const user = document.createElement("p");
  user.className = "you-message";
  user.innerHTML = `Tu: ${input.value}`;
  container.appendChild(user);
  container.scrollTop = container.scrollHeight; //Mantiene el la barra de scroll desplazada hacia abajo
}
