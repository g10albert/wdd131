document.getElementById("lastModified").innerHTML = `Last modification: ${document.lastModified}`;

const menuBtn = document.querySelector("#menuBtn")
const menuCloseBtn = document.querySelector("#menuCloseBtn")
const menu = document.querySelector("#menu")

menuBtn.addEventListener('click', () => {
  menu.classList.add("menu_open")
})

menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("menu_open")
})