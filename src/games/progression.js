import calculateRandomNumber from '../utils.js';
import runGame from '../runGame.js';

function getProgression(number1, step) {
  const progression = [];
  let currentNumber = number1;
  for (let i = 0; i <= calculateRandomNumber(5, 11); i += 1) {
    progression.push(currentNumber);
    currentNumber += step;
  }
  return progression;
}

function getPosition(progression) {
  return calculateRandomNumber(0, progression.length - 1);
}

function getProgressionQuestion(progression, position) {
  return progression.map((num) => (num === progression[position] ? '..' : num));
}

function setupQuestion() {
  const number1 = calculateRandomNumber(1, 10);
  const step = calculateRandomNumber(2, 9);
  const progression = getProgression(number1, step);
  const position = getPosition(progression);
  const progressionQuestion = getProgressionQuestion(progression, position).join(' ');
  const question =`${progressionQuestion}`;
  return [progression[position].toString(), question];
}

function runProgressionGame() {
  runGame('What number is missing in the progression?', setupQuestion);
}

export default runProgressionGame;
