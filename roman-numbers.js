const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getInput() {
  return new Promise((resolve) => {
    rl.question(
      "Please input a number (1-3000) or a roman number: ",
      (answer) => {
        const input = answer.trim();
        resolve(input);
      }
    );
  });
}
function numToRomanNum(num) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  for (const item of romanNumerals) {
    while (num >= item.value) {
      result += item.numeral;
      num -= item.value;
    }
  }
  return result;
}
function romanNumToNum(roman) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = 0;
  for (const item of romanNumerals) {
    while (roman.startsWith(item.numeral)) {
      result += item.value;
      roman = roman.slice(item.numeral.length);
    }
  }
  return result;
}

(async function main() {
  try {
    let input;
    do {
      input = await getInput();
      if (
        !(Number(input) >= 1 && Number(input) <= 3000) &&
        !/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(input)
      ) {
        console.log("请输入 1 到 3000 之间的整数或有效的罗马数字。");
      }
    } while (
      !(Number(input) >= 1 && Number(input) <= 3000) &&
      !/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(input)
    );

    if (
      /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(input)
    ) {
      let number = romanNumToNum(input);
      console.log("您输入的罗马数字是：", input);
      console.log("对应的数字是：", number);
      rl.close();
    } else {
      let romanNumber = numToRomanNum(Number(input));
      console.log("您输入的数字是：", Number(input));
      console.log("对应的罗马数字是：", romanNumber);
      rl.close();
    }
  } catch (err) {
    console.error("错误：", err);
  }
})();
