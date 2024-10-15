import {
  getRandomInt,
} from '../src/index.js';

const operators = ['+', '-', '*'];
function generateOperator() {
  return operators[getRandomInt(0, operators.length - 1)];
}

function getCorrectCalcAnswer(firstNumber, secondNumber, operator) {
  if (operator === '+') {
    return firstNumber + secondNumber;
  }
  if (operator === '-') {
    return firstNumber - secondNumber;
  }
  if (operator === '*') {
    return firstNumber * secondNumber;
  }
  return null;
}

export {
  generateOperator, getCorrectCalcAnswer,
};
