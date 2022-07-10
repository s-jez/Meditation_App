import { audioSrc } from "./audio-source.js";

export class AudioPlayer {
  constructor() {
    this.index = 0;
    this.audio = document.getElementById("audio");
    this.volume = document.getElementById("volume").value;
    this.title = "";
    this.time = "";
  }

  setAudio() {
    this.audio.src = audioSrc[this.index].src;
  }
  playMusic() {
    this.setAudio();
    this.audio.play();
    this.renderAudioElements();
  }
  nextMusic() {
    this.setAudio();
    this.audio.play();
    this.index++;
    this.renderAudioElements();
  }
  previousMusic() {
    this.setAudio();
    this.audio.play();
    this.index--;
    this.renderAudioElements();
  }
  pauseMusic() {
    if (audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
    this.renderAudioElements();
  }
  renderAudioElements() {
    const audioElement = audioSrc[this.index];
    this.title = audioElement.title;
    setInterval(() => {
      let minutes = Math.floor(this.audio.currentTime / 60);
      let seconds = Math.floor(this.audio.currentTime % 60);
      if (seconds < 10) {
        seconds = "0" + String(seconds);
      }
      this.time = minutes + ":" + seconds;
      document.querySelector(".music-title").textContent = this.title;
      document.querySelector(".music-time").textContent = this.time;
    }, 10);
  }
  setVolume(volume) {
    this.audio.volume = volume;
  }
}
