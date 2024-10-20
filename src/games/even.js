import {
    getRandomNumber,
} from '../index.js';

function getCorrectEvenAnswer(number) {
    if (number % 2 === 0) {
        return 'yes';
    }
    return 'no';
}

function setupQuestion() {
    const currentRandomNumber = getRandomNumber(0, 100);
    console.log(`Question: ${currentRandomNumber}`);
    return getCorrectEvenAnswer(currentRandomNumber);
}

export {
    getCorrectEvenAnswer, setupQuestion,
};
