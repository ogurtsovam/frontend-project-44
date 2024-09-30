#!/usr/bin/env node
import { greetUser, userName } from '../src/cli.js';
import readlineSync from 'readline-sync';

greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 1; i <= 3 ; i += 1){
    let currentRandomNumber = getRandomInt();
    console.log('Question: ' + currentRandomNumber);
    const currentAnswer = readlineSync.question('Your answer: ');
    let currentNumberCheck = isEven(currentRandomNumber);

    if (currentAnswer !== currentNumberCheck){
        console.log("Let's try again, " + userName + "!");
        break;
    }else if (i === 3 || currentAnswer === currentNumberCheck) {
        console.log("Congratulations, " + userName + "!");
    }else if (i < 3 || currentAnswer === currentNumberCheck) {
        console.log("Correct!");
    }
};

function isEven (number) {
    if (number % 2 === 0){
        return "yes";
    } else {
        return "no";
    }
};

function getRandomInt () {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
};