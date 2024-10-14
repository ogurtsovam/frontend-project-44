function getGreatestCommonDivisor(firstNumber, secondNumber) {
    while (secondNumber !== 0) {
        let temp = secondNumber;
        secondNumber = firstNumber % secondNumber;
        firstNumber = temp;
    }
    return firstNumber;
}
export { getGreatestCommonDivisor };