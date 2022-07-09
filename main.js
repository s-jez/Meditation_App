import { audioSrc } from "./audio-source.js";

const inputs = document.querySelectorAll(".buttons input");
const musicSection = document.querySelector(".music-section");
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
  let musicTitle = document.createElement("h1");
  let musicTime = document.createElement("p");
  musicTitle.innerHTML = audioSrc[audioIndex].title;
  musicTime.innerHTML = audioSrc[audioIndex].time;
  musicSection.appendChild(musicTitle);
  musicSection.appendChild(musicTime);
};

inputs[0].addEventListener("click", playMusic);
inputs[1].addEventListener("click", stopMusic);
inputs[2].addEventListener("click", nextMusic);
inputs[3].addEventListener("click", previousMusic);
