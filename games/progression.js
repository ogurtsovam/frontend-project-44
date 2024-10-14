import { getRandomInt } from '../src/index.js';

function getProgression (firstNumber, difference) {
    let progression = [];
    let sum = firstNumber;
    for (let i = 0; i <= getRandomInt(5, 11); i += 1){
        progression.push(sum);
        sum = sum + difference;
    }
    return progression;
}
let correctAnswer = "";
function getProgressionQuestion (progression) {
    let position = getRandomInt(0, progression.length - 1);
    correctAnswer = progression[position];
    return progression.map(num => (num === progression[position] ? '..' : num));
}
export { getProgression, getProgressionQuestion, correctAnswer };