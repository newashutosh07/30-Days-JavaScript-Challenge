/*
//Task 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//Task 2
for (let i = 1; i <= 10; i++) {
  console.log(`5 X ${i} = ${5 * i}`);
}
//Task 3
let n = 10;
let sum = 0;
while (n != 0) {
  sum = sum + n;
  n--;
}

console.log(sum);

// Task 4
let n = 10;
while (n != 0) {
  console.log(n);
  n--;
}
// Task 4
let n = 1;
do {
  console.log(n);
  n++;
} while (n <= 5);

//Task 5
let n = 5;
let fact = 1;
do {
  fact = fact * n;
  n--;
} while (n != 0);

console.log(fact);
//Task 6
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("*");
  }
  console.log("\n");
}
*/

//Task 7
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

//Task 8
for (let i = 1; i <= 10; i++) {
  if (i == 8) {
    break;
  }
  console.log(i);
}
