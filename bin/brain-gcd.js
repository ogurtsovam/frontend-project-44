#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';
import { proccesAnswers, getRandomInt } from '../src/index.js';
import getGreatestCommonDivisor from '../games/gcd.js';

greetUser();
console.log('Find the greatest common divisor of given numbers.');
const rounds = 3;
for (let i = 1; i <= rounds; i += 1) {
  const firstNumber = getRandomInt();
  const secondNumber = getRandomInt();
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
  const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);
  const isLastRound = i === rounds;
  if (!proccesAnswers(userAnswer, correctAnswer, isLastRound)) {
    break;
  }
}
