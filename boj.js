// add, commit, push 해주기!!!
// dev/stdin
let fs = require("fs");
let input = fs.readFileSync("./solve.txt").toString().trim().split("\n");

let T = Number(input.shift());
let arr = input
  .shift()
  .split(" ")
  .map((v) => +v);

// 배열에 들어있는 값들이 가능한 모든 경우의 수를 구하고(720가지)
// 각 값들의 차의 절댓값의 최대합을 구한다라...
let sum = 1;
for (let i = 1; i <= T; i++) {
  sum = sum * i;
}

console.log(sum);
