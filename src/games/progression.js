import {
    getRandomNumber,
} from '../index.js';

function getProgression(firstNumber, step) {
    const progression = [];
    let currentNumber = firstNumber;
    for (let i = 0; i <= getRandomNumber(5, 11); i += 1) {
        progression.push(currentNumber);
        currentNumber += step;
    }
    return progression;
}

function getPosition(progression) {
    return getRandomNumber(0, progression.length - 1);
}

function getProgressionQuestion(progression, position) {
    return progression.map((num) => (num === progression[position] ? '..' : num));
}

function setupQuestion() {
    const number1 = getRandomNumber(1, 10);
    const step = getRandomNumber(2, 9);
    const progression = getProgression(number1, step);
    const position = getPosition(progression);
    const progressionQuestion = getProgressionQuestion(progression, position).join(' ');
    console.log(`Question: ${progressionQuestion}`);
    return progression[position];
}

export {
    getProgression, getProgressionQuestion, getPosition, setupQuestion,
};
