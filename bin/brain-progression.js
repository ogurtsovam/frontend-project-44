#!/usr/bin/env node
import {
  getRandomInt, getUserAnswerToInt,
} from '../src/index.js';
import {
  getProgression, getProgressionQuestion, getPosition,
} from '../games/progression.js';
import runGame from '../games/abstract_game.js';

function setupQuestion() {
  const firstNumber = getRandomInt(1, 10);
  const step = getRandomInt(2, 9);
  const progression = getProgression(firstNumber, step);
  const position = getPosition(progression);
  const progressionQuestion = getProgressionQuestion(progression, position).join(' ');
  console.log(`Question: ${progressionQuestion}`);
  return progression[position];
}

runGame('What number is missing in the progression?', setupQuestion, getUserAnswerToInt);
