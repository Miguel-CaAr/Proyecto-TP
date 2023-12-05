const body = document.querySelector("body");
const p = document.createElement("p");
export function Render(content) {
  p.classList = "p";
  p.innerText += content;
  body.appendChild(p);
}
