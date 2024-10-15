#!/usr/bin/env node
import {
 getRandomInt, getUserAnswer,
} from '../src/index.js';
import getCorrectPrimeAnswer from '../games/prime.js';
import runGame from '../games/abstract_game.js';

function setupQuestion() {
  const firstNumber = getRandomInt();
  console.log(`Question: ${firstNumber}`);
  return getCorrectPrimeAnswer(firstNumber);
}

runGame('Answer "yes" if given number is prime. Otherwise answer "no".', setupQuestion, getUserAnswer);
