const title = document.querySelector(".title");

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Albuquerque New Mexico Temple",
    location: "Albuquerque, New Mexico",
    dedicated: "2000, March, 5",
    area: 34245,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-56335-main.jpg",
  },
  {
    templeName: "Asunción Paraguay Temple",
    location: "Asunción, Paraguay",
    dedicated: "2002, May, 19",
    area: 11906,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6969-main.jpg",
  },
  {
    templeName: "Atlanta Georgia Temple",
    location: "Sandy Springs, Georgia",
    dedicated: "1983, June, 4",
    area: 34500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg",
  },
];

document.getElementById(
  "lastModified"
).innerHTML = `Last modification: ${document.lastModified}`;

const menuBtn = document.querySelector("#menuBtn");
const menuCloseBtn = document.querySelector("#menuCloseBtn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
  menu.classList.add("menu_open");
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("menu_open");
});

const gallery = document.querySelector(".gallery");

function createTempleCard(filteredTemples) {
  gallery.innerHTML = "";
  filteredTemples.forEach((temple) => {
    let templeInfo = `<div class="card">
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Size: ${temple.area} sq ft</p>
        <figure class="gallery_item">
          <img loading="lazy" class="gallery_photo" src="${temple.imageUrl}" alt="${temple.templeName} temple">
        </figure>
      </div>`;

    gallery.innerHTML += templeInfo;
  });
}

createTempleCard(temples);

let home = document.querySelector("#home").addEventListener("click", () => {
  createTempleCard(temples);
  title.innerHTML = "Home";
});

let old = document.querySelector("#old").addEventListener("click", () => {
  createTempleCard(
    temples.filter((temple) => temple.dedicated.substring(0, 4) < 1900)
  );
  title.innerHTML = "Old Temples";
});

let newTemples = document
  .querySelector("#new")
  .addEventListener("click", () => {
    createTempleCard(
      temples.filter((temple) => temple.dedicated.substring(0, 4) > 2000)
    );
    title.innerHTML = "New Temples";
  });

let large = document.querySelector("#large").addEventListener("click", () => {
  createTempleCard(temples.filter((temple) => temple.area > 90000));
  title.innerHTML = "Large Temples";
});

let small = document.querySelector("#small").addEventListener("click", () => {
  createTempleCard(temples.filter((temple) => temple.area < 10000));
  title.innerHTML = "Small Temples";
});
