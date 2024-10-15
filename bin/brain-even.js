#!/usr/bin/env node
import {
 getRandomInt, getUserAnswer,
} from '../src/index.js';
import getCorrectEvenAnswer from '../games/even.js';
import runGame from '../games/abstract_game.js';

function setupQuestion() {
  const currentRandomNumber = getRandomInt();
  console.log(`Question: ${currentRandomNumber}`);
  return getCorrectEvenAnswer(currentRandomNumber);
}

runGame('Answer "yes" if the number is even, otherwise answer "no".', setupQuestion, getUserAnswer);
