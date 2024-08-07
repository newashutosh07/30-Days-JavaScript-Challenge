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

// Promise.race()
// Function that returns a resolved promise
const resolvePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved");
    }, 300);
  });
};

// Function that returns a rejected promise
const rejectPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected!");
    }, 500);
  });
};

// Use Promise.race() to see which promise settles first

Promise.race([resolvePromise(), rejectPromise()])
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
