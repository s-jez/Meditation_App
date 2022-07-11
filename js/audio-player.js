import { audioSrcs } from "./audio-sources.js";

export class AudioPlayer {
  constructor() {
    this.index = 0;
    this.audio = document.getElementById("audio");
    this.volume = document.getElementById("volume").value;
    this.title = "";
    this.time = "";
  }

  setAudio() {
    this.audio.src = audioSrcs[this.index].src;
  }
  playMusic() {
    this.switchMusic();
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
    } else if (this.index >= 2) {
      this.index = 1;
    }
    this.setAudio();
    this.audio.play();
    this.renderIndexCounter();
  }
  pauseMusic() {
    audio.paused ? this.audio.play() : this.audio.pause();
    this.renderIndexCounter();
  }
  renderIndexCounter() {
    const audioElement = audioSrcs[this.index];
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
      if (musicTitle !== undefined && musicTime !== undefined) {
        musicTitle.textContent = this.title;
        musicTime.textContent = this.time;
      }
    }, 10);
  }
  setVolume(volume) {
    this.audio.volume = volume;
  }
}
