import { AudioPlayer } from "./audio-player.js";

const inputs = [...document.querySelectorAll(".buttons input")];

const audioPlayer = new AudioPlayer();
const [
  playAudioInput,
  pauseAudioInput,
  nextAudioInput,
  previousAudioInput,
  volumeAudioInput,
] = inputs;
playAudioInput.addEventListener("click", () => {
  audioPlayer.playMusic();
});
pauseAudioInput.addEventListener("click", () => {
  audioPlayer.pauseMusic();
});
nextAudioInput.addEventListener("click", () => {
  audioPlayer.nextMusic();
});
previousAudioInput.addEventListener("click", () => {
  audioPlayer.previousMusic();
});
volumeAudioInput.addEventListener("input", (ev) => {
  audioPlayer.setVolume(ev.target.value);
});
