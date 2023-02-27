const buttonPlay = document.querySelector(".button-play");
const buttonVolume = document.querySelector(".play-volume");
const volumeRange = document.querySelector(".volume-range");
const currentTime = document.querySelector(".current-time");
const trackTime = document.querySelector(".track-time");
const progressRange = document.querySelector(".progress-range");

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getNumber() {
  let randomNum = getRandom(0, 5);
  return randomNum;
}

const audio = new Audio();
let isPlay = false;
audio.currentTime = 0;

function playAudio(src) {
  audio.src = src;
  isPlay = true;
  audio.load();
  volumeRange.value = 100;
  audio.play();
  audio.oncanplay = () => {
    trackTime.textContent = formatTime(Math.floor(audio.duration));
  };
}
function pauseAudio() {
  isPlay = false;
  audio.pause();
}
function playPause(srcAudio) {
  if (isPlay === false) {
    setTimeout(function () {
      playAudio(srcAudio);
    }, 0);
  } else {
    setTimeout(function () {
      pauseAudio();
    }, 0);
  }
}
function clickButtonPlay(srcAudio) {
  buttonPlay.addEventListener("click", () => {
    buttonPlay.classList.toggle("pause");
    playPause(srcAudio);
  });
}
audio.addEventListener("ended", () => {
  isPlay = false;
  audio.pause();
  buttonPlay.classList.remove("pause");
});

function initPlayer() {
  pauseAudio();
  buttonPlay.classList.remove("pause");
  audio.currentTime = 0;
  currentTime.textContent = "0:00";
  trackTime.textContent = "";
  progressRange.value = audio.currentTime;
}
function progressBar() {
  progressRange.max = audio.duration;
  progressRange.value = audio.currentTime;
  currentTime.innerHTML = formatTime(Math.floor(audio.currentTime));
}
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}
setInterval(progressBar, 500);

//громкость вкл/выкл
let isMute = false;

function volumeOff() {
  buttonVolume.classList.toggle("volume-off");
  audio.muted = true;
  isMute = true;
  volumeRange.value = 0;
}
function volumeUp() {
  buttonVolume.classList.toggle("volume-off");
  audio.muted = false;
  isMute = false;
  volumeRange.value = 50;
}
function muteVolume() {
  if (!isMute) {
    volumeOff();
  } else {
    volumeUp();
  }
}
function changeVolume() {
  let vol = volumeRange.value;
  audio.volume = vol / 100;
  if (audio.volume === 0) {
    buttonVolume.classList.add("volume-off");
  } else {
    buttonVolume.classList.remove("volume-off");
  }
}
volumeRange.addEventListener("input", changeVolume);
buttonVolume.addEventListener("click", muteVolume);

export {
  getRandom,
  playPause,
  muteVolume,
  changeVolume,
  pauseAudio,
  playAudio,
  formatTime,
  clickButtonPlay,
  progressBar,
  initPlayer,
};
