#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';
import { proccesAnswers, getRandomInt } from '../src/index.js';
import { getCorrectPrimeAnswer } from '../games/prime.js';

greetUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const rounds = 3;

for (let i = 1; i <= rounds; i += 1) {

    let firstNumber = getRandomInt();
    console.log(`Question: ${firstNumber}`);
    const userAnswer = (readlineSync.question('Your answer: '));
    let correctAnswer = getCorrectPrimeAnswer(firstNumber);

    let isLastRound = i === rounds;
    if (!proccesAnswers(userAnswer, correctAnswer, isLastRound)) {
        break; 
    }
}

