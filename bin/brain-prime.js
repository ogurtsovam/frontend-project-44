#!/usr/bin/env node
import runGame from '../src/games/runGame.js';
import {
  getUserAnswer,
} from '../src/index.js';
import {
  setupQuestion,
} from '../src/games/prime.js';

runGame('Answer "yes" if given number is prime. Otherwise answer "no".', setupQuestion, getUserAnswer);
