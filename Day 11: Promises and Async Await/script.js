// https://jsonplaceholder.typicode.com/users

/*
// Task 1

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved!");
  }, 2000);
});

promise1.then((result) => {
  console.log(result);
});

// Task 2

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error: Something went wrong");
  }, 2000);
});

promise2.catch((error) => {
  console.log(error);
});


// Task 3
function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data 1 fetched");
    }, 1000);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data 2 fetched");
    }, 1500);
  });
}

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data 3 fetched");
    }, 2000);
  });
}

fetchData1()
  .then((message1) => {
    console.log(message1);
    return fetchData2();
  })
  .then((message2) => {
    console.log(message2);
    return fetchData3();
  })
  .then((message3) => {
    console.log(message3);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });



// Task 4
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved!");
  }, 2000);
});

async function getData() {
  let data = await promise1;
  console.log(data);
}

getData();



// Task 5
const promise2 = new Promise((resolve, reject) => {
  let error = false;
  setTimeout(() => {
    if (!error) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected!");
    }
  }, 2000);
});

async function getPromise() {
  try {
    let message = await promise2;
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

getPromise();



// Task 6
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

  

// Task 7
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

fetchData();



// Task 8 // Promise.all()

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 500);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 1500);
});

let total = 0;
Promise.all([promise1, promise2, promise3])
  .then((value) => {
    for (let i = 0; i < value.length; i++) {
      total += value[i];
    }
    console.log(`Total is: ${total}`);
  })
  .catch((error) => {
    console.log("Error", error);
  });

*/

// Task 9 // Promise.race()
const resolvedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved!");
  }, 1500);
});

const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise Rejected!");
  }, 1000);
});

// Use Promise.race to log the first promise that completes (resolve or reject)
Promise.race([resolvedPromise, rejectedPromise])
  .then((value) => {
    console.log(value); // Logs the resolved value if the first promise resolves
  })
  .catch((error) => {
    console.log(error); // Logs the error if the first promise rejects
  });
