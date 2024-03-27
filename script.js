'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (number === Number(guess)) {
    document.querySelector('.number').textContent = number;
    displayMessage`Correct Number!`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    const highScore = document.querySelector('.highscore').textContent;
    const scorecheck = document.querySelector('.score').textContent;
    if (Number(highScore) < scorecheck) {
      document.querySelector('.highscore').textContent = scorecheck;
    }
  } else if (number !== Number(guess)) {
    if (score > 0) {
      displayMessage(number > Number(guess) ? 'too low' : 'too high');
      document.querySelector('.score').textContent = --score;
    } else {
      document.querySelector('.message').textContent = 'you lost try again';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);

  displayMessage`start guessing`;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';
});
