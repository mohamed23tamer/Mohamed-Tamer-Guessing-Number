'use strict';
// Face page (beginning page) logic
let score;
let SecretNumber = 0;
let highScore1 = 0;
let highScore2 = 0;
let highScore3 = 0;
let level;
// to determine fame page
document.querySelector('.easy').addEventListener('click', function () {
  chooseLevel(highScore1);
  score = 20;
  document.querySelector('.score').textContent = score;
  level = 0;
});
document.querySelector('.medium').addEventListener('click', function () {
  chooseLevel(highScore2);
  score = 10;
  document.querySelector('.score').textContent = score;
  level = 1;
});
document.querySelector('.hard').addEventListener('click', function () {
  chooseLevel(highScore3);
  score = 5;
  document.querySelector('.score').textContent = score;
  level = 2;
});
// check button logic
document.querySelector('.check').addEventListener('click', function () {
  let game = Number(document.querySelector('.slider').value);
  if (score > 1) {
    if (!game) {
      document.querySelector('.Message').textContent = '⛔ NO Number !';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (game !== SecretNumber) {
      if (SecretNumber > game) {
        document.querySelector('.Message').textContent = '📉 Too low!';
      } else {
        document.querySelector('.Message').textContent = '📈 Too high!';
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else if (game === SecretNumber) {
      document.querySelector('.Message').textContent = '🎉✨ Correct Number';
      document.querySelector('.back').style.backgroundColor = '#60b347';
      document.querySelector('.line span').textContent = SecretNumber;
      document.querySelector('.line span').style.padding = '20px 40px';
      determineHighScore(level);
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.Message').textContent = '💥 You lost the game!';
    document.querySelector('.score').textContent = 0;
    document.querySelector('.back').style.backgroundColor = 'red';
  }
});
// Again button logic
document.querySelector('.again').addEventListener('click', function () {
  reAssign();
  document.querySelector('.score').textContent = determineLevel(level);
  SecretNumber = Math.trunc(Math.random() * 20 + 1);
});
// Back button logic
document.querySelector('.back-btn').addEventListener('click', function () {
  document.querySelector('.face').style.display = 'block';
  document.querySelector('.back').style.display = 'none';
  reAssign();
});
// to determine the level of page
const chooseLevel = function (highscore) {
  document.querySelector('.face').style.display = 'none';
  document.querySelector('.back').style.display = 'block';
  SecretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.highscore').textContent = highscore;
};
// function to re Assign game page
const reAssign = function () {
  document.querySelector('.Message').textContent = 'Start guessing...';
  document.querySelector('.back').style.backgroundColor = '#222';
  document.querySelector('.slider').value = '';
  document.querySelector('.line span').textContent = '?';
  document.querySelector('.line span').style.padding = '15px 30px';
};
// function to determine score of level
const determineLevel = function (level) {
  if (level === 0) {
    score = 20;
  } else if (level === 1) {
    score = 10;
  } else if (level === 2) {
    score = 5;
  }
  return score;
};
// to determine High score of level
const determineHighScore = function (level) {
  if (level === 0) {
    if (score > highScore1) {
      highScore1 = score;
      document.querySelector('.highscore').textContent = highScore1;
    }
  } else if (level === 1) {
    if (score > highScore2) {
      highScore2 = score;
      document.querySelector('.highscore').textContent = highScore2;
    }
  } else if (level === 2) {
    if (score > highScore3) {
      highScore3 = score;
      document.querySelector('.highscore').textContent = highScore3;
    }
  }
};
