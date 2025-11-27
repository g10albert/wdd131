document.getElementById("lastModified").innerHTML = `Last modification: ${document.lastModified}`;

const form = document.querySelector("#form")
const selectElement = document.querySelector("#product-selection");

let reviewsCompleted = JSON.parse(localStorage.getItem("reviews-completed")) || 0;

selectElement.innerHTML = `<option value="Select a Product" disabled selected>Select a Product</option>`

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

products.forEach(product => {
  product = `<option id="" name="${product.name}" value="${product.id}">${product.name}</option>`

  selectElement.innerHTML += product
});

form.addEventListener("submit", () => {
  window.localStorage.setItem("reviews-completed", reviewsCompleted + 1)
})