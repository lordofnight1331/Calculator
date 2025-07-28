// Get references
let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (value === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    } else if (value === "AC") {
      string = "";
      input.value = "0";
    } else if (value === "DEL") {
      string = string.slice(0, -1);
      input.value = string || "0";
    } else if (value === "+/−" || value === "±" || value === "∓") {
      if (string) {
        if (string.startsWith("-")) {
          string = string.slice(1);
        } else {
          string = "-" + string;
        }
        input.value = string;
      }
    } else if (value === "_") {
      string += ".";
      input.value = string;
    } else {
      string += value;
      input.value = string;
    }
  });
});
