#!/usr/bin/env node
import runGame from '../src/games/runGame.js';
import {
  getUserAnswerToInt,
} from '../src/index.js';
import {
  setupQuestion,
} from '../src/games/gcd.js';

runGame('Find the greatest common divisor of given numbers.', setupQuestion, getUserAnswerToInt);
