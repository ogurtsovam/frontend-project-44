#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import readlineSync from 'readline-sync';
import { proccesAnswers, getRandomInt } from '../src/index.js';
import { getProgression, getProgressionQuestion, correctAnswer } from '../games/progression.js';


greetUser();
console.log('What number is missing in the progression?');

const rounds = 3;

for (let i = 1; i <= rounds; i += 1) {
    let firstNumber = getRandomInt(1, 10);
    let difference = getRandomInt(2, 9);
    let progression = getProgression(firstNumber, difference);
    let progressionQuestion = getProgressionQuestion(progression);
    console.log(`Question: ${progressionQuestion}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '));

    let isLastRound = i === rounds;
    if (!proccesAnswers(userAnswer, correctAnswer, isLastRound)) {
        break; 
    }
}
