// MDN
// Promise

// 1. Basic Promise Example
const basicPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success! The basic promise is resolved.");
  }, 1500);
});

basicPromise.then((message) => {
  console.log(message); // Success! The basic promise is resolved.
});

// 2. Promise.all Example
const promise1 = new Promise(resolve => setTimeout(() => resolve("Result 1"), 1500));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Result 2"), 1000));
const promise3 = new Promise(resolve => setTimeout(() => resolve("Result 3"), 2000));

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [ 'Result 1', 'Result 2', 'Result 3' ]
  })
  .catch((error) => {
    console.error("One of the promises failed:", error);
  });

// 3. Promise.race Example
const racePromiseA = new Promise(resolve => setTimeout(() => resolve("A wins"), 1000));
const racePromiseB = new Promise((resolve, reject) => setTimeout(() => reject("B fails first"), 500));
const racePromiseC = new Promise(resolve => setTimeout(() => resolve("C wins"), 1500));

Promise.race([racePromiseA, racePromiseB, racePromiseC])
  .then((winner) => {
    console.log(winner);
  })
  .catch((error) => {
    console.error(error); // B fails first
  });


// 4. Promise Chaining Example

const startChain = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

startChain
  .then((value) => {
    console.log("First .then:", value); // 10
    return value * 2;
  })
  .then((value) => {
    console.log("Second .then:", value); // 20
    return new Promise(resolve => setTimeout(() => resolve(value + 5), 1000));
  })
  .then((finalValue) => {
    console.log("Final .then:", finalValue); // 25
  })
  .catch((error) => {
    // If any promise in the chain fails, this single .catch will handle it.
    console.error("Error in chain:", error);
  });

  // if there is an error in any .then block, the .catch block will handle it
  
const startChainWithError = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

startChainWithError
  .then((value) => {
    console.log("First .then:", value); // 10
    return value * 2;
  })
  .then((value) => {
    console.log("Second .then:", value); // 20

    throw new Error("Throwing an error, now the next .then will be skipped");
  })
  .then((finalValue) => {
    console.log("this will not be printed for the early .then block error", finalValue);
  })
  .catch((error) => {
    console.error("Caught an error in the chain:", error.message); // Caught an error in the chain: Throwing an error, now the next .then will be skipped
  });


// 5. Sequential API Calls Example

//fetch an user by userId
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { id: userId, name: "Siam", email: "siam@example.com" };
      console.log("User data fetched successfully.");
      resolve(userData); 
    }, 1000);
  });
}

//fetch posts by userId
function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["Hello World!", "Learning Promises in JavaScript"];
      console.log("Posts fetched successfully.");
      resolve(posts);
    }, 1500);
  });
}

fetchUser(1)
  .then((user) => {
    console.log(`Fetched user: ${user.name}`); // Fetched user: Siam

    return fetchPosts(user.id); //fetchPosts(1)
  })
  .then((posts) => {

    console.log("Fetched posts:", posts); // Fetched posts: [ 'Hello World!', 'Learning Promises in JavaScript' ]
  })
  .catch((error) => {
    console.error("An error occurred in the chain:", error);
  });


  