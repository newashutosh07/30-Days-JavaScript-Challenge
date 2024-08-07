/*
const promiseOne = new Promise((resolve, reject) => {
  // Do an async task
  //   DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed ");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 2 is complete");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});


// Third Promise
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Ashutosh", email: "ashu@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});


// Fourth Promise

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "ashu", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });



// Fifth Promise
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();



async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();



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

  */

// Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
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
      resolve("Data 2 fetched");
    }, 2000);
  });
}

function fetchData4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data 2 fetched");
    }, 2500);
  });
}

fetchData1
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
    return fetchData4();
  })
  .then((message4) => {
    console.log(message4);
  })
  .catch((error) => {
    console.log(error);
  });
