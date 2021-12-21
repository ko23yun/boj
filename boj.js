// add, commit, push 해주기!!! /dev/stdin
let fs = require("fs");
let input = fs
  .readFileSync("./solve.txt")
  .toString()
  .split("\n")
  .map((v) => v % 42);

let arr = new Array(42).fill(0);
let answer = 0;

for (let i = 0; i < input.length; i++) {
  if (arr[input[i]] === 0) {
    arr[input[i]] = 1;
    if (arr[input[i]] == 1) {
      answer += 1;
    }
  }
}

console.log(answer);
