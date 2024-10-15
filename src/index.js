import readlineSync from 'readline-sync';

function getRandomInt(from = 1, to = 100) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

function getUserAnswer() {
  return (readlineSync.question('Your answer: '));
}

function getUserAnswerToInt() {
  return parseInt(readlineSync.question('Your answer: '), 10);
}

export {
  getRandomInt, getUserAnswer, getUserAnswerToInt,
};
