#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';
import { proccesAnswers, getRandomInt } from '../src/index.js';

greetUser();
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

const rounds = 3;
for (let i = 1; i <= rounds; i += 1) {
    let currentRandomNumber = getRandomInt();
    console.log(`Question: ${currentRandomNumber}`);
    const userAnswer = readlineSync.question(`Your answer: `);
    let correctAnswer = getCorrectAnswer(currentRandomNumber);
    
    let isLastRound = i === rounds;
    if (!proccesAnswers(userAnswer, correctAnswer, isLastRound)) {
        break; 
    }
}


function getCorrectAnswer (number) {
    if (number % 2 === 0){
        return "yes";
    } else {
        return "no";
    }
};
