#!/usr/bin/env node
import greetUser from '../src/cli.js';
import { proccesAnswers, getRandomInt, getUserAnswer } from '../src/index.js';
import getCorrectPrimeAnswer from '../games/prime.js';

const userName = greetUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const rounds = 3;
for (let i = 1; i <= rounds; i += 1) {
  const firstNumber = getRandomInt();
  console.log(`Question: ${firstNumber}`);
  const userAnswer = getUserAnswer();
  const correctAnswer = getCorrectPrimeAnswer(firstNumber);
  const isLastRound = i === rounds;
  if (!proccesAnswers(userName, userAnswer, correctAnswer, isLastRound)) {
    break;
  }
}
