export function SendWithEnter(input, btn) {
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        console.log("Enter");
        btn.click();
      }
    });
  }
  