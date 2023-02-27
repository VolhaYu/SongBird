import birdsData from "./data";
import { creatdescription } from "./descriptionСard";
import { getStartingPos } from "./nextLevels";
import { getNumber, clickButtonPlay } from "./audioPlayer";
import { showAnswerQuiz } from "./quizAnswers";

const levelQuizItem = document.querySelectorAll(".level-quiz__item");
const answerItem = document.querySelectorAll(".answer-item");

export function getlevel1() {
  if (levelQuizItem[0].classList.contains("level-quiz__item_active")) {
    let birdInfo = birdsData[0][`${getNumber()}`];
    let src = birdInfo.audio;
    const bird0 = [];
    birdsData[0].forEach((bird) => {
      bird0.push(bird.name);
      return bird0;
    });
    for (let i = 0; i < 6; i++) {
      answerItem[i].textContent = `${bird0[i]}`;
    }
    creatdescription(birdsData[0]);
    getStartingPos(src);
    showAnswerQuiz(birdInfo);
    return birdInfo;
  }
}

export function getlevel2() {
  if (levelQuizItem[1].classList.contains("level-quiz__item_active")) {
    const bird1 = [];
    birdsData[1].forEach((bird) => {
      bird1.push(bird.name);
      return bird1;
    });
    let birdInfo = birdsData[1][`${getNumber()}`];
    let src = birdInfo.audio;
    for (let i = 0; i < 6; i++) {
      answerItem[i].textContent = `${bird1[i]}`;
    }
    creatdescription(birdsData[1]);
    getStartingPos(src);
    showAnswerQuiz(birdInfo);
    return birdInfo;
  }
}

export function getlevel3() {
  if (levelQuizItem[2].classList.contains("level-quiz__item_active")) {
    const bird2 = [];
    birdsData[2].forEach((bird) => {
      bird2.push(bird.name);
      return bird2;
    });
    let birdInfo = birdsData[2][`${getNumber()}`];
    let src = birdInfo.audio;
    for (let i = 0; i < 6; i++) {
      answerItem[i].textContent = `${bird2[i]}`;
    }
    creatdescription(birdsData[2]);
    getStartingPos(src);
    showAnswerQuiz(birdInfo);
    return birdInfo;
  }
}

export function getlevel4() {
  if (levelQuizItem[3].classList.contains("level-quiz__item_active")) {
    const bird3 = [];
    birdsData[3].forEach((bird) => {
      bird3.push(bird.name);
      return bird3;
    });
    let birdInfo = birdsData[3][`${getNumber()}`];
    let src = birdInfo.audio;
    for (let i = 0; i < 6; i++) {
      answerItem[i].textContent = `${bird3[i]}`;
    }
    creatdescription(birdsData[3]);
    getStartingPos(src);
    showAnswerQuiz(birdInfo);
    return birdInfo;
  }
}

export function getlevel5() {
  if (levelQuizItem[4].classList.contains("level-quiz__item_active")) {
    const bird4 = [];
    birdsData[4].forEach((bird) => {
      bird4.push(bird.name);
      return bird4;
    });
    let birdInfo = birdsData[4][`${getNumber()}`];
    let src = birdInfo.audio;
    for (let i = 0; i < 6; i++) {
      answerItem[i].textContent = `${bird4[i]}`;
    }
    creatdescription(birdsData[4]);
    getStartingPos(src);
    showAnswerQuiz(birdInfo);
    return birdInfo;
  }
}

export function getlevel6() {
  if (levelQuizItem[5].classList.contains("level-quiz__item_active")) {
    const bird5 = [];
    birdsData[5].forEach((bird) => {
      bird5.push(bird.name);
      return bird5;
    });
    let birdInfo = birdsData[5][`${getNumber()}`];
    let src = birdInfo.audio;
    for (let i = 0; i < 6; i++) {
      answerItem[i].textContent = `${bird5[i]}`;
    }
    creatdescription(birdsData[5]);
    getStartingPos(src);
    showAnswerQuiz(birdInfo);
    return birdInfo;
  }
}
