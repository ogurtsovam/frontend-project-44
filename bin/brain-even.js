#!/usr/bin/env node
import runGame from '../src/games/runGame.js';
import {
  getUserAnswer,
} from '../src/index.js';
import {
  setupQuestion,
} from '../src/games/even.js';

runGame('Answer "yes" if the number is even, otherwise answer "no".', setupQuestion, getUserAnswer);
