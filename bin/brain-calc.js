#!/usr/bin/env node
import {
 getRandomInt, getUserAnswerToInt,
} from '../src/index.js';
import {
 generateOperator, getCorrectCalcAnswer,
} from '../games/calc.js';
import runGame from '../games/abstract_game.js';

function setupQuestion() {
  const firstNumber = getRandomInt(0, 10);
  const secondNumber = getRandomInt(0, 10);
  const operator = generateOperator();
  console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
  return getCorrectCalcAnswer(firstNumber, secondNumber, operator);
}

runGame('What is the result of the expression?', setupQuestion, getUserAnswerToInt);
