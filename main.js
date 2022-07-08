const buttons = document.querySelectorAll(".buttons button");
const musicSection = document.querySelector(".music-section");

let musicIndex = 1;

const playMusic = () => {
  console.log("playing...");
};
const nextMusic = () => {
  console.log("next...");
};
const stopMusic = () => {
  console.log("stop...");
};
buttons[0].addEventListener("click", playMusic);
buttons[1].addEventListener("click", stopMusic);
buttons[2].addEventListener("click", nextMusic);
