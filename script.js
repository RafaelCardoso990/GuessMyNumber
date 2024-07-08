'use strict';

//Project

//Header alteration

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(randomNumber);

function restartPlay() {
  console.log('chamei');
  score = '21';
  document.querySelector('.highscore').textContent = "0";
  document.querySelector('.message').textContent = 'Finished game';
  window.document.body.classList.remove('win');
  document.querySelector('.guess').value = '';
}

document.querySelector('.check').addEventListener('click', catchTheNumber => {
  const guess = Number(document.querySelector('.guess').value);
  let score = document.querySelector('.score').textContent;
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else {
    compareNumbers(guess);
    changePrincipalNumber(guess);
  }
});

function changePrincipalNumber(number) {
  document.querySelector('.number').textContent = number;
}

function changeScoreNumber() {
  score == '0' ? restartPlay() : '';
  score--;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
}

function changeHighScore() {
  highscore += score;
  document.querySelector('.highscore').textContent = highscore;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  window.document.body.classList.add('win');
  
}

function compareNumbers(number) {
  if (number === randomNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').style.width = '30rem';
    changeHighScore();
  } else if (number > randomNumber) {
    if (number > 0) {
      document.querySelector('.message').textContent = 'To High!';
      window.document.body.classList.remove('win');
      changeScoreNumber();
    } else {
      document.querySelector('.message').textContent = 'Finished game';
    }
  } else if (number < randomNumber) {
    document.querySelector('.message').textContent = 'To Low!';
    window.document.body.classList.remove('win');
    changeScoreNumber();
  }
}
