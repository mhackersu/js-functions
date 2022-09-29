function calculate(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum = sum + number;
  }
  console.log(sum);
  return sum;
}
calculate([1, 2, 4]); // => 7