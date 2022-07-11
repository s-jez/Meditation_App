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
    this.renderIndexCounter();
  }
  nextMusic() {
    this.index++;
    this.switchMusic();
  }
  previousMusic() {
    this.index--;
    this.switchMusic();
  }
  switchMusic() {
    if (this.index < 0) {
      return;
    }
    this.setAudio();
    this.audio.play();
    this.renderIndexCounter();
  }
  pauseMusic() {
    if (audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
    this.renderIndexCounter();
  }
  renderIndexCounter() {
    const audioElement = audioSrc[this.index];
    this.title = audioElement.title;
    setInterval(() => {
      let minutes = Math.floor(this.audio.currentTime / 60);
      let seconds = Math.floor(this.audio.currentTime % 60);
      if (seconds < 10) {
        seconds = "0" + String(seconds);
      }
      this.time = minutes + ":" + seconds;
      let musicTitle = document.querySelector(".music-title");
      let musicTime = document.querySelector(".music-time");
      if (musicTitle != null && musicTime != null) {
        musicTitle.textContent = this.title;
        musicTime.textContent = this.time;
      }
    }, 10);
  }
  setVolume(volume) {
    this.audio.volume = volume;
  }
}
