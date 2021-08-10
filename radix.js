function getDigit(number, i) {
  return Math.floor(Math.abs(number) / Math.pow(10, i)) % 10;
}

function digitCount(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function mostDigits(numbers) {
  let maxDigits = 0;
  for (let i = 0; i < numbers.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(numbers[i]));
  }
  return maxDigits;
}

function radixSort(numbers) {
  let maxDigitCount = mostDigits(numbers);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < numbers.length; i++) {
      let number = numbers[i];
      let digit = getDigit(number, k);
      digitBuckets[digit].push(number);
    }
    numbers = [].concat(...digitBuckets);
  }
  return numbers;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };
