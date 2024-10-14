#!/usr/bin/env node
import greetUser from '../src/cli.js';
import { proccesAnswers, getRandomInt,getUserAnswerToInt } from '../src/index.js';
import getGreatestCommonDivisor from '../games/gcd.js';

const userName = greetUser();
console.log('Find the greatest common divisor of given numbers.');
const rounds = 3;
for (let i = 1; i <= rounds; i += 1) {
  const firstNumber = getRandomInt();
  const secondNumber = getRandomInt();
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const userAnswer = getUserAnswerToInt();
  const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);
  const isLastRound = i === rounds;
  if (!proccesAnswers(userName, userAnswer, correctAnswer, isLastRound)) {
    break;
  }
}
