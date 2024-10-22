export default function Calculator(splitedNum) {
    const sum = splitedNum.reduce((a, b) => a + b, 0);
    return sum;
}
