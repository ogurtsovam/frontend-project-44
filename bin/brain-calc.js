#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';
import { proccesAnswers, getRandomInt } from '../src/index.js';

greetUser();
console.log('What is the result of the expression?');

const rounds = 3;
const operators = ['+', '-', '*'];

for (let i = 1; i <= rounds; i += 1) {
    let firstNumber = getRandomInt();
    let secondNumber = getRandomInt();
    let operator = generateOperator();
    console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '));
    let correctAnswer = getCorrectAnswer(firstNumber, secondNumber, operator);
    
    let isLastRound = i === rounds;
    if (!proccesAnswers(userAnswer, correctAnswer, isLastRound)) {
        break; 
    }
}

function generateOperator() {
    return operators[getRandomInt(0, operators.length - 1)];
}

function getCorrectAnswer (firstNumber, secondNumber, operator) {
    if (operator === "+") {
        return firstNumber + secondNumber;
    } else if (operator === "-") {
        return firstNumber - secondNumber;
    } else if (operator === "*") {
        return firstNumber * secondNumber;
    }
}

