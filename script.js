'use strict';
//getting a random number between 1 and 20, math trunc gives numbers between 0 and 1
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
let score = 20;
const scoreEarned = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //if there is no input
  if (!guess) {
    displayMessage('No number');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('YAY, you win!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //player wins but highscore needs to be determined based on the highest score the user got in as many attempts as possible
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is different than the random number that the system generated
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too Low');
      score--;
      scoreEarned(score);
    } else {
      displayMessage('HELLO LOSER');
      scoreEarned(0);
    }
  }
});

//half baked logic to refresh the game and reset score+numbers
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  scoreEarned(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
