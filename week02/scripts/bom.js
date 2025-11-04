const input = document.querySelector("#favchap");
const button = document.querySelector("#button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    let delButton = document.createElement("button");

    li.textContent = input.value;
    delButton.textContent = "❌";

    list.append(li);
    li.append(delButton);

    delButton.addEventListener("click", () => {
      list.removeChild(li);
      input.focus();
    });

    input.value = "";
  }
  input.focus();
});
