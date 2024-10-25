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
  const question = `${currentRandomNumber}`;
  return {
    correctAnswer: isEvenAnswer(currentRandomNumber) ? 'yes' : 'no',
    question: question,
  }
}

function runEvenGame() {
  runGame('Answer "yes" if the number is even, otherwise answer "no".', setupQuestion);
}

export default runEvenGame;
