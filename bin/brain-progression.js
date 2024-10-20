#!/usr/bin/env node
import runGame from '../src/games/runGame.js';
import {
    getUserAnswerToInt,
} from '../src/index.js';
import {
    setupQuestion,
} from '../src/games/progression.js';

runGame('What number is missing in the progression?', setupQuestion, getUserAnswerToInt);
