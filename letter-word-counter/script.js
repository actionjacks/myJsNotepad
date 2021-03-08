const textToCount = document.querySelector(".counter__textToCount");
const whatToCount = document.querySelector(".counter__whatToCount");
const counterBtn = document.querySelector(".counter__btn");
const countedLetters = document.querySelector(".countedLetters");
const countedWords = document.querySelector(".countedWords");

let counterValue;
let text;

const countLetters = (e) => {
  e.preventDefault();

  if (textToCount.value !== "") {
    // count words
    counterValue = 0;
    text = [];
    text = [...textToCount.value.split(" ")];

    text.forEach((item) => {
      if (item === whatToCount.value) {
        counterValue++;
      }
    });
    countedWords.innerHTML = counterValue;

    // count letters
    counterValue = 0;
    text = [];
    text = [...textToCount.value.split("")];

    text.forEach((item) => {
      if (item === whatToCount.value) {
        counterValue++;
      }
    });
    countedLetters.innerHTML = counterValue;
  }
};

counterBtn.addEventListener("click", countLetters, whatToCount.value);
