#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import { proccesAnswers, getRandomInt } from '../src/index.js';
import getCorrectEvenAnswer from '../games/even.js';

const userName = greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const rounds = 3;
for (let i = 1; i <= rounds; i += 1) {
  const currentRandomNumber = getRandomInt();
  console.log(`Question: ${currentRandomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectEvenAnswer(currentRandomNumber);
  const isLastRound = i === rounds;
  if (!proccesAnswers(userName, userAnswer, correctAnswer, isLastRound)) {
    break;
  }
}
