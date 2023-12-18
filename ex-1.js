const romanInteger = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
function romanToInt(string) {
  let total = 0;
  let newArray = [];
  for (let i of string) {
    newArray.push(i);
  }

  //convert roman to interget
  for (let [i, v] of newArray.entries()) {
    for (let j in romanInteger) {
      if (v == j) {
        newArray[i] = romanInteger[j];
      }
    }
  }
  //sum of integer
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] < newArray[i + 1]) {
      total += newArray[i + 1] - newArray[i];
      i++;
    } else {
      total += newArray[i];
    }
  }

  return total;
}

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994
console.log(result1);
console.log(result2);
console.log(result3);
