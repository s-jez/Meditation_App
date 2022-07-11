import { AudioPlayer } from "./audio-player.js";

const inputs = [...document.querySelectorAll(".buttons input")];

const audioPlayer = new AudioPlayer();
inputs.forEach((item, index) => {
  switch (index) {
    case 0:
      item.addEventListener("click", () => {
        audioPlayer.playMusic();
      });
      break;
    case 1:
      item.addEventListener("click", () => {
        audioPlayer.pauseMusic();
      });
      break;
    case 2:
      item.addEventListener("click", () => {
        audioPlayer.nextMusic();
      });
      break;
    case 3:
      item.addEventListener("click", () => {
        audioPlayer.previousMusic();
      });
    case 4:
      item.addEventListener("input", (ev) => {
        audioPlayer.setVolume(ev.target.value);
      });
  }
});
