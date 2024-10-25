import calculateRandomNumber from '../utils.js';
import runGame from '../runGame.js';

const operators = ['+', '-', '*'];
function generateOperator() {
  return operators[calculateRandomNumber(0, operators.length - 1)];
}

function getCorrectCalcAnswer(number1, number2, operator) {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
}

function setupQuestion() {
  const number1 = calculateRandomNumber(0, 10);
  const number2 = calculateRandomNumber(0, 10);
  const operator = generateOperator();
  const question = `${number1} ${operator} ${number2}`;
  return [getCorrectCalcAnswer(number1, number2, operator).toString(), question];
}

function runCalcGame() {
  runGame('What is the result of the expression?', setupQuestion);
}

export default runCalcGame;
