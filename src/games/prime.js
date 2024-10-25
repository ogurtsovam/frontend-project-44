import calculateRandomNumber from '../utils.js';
import runGame from '../runGame.js';

function isPrime(number1) {
  if (number1 < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number1); i += 1) {
    if (number1 % i === 0) {
      return false;
    }
  }
  return true;
}

function setupQuestion() {
  const number1 = calculateRandomNumber(1, 100);
  const question =`${number1}`;
  return [isPrime(number1) ? 'yes' : 'no', question];
}

function runPrimeGame() {
  runGame('Answer "yes" if given number is prime. Otherwise answer "no".', setupQuestion);
}

export default runPrimeGame;
