import {
    getRandomNumber,
} from '../index.js';

function getGreatestCommonDivisor(firstNumber, secondNumber) {
    let a = firstNumber;
    let b = secondNumber;

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

function setupQuestion() {
    const number1 = getRandomNumber(0, 100);
    const number2 = getRandomNumber(0, 100);
    console.log(`Question: ${number1} ${number2}`);
    return getGreatestCommonDivisor(number1, number2);
}

export {
    getGreatestCommonDivisor, setupQuestion,
};
