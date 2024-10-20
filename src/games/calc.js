import {
  getRandomNumber,
} from '../index.js';

const operators = ['+', '-', '*'];
function generateOperator() {
  return operators[getRandomNumber(0, operators.length - 1)];
}

function getCorrectCalcAnswer(firstNumber, secondNumber, operator) {
  switch (operator) {
  case '+':
    return firstNumber + secondNumber;
  case '-':
    return firstNumber - secondNumber;
  case '*':
    return firstNumber * secondNumber;
  default:
    return null;
  }
}

function setupQuestion() {
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);
  const operator = generateOperator();
  console.log(`Question: ${number1} ${operator} ${number2}`);
  return getCorrectCalcAnswer(number1, number2, operator);
}

export {
  generateOperator, getCorrectCalcAnswer, setupQuestion,
};
