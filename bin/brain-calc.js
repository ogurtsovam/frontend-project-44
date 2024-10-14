#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';
import { proccesAnswers, getRandomInt } from '../src/index.js';
import { generateOperator, getCorrectCalcAnswer } from '../games/calc.js';
greetUser();
console.log('What is the result of the expression?');
const rounds = 3;
for (let i = 1; i <= rounds; i += 1) {
    const firstNumber = getRandomInt(0, 10);
    const secondNumber = getRandomInt(0, 10);
    const operator = generateOperator();
    console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '));
    const correctAnswer = getCorrectCalcAnswer(firstNumber, secondNumber, operator);
    let isLastRound = i === rounds;
    if (!proccesAnswers(userAnswer, correctAnswer, isLastRound)) {
        break; 
    }
}