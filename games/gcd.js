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

export default getGreatestCommonDivisor;
