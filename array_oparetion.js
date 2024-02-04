function sumOfNumber(numbers) {
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum =sum+number;
   
  }
  return sum;
}
const numbs = [57, 77, 88, 44, 22, 44,88,77,44,33,33];
const sum = sumOfNumber(numbs);
console.log("Sumition Of Number:",sum)
