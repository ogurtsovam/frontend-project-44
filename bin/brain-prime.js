#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';
import { proccesAnswers, getRandomInt } from '../src/index.js';

greetUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const rounds = 3;

for (let i = 1; i <= rounds; i += 1) {

    let firstNumber = getRandomInt();
    console.log(`Question: ${firstNumber}`);
    const userAnswer = (readlineSync.question('Your answer: '));
    let correctAnswer = getCorrectAnswer(firstNumber);

    let isLastRound = i === rounds;
    if (!proccesAnswers(userAnswer, correctAnswer, isLastRound)) {
        break; 
    }
}

function getCorrectAnswer (firstNumber) {
    const primeNumbers = [2, 3,	5,	7,	11,	13,	17,	19,	23,	29,	31,	37,	41,	43,	47,	53,	59,	61,	67,	71, 73,	79,	83,	89,	97];
    if (primeNumbers.includes(firstNumber)) {
        return 'yes';
    } else {
        return 'no';
    }
}
