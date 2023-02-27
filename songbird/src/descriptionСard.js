import birdsData from "./data";
import {
  // playPause,
  // birdInfo,
  formatTime,
} from "./audioPlayer.js";

const descriptionStart = document.querySelector(".bird-description__start");
const descriptionCard = document.querySelector(".bird-description__card");
const birdImgDiscr = document.querySelector(".bird-img");
const birdNameDiscr = document.querySelector(".h4__name-bird");
const birdImg = document.querySelector(".bird-no-name-img");
const birdName = document.querySelector(".name-bird");
const birdSpecies = document.querySelector(".bird-species");
const birdDescription = document.querySelector(
  ".bird-description__description"
);
const progressRangeDescription = document.querySelector(
  ".progress-range__description"
);
const currentTimeDescription = document.querySelector(
  ".current-time__description"
);
const trackTimeDescription = document.querySelector(".track-time_description");
const answerItem = document.querySelectorAll(".answer-item");
const buttonNext = document.querySelector(".next-level");
const levelQuiz = document.querySelectorAll(".level-quiz__item");
console.log();

const buttonPlayDiscription = document.querySelector(
  ".button-play__discription"
);
const buttonVolumeDiscription = document.querySelector(
  ".play-volume__discription"
);
const volumeRangeDiscription = document.querySelector(
  ".volume-range__discription"
);

let srcAudio;
const audio = new Audio();
let isPlayDiscr = false;
export function creatdescription(birdInfoLevel) {
  for (let i = 0; i < answerItem.length; i++) {
    answerItem[i].addEventListener("click", () => {
      descriptionStart.classList.add("bird-description__start-none");
      descriptionCard.classList.add("bird-description__card-active");
      birdImgDiscr.setAttribute("src", birdInfoLevel[i].image);
      birdNameDiscr.textContent = birdInfoLevel[i].name;
      birdSpecies.textContent = birdInfoLevel[i].species;
      birdDescription.innerHTML = birdInfoLevel[i].description;
      srcAudio = birdInfoLevel[i].audio;
      isPlayDiscr = false;
      buttonPlayDiscription.classList.remove("pause");
      audio.pause();
      audio.currentTime = 0;
      return pauseAudioDesc();
    });
  }
  volumeRangeDiscription.addEventListener("input", changeVolumeDesc);
  buttonVolumeDiscription.addEventListener("click", muteVolumeDesc);
  buttonPlayDiscription.addEventListener("click", () => {
    playPauseDesc(srcAudio);
  });
}

function playAudioDesc(s) {
  isPlayDiscr = true;
  audio.src = s;
  trackTimeDescription.textContent = "0:00";
  buttonPlayDiscription.classList.add("pause");
  audio.load();
  volumeRangeDiscription.value = 100;
  audio.play();
  audio.oncanplay = () => {
    trackTimeDescription.textContent = formatTime(Math.floor(audio.duration));
  };
}
export function pauseAudioDesc() {
  isPlayDiscr = false;
  buttonPlayDiscription.classList.remove("pause");
  audio.pause();
}
function playPauseDesc(srcAudio) {
  if (isPlayDiscr === false) {
    setTimeout(function () {
      playAudioDesc(srcAudio);
    }, 0);
  } else {
    setTimeout(function () {
      pauseAudioDesc();
    }, 0);
  }
}
audio.addEventListener("ended", () => {
  isPlayDiscr = false;
  audio.pause();
  buttonPlayDiscription.classList.remove("pause");
});

function progressBarDesc() {
  progressRangeDescription.max = audio.duration;
  progressRangeDescription.value = audio.currentTime;
  currentTimeDescription.innerHTML = formatTime(Math.floor(audio.currentTime));
}
setInterval(progressBarDesc, 500);

let isMuteDiscr = false;

function volumeOffDesc() {
  buttonVolumeDiscription.classList.add("volume-off");
  audio.muted = true;
  isMuteDiscr = true;
  volumeRangeDiscription.value = 0;
}
function volumeUpDesc() {
  buttonVolumeDiscription.classList.remove("volume-off");
  audio.muted = false;
  isMuteDiscr = false;
  volumeRangeDiscription.value = 50;
}
function muteVolumeDesc() {
  if (!isMuteDiscr) {
    volumeOffDesc();
  } else {
    volumeUpDesc();
  }
}
function changeVolumeDesc() {
  let vol = volumeRangeDiscription.value;
  audio.volume = vol / 100;
  if (audio.volume === 0) {
    buttonVolumeDiscription.classList.add("volume-off");
  } else {
    buttonVolumeDiscription.classList.remove("volume-off");
  }
}
