import readlineSync from 'readline-sync';

function proccesAnswers(userName, userAnswer, correctAnswer, isLastRound) {
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  } else if (!isLastRound) {
    console.log('Correct!');
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
  return userAnswer === correctAnswer;
}

function getRandomInt(from = 1, to = 100) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

function getUserAnswer() {
  return(readlineSync.question('Your answer: '));
}

function getUserAnswerToInt() {
  return parseInt(readlineSync.question('Your answer: '), 10);
}

export { proccesAnswers, getRandomInt, getUserAnswer, getUserAnswerToInt };
