import { clickButtonPlay, initPlayer } from "./audioPlayer.js";
import {
  getlevel2,
  getlevel3,
  getlevel4,
  getlevel5,
  getlevel6,
} from "./levels";
import { pauseAudioDesc } from "./descriptionСard";
import { obj } from "./quizAnswers.js";

const answerItem = document.querySelectorAll(".answer-item");
const buttonNext = document.querySelector(".next-level");
const levelQuiz = document.querySelectorAll(".level-quiz__item");
const quizPage = document.querySelector(".quiz-page");
const resultPage = document.querySelector(".results-page");
const descriptionStart = document.querySelector(".bird-description__start");
const descriptionCard = document.querySelector(".bird-description__card");
const birdImg = document.querySelector(".bird-no-name-img");
const birdName = document.querySelector(".name-bird");
const buttonPlayDiscription = document.querySelector(
  ".button-play__discription"
);
const resultPageText = document.querySelector(".results-page__p");
const score = document.querySelector(".score");

export function getStartingPos(srcAudio) {
  answerItem.forEach((span) => {
    span.classList.remove("answer-item_true", "answer-item_folse");
  });
  buttonPlayDiscription.classList.remove("pause");
  pauseAudioDesc();
  clickButtonPlay(srcAudio);
  descriptionStart.classList.remove("bird-description__start-none");
  descriptionCard.classList.remove("bird-description__card-active");
  buttonNext.classList.remove("next-level-active");
  birdImg.setAttribute("src", "assets/img/bird.06a46938.jpg");
  birdName.innerHTML = "******";
  //   audio.currentTime = 0;
}

export function nextLevel() {
  buttonNext.addEventListener("click", () => {
    if (buttonNext.classList.contains("next-level-active")) {
      getStartingPos();
      initPlayer();
      // audio.currentTime = 0;

      if (levelQuiz[0].classList.contains("level-quiz__item_active")) {
        levelQuiz[0].classList.remove("level-quiz__item_active");
        levelQuiz[1].classList.add("level-quiz__item_active");
        return getlevel2();
      }

      if (levelQuiz[1].classList.contains("level-quiz__item_active")) {
        levelQuiz[1].classList.remove("level-quiz__item_active");
        levelQuiz[2].classList.add("level-quiz__item_active");
        return getlevel3();
      }
      if (levelQuiz[2].classList.contains("level-quiz__item_active")) {
        levelQuiz[2].classList.remove("level-quiz__item_active");
        levelQuiz[3].classList.add("level-quiz__item_active");
        return getlevel4();
      }
      if (levelQuiz[3].classList.contains("level-quiz__item_active")) {
        levelQuiz[3].classList.remove("level-quiz__item_active");
        levelQuiz[4].classList.add("level-quiz__item_active");
        return getlevel5();
      }
      if (levelQuiz[4].classList.contains("level-quiz__item_active")) {
        levelQuiz[4].classList.remove("level-quiz__item_active");
        levelQuiz[5].classList.add("level-quiz__item_active");
        return getlevel6();
      }
      if (levelQuiz[5].classList.contains("level-quiz__item_active")) {
        levelQuiz[5].classList.remove("level-quiz__item_active");
        levelQuiz[0].classList.add("level-quiz__item_active");
        quizPage.classList.remove("quiz-page-active");
        resultPage.classList.add("results-page-active");
        resultPageText.textContent = `Вы прошли викторину и набрали ${obj.counter} из 30 возможных баллов!`;
      }
    }
  });
}
