// ------------Task-1-----------------
function multi(num1, num2, num3, num4) {
  const result = num1 * num2 * num3 * num4;
  return result;
}

// const result =multi(6,7,8,9,3);
// console.log("multiply Number:",result);

// ------------Task-2-----------------
function numberOfElement(numbers) {
  
    if (number % 2 === 0) {
      const result = number * 2;
      return result;
    }
else if (numbers % 2===1){
  const result2 =number /2;
  return result2;
}
    
  }

// const number = 35;
// const result = numberOfElement(number);
// console.log("Multiply odd Of number:", result);

// ------------Task-3-----------------
function make_avg(numbers){
  let avg =0;
  for (const number of numbers){
    avg =avg +number/7;
    console.log(number)
  }
  return avg;


}
const num =[66,77,88,5,4,6,4]
const avgMark =make_avg(num);
console.log("Average Mark:",avgMark.toFixed(2))