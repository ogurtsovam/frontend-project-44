import calculateRandomNumber from '../utils.js';
import runGame from '../runGame.js';

function isEvenAnswer(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function setupQuestion() {
  const currentRandomNumber = calculateRandomNumber(0, 100);
  console.log(`Question: ${currentRandomNumber}`);
  return isEvenAnswer(currentRandomNumber) ? 'yes' : 'no';
}

function runEvenGame() {
  runGame('Answer "yes" if the number is even, otherwise answer "no".', setupQuestion);
}

export default runEvenGame;
