import calculateRandomNumber from '../utils.js';
import runGame from '../runGame.js';

function getGreatestCommonDivisor(number1, number2) {
  let a = number1;
  let b = number2;

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

function setupQuestion() {
  const number1 = calculateRandomNumber(0, 100);
  const number2 = calculateRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  return {
    correctAnswer: getGreatestCommonDivisor(number1, number2).toString(),
    question,
  };
}

function runGcdGame() {
  runGame('Find the greatest common divisor of given numbers.', setupQuestion);
}

export default runGcdGame;
