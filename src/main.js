import "./css/index.css";
import anime from "animejs/lib/anime.es.js";

const header = document.querySelector("#header");
const nggakMau = document.querySelector("#nggak");
const mau = document.querySelector("#mau");
const main = document.querySelector("#main-section");

let buttonField = document.querySelector("#button-field");
let failure = 0;

nggakMau.addEventListener("click", function () {
  const width = buttonField.offsetWidth;
  const height = buttonField.offsetHeight;

  let randomX = Math.floor(Math.random() * (width * 0.5)) + 1;
  let randomY = Math.floor(Math.random() * (height * 0.5)) + 1;

  playAudio("nggak");

  anime({
    targets: nggakMau,
    translateX: randomX,
    translateY: randomY,
    easing: "easeOutElastic(1, .3",
    duration: 1000,
  });
  failure += 1;

  if (failure == 4) {
    nggakMau.textContent = "jangan dimainin atu";
  } else if (failure == 13) {
    nggakMau.textContent = "Dih jahat banget";
  } else if (failure == 17) {
    nggakMau.textContent = "hiks hiks";
  } else if (failure > 17) {
    document.location.href =
      "https://www.w3schools.com/jsref/prop_loc_href.asp";
  }

  console.log(failure);
});

mau.addEventListener("click", function () {
  header.textContent = "Makasiiiiih";
  main.innerHTML = printMainSection();
  buttonField.classList.add("hidden");
});

function printMainSection() {
  playAudio("saveNsound");
  return `<div class="w-full flex justify-center">
          <div class="p-8 max-w-xl">
            <img
              id="image"
              src="../public/heart.gif"
              alt=""
              class="mb-8"
            />
            <p class="py-8 text-center text-base font-medium text-slate-600">
              Emmm, makasiih. Aku jujur nggak tau mau bilang apa lagi, tapi makasih udah terima aku, ehe. 
              Dah ah, sakit pinggang anjir.
            </p>
          </div>
        </div>`;
}

function playAudio(song) {
  let audio = new Audio(`../public/music/${song}.mp3`);
  audio.play();
}
