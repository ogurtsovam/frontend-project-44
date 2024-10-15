#!/usr/bin/env node
import {
 getRandomInt, getUserAnswerToInt,
} from '../src/index.js';
import getGreatestCommonDivisor from '../games/gcd.js';
import runGame from '../games/abstract_game.js';

function setupQuestion() {
  const firstNumber = getRandomInt();
  const secondNumber = getRandomInt();
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  return getGreatestCommonDivisor(firstNumber, secondNumber);
}

runGame('Find the greatest common divisor of given numbers.', setupQuestion, getUserAnswerToInt);
