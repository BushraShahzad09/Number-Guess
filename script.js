'use strict';
/*whenever we gt somethimg from user, it is always string */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when player wins

  if (!guess) {
    //document.querySelector('.message').textContent = '⛔No Number! ';
    displayMessage('⛔No Number! ');
  }
  // when the guess is right
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉Correct Number! ';
    displayMessage('🎉Correct Number! ');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }
  // when the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too Low!');
      score--;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game! ';
    }
    document.querySelector('.score').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing... ');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
