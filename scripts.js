let time = 5000;
let currentImageIndex = 0;
let images = document.querySelectorAll(".slider img");
let max = images.length;
let countSeconds = new Date().getSeconds();
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let date = document.querySelector(".date");
let count = document.querySelector(".count");
let sec = new Date().getSeconds();

for (let i = 0; i <= sec; i++) {
  count.innerHTML += ".";
}

let momentDate = moment();
let day = moment().locale("pt-BR").format("dddd");
let dateComplete = moment().locale("pt-BR").format("ll");

function nextImage() {
  images[currentImageIndex].classList.remove("selected");

  currentImageIndex++;
  if (currentImageIndex >= max) currentImageIndex = 0;

  images[currentImageIndex].classList.add("selected");
}

function start() {
  date.innerHTML = `${day}, ${dateComplete}`;
  setInterval(() => nextImage(), time);
  setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    hour.innerHTML = h < 10 ? `0${h}` : h;
    minute.innerHTML = m < 10 ? `0${m}` : m;
    count.innerHTML += ".";
    countSeconds++;
    if (countSeconds === 59) {
      countSeconds = 0;
      count.innerHTML = ".";
    }
  }, 1000);
}

window.addEventListener("load", () => start());
