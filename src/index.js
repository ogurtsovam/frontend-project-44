import { userName } from '../src/cli.js';

function proccesAnswers (userAnswer, correctAnswer, isLastRound) {
    if (userAnswer !== correctAnswer){
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
    } else if (!isLastRound) {
        console.log(`Correct!`);
    } else {
        console.log(`Congratulations, ${userName}!`);
    }
    return userAnswer === correctAnswer;
}
function getRandomInt (from = 1, to = 100) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}
export { proccesAnswers, getRandomInt };
