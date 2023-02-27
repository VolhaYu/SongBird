import { pauseAudio } from "./audioPlayer";
import { nextLevel } from "./nextLevels";

const birdImg = document.querySelector(".bird-no-name-img");
const birdName = document.querySelector(".name-bird");
const answerItem = document.querySelectorAll(".answer-item");
const buttonNext = document.querySelector(".next-level");
const levelQuiz = document.querySelectorAll(".level-quiz__item");
const buttonPlay = document.querySelector(".button-play");
const score = document.querySelector(".score");

export let obj = {
  counter: 0,
};
export function showAnswerQuiz(info) {
  let isAnswer = false;
  const name = info.name;
  console.log(name);
  let set = new Set();
  for (let i = 0; i < answerItem.length; i++) {
    answerItem[i].addEventListener("click", () => {
      answerItem.forEach((item) => {
        item.classList.remove("answer-item_folse");
      });
      if (answerItem[i].textContent === name) {
        if (isAnswer === false) {
          getSoundTrue();
        }
        isAnswer = true;
        nextLevel();
        birdName.textContent = name;
        birdImg.setAttribute("src", info.image);
        answerItem[i].classList.add("answer-item_true");
        buttonNext.classList.add("next-level-active");
        pauseAudio();
        buttonPlay.classList.remove("pause");
        if (!set.has(answerItem[i].textContent)) {
          set.add(answerItem[i].textContent);
          obj.counter += 5 - (set.size - 1);
          score.textContent = `Счет: ${obj.counter}`;
        }
        // return info;
      } else {
        if (isAnswer === false) {
          set.add(answerItem[i].textContent);
          answerItem[i].classList.add("answer-item_folse");
          getSoundFalse();
        }
      }
    });
  }
}

function getSoundTrue() {
  const audio = new Audio();
  audio.src = "./assets/mp3/true.mp3";
  audio.play();
}
function getSoundFalse() {
  const audio = new Audio();
  audio.src = "./assets/mp3/fasle.mp3";
  audio.play();
}
