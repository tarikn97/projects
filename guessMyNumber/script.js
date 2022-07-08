'use strict';
//defining secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//defining highscore
let score = 20;
let highscore = 0;

//message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//click handle
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //no input predstavlja 0 što je false falue, !guess = 0 ---> true
  if (!guess) {
    displayMessage('No number input!');
  }

  //player win
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number too high!' : 'Number too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('GAME OVER');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
