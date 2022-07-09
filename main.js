const inputs = document.querySelectorAll(".buttons input");
const musicSection = document.querySelector(".music-section");
const audioSrc = ["/music/01.mp3"];
let musicIndex = 0;
let audio = document.getElementById("audio");
audio.src = audioSrc[musicIndex];

const playMusic = () => {
  audio.play();
};
const nextMusic = () => {
  console.log("next...");
};
const stopMusic = () => {
  audio.pause();
};
inputs[0].addEventListener("click", playMusic);
inputs[1].addEventListener("click", stopMusic);
inputs[2].addEventListener("click", nextMusic);
