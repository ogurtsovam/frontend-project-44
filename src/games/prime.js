import {
  getRandomNumber,
} from '../index.js';

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
  const number1 = getRandomNumber(0, 100);
  console.log(`Question: ${number1}`);
  return isPrime(number1) ? 'yes' : 'no';
}

export {
  isPrime, setupQuestion,
};
