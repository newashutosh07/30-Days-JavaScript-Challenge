/*
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(20);
  }, 2000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(30);
  }, 3000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(40);
  }, 4000);
});

let total = 0;
Promise.all([p1, p2, p3])
  .then((result) => {
    for (let i in result) {
      total += result[i];
    }
    console.log(`Total is ${total}`);

    console.log(`Result: ${result}`);
  })
  .catch((err) => {
    console.log("Error", err);
  });

*/
