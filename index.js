const display = document.getElementById("display");

const buttons = Array.from(document.getElementsByClassName("button"));
console.log("buttons", buttons);

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    // console.log("clicked", e);
    // console.log(e.target, e.target.innerText);
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;

      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
