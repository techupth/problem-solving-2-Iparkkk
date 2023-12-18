function fizzBuzz(number) {
  let newArray = [];
  for (let i = 0; i < number; i++) {
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
      newArray.push("FizzBuzz");
    } else if ((i + 1) % 3 == 0) {
      newArray.push("Fizz");
    } else if ((i + 1) % 5 == 0) {
      newArray.push("Buzz");
    } else {
      newArray.push(i + 1);
    }
  }
  return newArray;
}

const result1 = fizzBuzz(3);
const result2 = fizzBuzz(5);
const result3 = fizzBuzz(15);

console.log(result1); // ["1","2","Fizz"]
console.log(result2); // ["1","2","Fizz","4","Buzz"]
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
