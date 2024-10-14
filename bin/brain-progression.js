#!/usr/bin/env node
import greetUser from '../src/cli.js';
import { proccesAnswers, getRandomInt, getUserAnswerToInt } from '../src/index.js';
import { getProgression, getProgressionQuestion, getPosition } from '../games/progression.js';

const userName = greetUser();
console.log('What number is missing in the progression?');
const rounds = 3;
for (let i = 1; i <= rounds; i += 1) {
  const firstNumber = getRandomInt(1, 10);
  const step = getRandomInt(2, 9);
  const progression = getProgression(firstNumber, step);
  const position = getPosition(progression);
  const progressionQuestion = getProgressionQuestion(progression, position).join(' ');
  console.log(`Question: ${progressionQuestion}`);
  const userAnswer = getUserAnswerToInt();
  const correctAnswer = progression[position];
  const isLastRound = i === rounds;
  if (!proccesAnswers(userName, userAnswer, correctAnswer, isLastRound)) {
    break;
  }
}
