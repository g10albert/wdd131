const input = document.querySelector("#favchap");
const button = document.querySelector("#button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

function displayList(item) {
  const li = document.createElement("li");
  let delButton = document.createElement("button");

  li.textContent = item;
  delButton.textContent = "❌";

  list.append(li);
  li.append(delButton);

  delButton.addEventListener("click", () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

function setChapterList() {
  window.localStorage.setItem("fav-books", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("fav-books"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  console.log(chapter)
  chaptersArray = chaptersArray.filter((item) => item != chapter);
  setChapterList();
}

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    displayList(input.value.trim());

    chaptersArray.push(input.value);

    setChapterList();

    input.value = "";

    input.focus();
  }
});
