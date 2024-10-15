import greetUser from '../src/cli.js';

function runGame(description, questionSetuper, userAnswerGetter,  rounds = 3) {
  const userName = greetUser();
  console.log(description);
  for (let i = 1; i <= rounds; i += 1) {
    const correctAnswer = questionSetuper();
    const userAnswer = userAnswerGetter();
    const isLastRound = i === rounds;
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    } else if (!isLastRound) {
      console.log('Correct!');
    } else {
      console.log(`Congratulations, ${userName}!`);
    }
    if (userAnswer !== correctAnswer) {
      break;
    }
  }
}

export default runGame;
