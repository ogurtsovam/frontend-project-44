import { getRandomInt } from '../src/index.js';
function getProgression (firstNumber, step) {
  const progression = [];
  let currentNumber = firstNumber;
  for (let i = 0; i <= getRandomInt(5, 11); i += 1){
    progression.push(currentNumber);
    currentNumber = currentNumber + step;
  }
  return progression;
}
function getPosition (progression) {
  return getRandomInt(0, progression.length - 1);
}
function getProgressionQuestion (progression, position) {
  return progression.map(num => (num === progression[position] ? '..' : num));
}
export { getProgression, getProgressionQuestion, getPosition };
