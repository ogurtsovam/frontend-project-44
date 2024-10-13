#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';
import { proccesAnswers, getRandomInt } from '../src/index.js';

greetUser();
console.log('What number is missing in the progression?');

const rounds = 3;
let correctAnswer = "";

for (let i = 1; i <= rounds; i += 1) {
    let firstNumber = getRandomInt(1, 10);
    let difference = getRandomInt(2, 9);
    let progression = getProgression(firstNumber, difference);
    let progressionQuestion = getQuestion(progression);
    console.log(`Question: ${progressionQuestion}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '));
    
    let isLastRound = i === rounds;
    if (!proccesAnswers(userAnswer, correctAnswer, isLastRound)) {
        break; 
    }
}

function getProgression (firstNumber, difference) {
    let progression = [];
    let sum = firstNumber;
    for (let i = 0; i <= getRandomInt(5, 11); i += 1){
        progression.push(sum);
        sum = sum + difference;
    }
    return progression;
}

function getQuestion (progression) {
    let position = getRandomInt(0, progression.length - 1);
    correctAnswer = progression[position];
    return progression.map(num => (num === progression[position] ? '..' : num));
}