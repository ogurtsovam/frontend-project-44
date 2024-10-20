import readlineSync from 'readline-sync';

function getRandomNumber(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

function getUserAnswer() {
  return (readlineSync.question('Your answer: '));
}

function getUserAnswerToInt() {
  return parseInt(readlineSync.question('Your answer: '), 10);
}

export {
  getRandomNumber, getUserAnswer, getUserAnswerToInt,
};
