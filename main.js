import { audioSrc } from "./audio-source.js";

const inputs = document.querySelectorAll(".buttons input");
const musicSection = document.querySelector(".music-section");
let musicTitle = document.createElement("h1");
let musicTime = document.createElement("p");
let audio = document.getElementById("audio");
let audioIndex = 0;

const playMusic = () => {
  audio.src = audioSrc[audioIndex].src;
  audio.play();
  getElementsMusic();
};
const nextMusic = () => {
  audioIndex++;
  audio.src = audioSrc[audioIndex].src;
  audio.play();
  getElementsMusic();
};
const previousMusic = () => {
  audioIndex--;
  audio.src = audioSrc[audioIndex].src;
  audio.play();
  getElementsMusic();
};
const stopMusic = () => {
  audio.pause();
};
const getElementsMusic = () => {
  musicSection.innerHTML = "";
  musicTitle.innerHTML = audioSrc[audioIndex].title;
  musicSection.appendChild(musicTitle);
  musicSection.appendChild(musicTime);
  setInterval(() => {
    let mins = Math.floor(audio.currentTime / 60);
    let secs = Math.floor(audio.currentTime % 60);
    if (secs < 10) {
      secs = "0" + String(secs);
    }
    musicTime.innerHTML = mins + ":" + secs;
  }, 10);
};

inputs[0].addEventListener("click", playMusic);
inputs[1].addEventListener("click", stopMusic);
inputs[2].addEventListener("click", nextMusic);
inputs[3].addEventListener("click", previousMusic);
