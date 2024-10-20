#!/usr/bin/env node
import runGame from '../src/games/runGame.js';
import {
    getUserAnswerToInt,
} from '../src/index.js';
import {
    setupQuestion,
} from '../src/games/calc.js';

runGame('What is the result of the expression?', setupQuestion, getUserAnswerToInt);
