import "./css/style.css";
import birdsData from "./data";
import "./audioPlayer";
import "./quizAnswers";
import "./descriptionСard";
import "./nextLevels";
import { getlevel1 } from "./levels";
import { obj } from "./quizAnswers";

const startPage = document.querySelector(".start-page");
const quizPage = document.querySelector(".quiz-page");
const buttonStart = document.querySelector(".start-page__button");
const nav = document.querySelectorAll(".nav-item");
const logo = document.querySelectorAll(".logo-img");
const resButton = document.querySelector(".results-page__button");
const resultPage = document.querySelector(".results-page");

function togglePage() {
  if (localStorage.getItem("rs")) {
    startPage.classList.add("start-page-none");
    quizPage.classList.add("quiz-page-active");
    getlevel1();
    localStorage.removeItem("rs");
  } else {
    buttonStart.addEventListener("click", () => {
      startPage.classList.add("start-page-none");
      quizPage.classList.add("quiz-page-active");
      getlevel1();
    });
  }

  for (let i = 0; i < logo.length; i++) {
    logo[i].addEventListener("click", () => {
      startPage.classList.remove("start-page-none");
      quizPage.classList.remove("quiz-page-active");
    });
  }
  nav[1].addEventListener("click", () => {
    startPage.classList.add("start-page-none");
    quizPage.classList.add("quiz-page-active");
    getlevel1();
  });
  nav[0].addEventListener("click", () => {
    startPage.classList.remove("start-page-none");
    quizPage.classList.remove("quiz-page-active");
  });
  resButton.addEventListener("click", () => {
    resultPage.classList.remove("results-page-active");
    quizPage.classList.add("quiz-page-active");
    document.querySelector(".score").textContent = `Счет: 0`;
    getlevel1();
    location.reload();
    localStorage.setItem("rs", "true");
    obj.counter = 0;
  });
}
togglePage();

console.log(`Оценка - 250 баллов: 
- Вёрстка, дизайн, UI всех трёх страниц приложения +60:
Стартовая страница приложения (вёрстка адаптивная - проверяется на ширине от 1920рх до 360рх) +20
Страница викторины (вёрстка адаптивная - проверяется на ширине от 1920рх до 360рх) +30
Страница с результатами (вёрстка адаптивная - проверяется на ширине от 1920рх до 360рх) +10

- Аудиоплеер +30:
у кастомного аудиоплеера из предыдущего пункта есть регулятор громкости звука +30

- Верхняя панель страницы викторины +20:
правильное отображение счета игры +10
текущий вопрос выделяется стилем +10

- Блок с вопросом +20:
подстановка дефолтного изображения и замена названия птицы на символы (***), пока игрок не выберет правильный ответ +10
при выборе правильного ответа в блоке с вопросом отображается изображение и название загаданной птицы +10

- Блок с вариантами ответов (названия птиц) +60:
цветовая индикация правильного/неправильного ответа в виде индикаторов разного цвета рядом с названием птицы: +10
при выборе правильного или неправильного ответа издаются разные звуковые сигналы: +10
при выборе неправильного ответа проигрывание аудиоплеера не должно останавливаться: +10
при выборе правильно ответа проигрывание аудиоплеера должно остановиться: +10
при клике по названию птицы в блоке с описанием птицы отображается информацию о ней: +10
если правильный ответ уже дан, возможность просматривать описания птиц при клике по вариантам ответов остаётся, цвет индикаторов при этом не изменяется

- Блок с описанием птицы: +30:
пока игрок не кликнул по названию птицы из списка, в блоке выводится короткий текст с предложением послушать плеер и выбрать название птицы, чей голос прозвучал +10
при клике по названию птицы из списка, в блоке с описанием птицы появляется актуальная информация о ней +20
Информация о птице включает:
изображение
название (на русском и на латыни)
аудиоплеер с записью голоса
дополнительное описание птицы.

- Кнопка перехода к следующему вопросу +30:
пока не выбран правильный ответ, кнопка не активна, нет возможности перейти к следующему заданию. Активное и неактивное состояние кнопки визуально отличаются, например, активная кнопка имеет зеленый, не активная - серый цвет +10
после правильного ответа на последний вопрос игрок переходит к странице с результатами викторины +10
страница с результатами содержит количество набранных баллов и кнопку с предложением сыграть ещё раз (или уведомление об окончании игры, если набрано максимальное количество баллов) +10`);
