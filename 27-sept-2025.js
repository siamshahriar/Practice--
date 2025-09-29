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


  //using mock API

const userId = 1;

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(user => {
    console.log(`User found: ${user.name} (Email: ${user.email})`); // User found: Leanne Graham (Email: leanne@example.com)
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(posts => {
    console.log(`Successfully fetched ${posts.length} posts.`); // Successfully fetched 10 posts.
    console.log('Title of the first post:', posts[0].title); // Title of the first post: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
  })
  .catch(error => {
    console.error('An error occurred in the promise chain:', error);
  });


// unhandledrejection

window.addEventListener('unhandledrejection', function(event) {
  console.error('Unhandled promise rejection:', event.reason);
});


function riskyOperation() {
  return new Promise((resolve, reject) => {
    console.log("Starting a risky operation...");
    setTimeout(() => {
      reject(new Error("Something went wrong!"));
    }, 1000);
  });
}
riskyOperation();

// Output: Unhandled promise rejection: Error: Something went wrong!

// Promise.allSettled()

const successfulPromise = new Promise(resolve => setTimeout(resolve, 500, 'Success!'));
const failingPromise = new Promise((resolve, reject) => setTimeout(reject, 800, 'Failure!'));
const anotherSuccess = Promise.resolve('Another success!');

Promise.allSettled([successfulPromise, failingPromise, anotherSuccess])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Promise ${index + 1} fulfilled with value: "${result.value}"`); // 
      } else {
        console.log(`Promise ${index + 1} rejected with reason: "${result.reason}"`);
      }
    });
  });


// Promise.any()

const slowSuccess = new Promise(resolve => setTimeout(resolve, 1000, 'Slow success'));
const quickSuccess = new Promise(resolve => setTimeout(resolve, 300, 'Quick success'));
const immediateFailure = Promise.reject('Immediate failure');

Promise.any([slowSuccess, quickSuccess, immediateFailure])
  .then(firstResult => {
    console.log("The first successful result is:", `"${firstResult}"`);
  })
  .catch(error => {
    console.error("This part should not run for the success case:", error);
  });


const failure1 = new Promise((resolve, reject) => setTimeout(reject, 100, 'First failure'));
const failure2 = new Promise((resolve, reject) => setTimeout(reject, 400, 'Second failure'));

Promise.any([failure1, failure2])
  .then(result => {
    console.log("This part should not run for the failure case:", result);
  })
  .catch(error => {
    console.error("Error Type:", error.name);
    console.error("Aggregate Errors:", error.errors);
  });

  // using async and await

  async function fetchUserAndPosts(userId) {
  try {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!userResponse.ok) {
      throw new Error(`HTTP error! Status: ${userResponse.status}`);
    }

    const user = await userResponse.json();
    console.log(`User found: ${user.name} (Email: ${user.email})`);

    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);

    if (!postsResponse.ok) {
      throw new Error(`HTTP error! Status: ${postsResponse.status}`);
    }

    const posts = await postsResponse.json();
    console.log(`Successfully fetched ${posts.length} posts.`);
    console.log('Title of the first post:', posts[0].title);

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

fetchUserAndPosts(1);

// async function-


const originalPromise = new Promise(resolve => resolve("Value from the original Promise"));

function basicReturn() {
  return Promise.resolve(originalPromise); //it wont create any new Promise
}

// async function always creates a new Promise and wraps the inner value with that new Promise.
async function asyncReturn() {
  return originalPromise;
}

const basicResult = basicReturn();
const asyncResult = asyncReturn();

console.log("Are originalPromise and basicReturn the same object?", originalPromise === basicResult); // Output: true
console.log("Are originalPromise and asyncReturn the same object?", originalPromise === asyncResult); // Output: false


//////

//step by step process with async await

const delay = (ms, message) => {
  return new Promise(resolve => setTimeout(() => resolve(message), ms));
};

async function stepByStepProcess() {
  console.log("Process started.");

  const step1 = await delay(1500, "Step 1 completed");
  console.log(step1);

  const step2 = await delay(1000, "Step 2 completed");
  console.log(step2);

  console.log("Process finished successfully!");
}

stepByStepProcess();

// output -->
// Process started.
// Step 1 completed
// Step 2 completed
// Process finished successfully!



const slowSuccessTask = () => {
  console.log("slow task 2 seconds started...");
  return new Promise(resolve => setTimeout(() => resolve("Slow task succeeded!"), 2000));
};

const fastFailure = () => {
  console.log("Fast task 0.5 seconds started...");
  return new Promise((_, reject) => setTimeout(() => reject(new Error("I failed quickly!")), 500));
};

// --- Incorrect approach ---
async function problematicConcurrentAwait() {
  const slowPromise = slowSuccessTask();
  const fastPromise = fastFailure();

  try {
    const result1 = await slowPromise;
    console.log(result1);
    
    const result2 = await fastPromise;
    console.log(result2);
  } catch (error) {
    console.error("Error caught:", error.message);
  }
}

problematicConcurrentAwait().catch(err => {}); // Will show unhandled rejection error in browser

// --- Correct approach ---
async function correctConcurrentAwait() {
  const slowPromise = slowSuccessTask();
  const fastPromise = fastFailure();

  try {
    await Promise.all([slowPromise, fastPromise]);
  } catch (error) {
    console.error("Error caught:", error.message);
  }
}

setTimeout(correctConcurrentAwait, 3000);


 // ----------------
function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("== sequentialStart starts ==");

  // 1. Start a timer, log after it's done
  const slow = resolveAfter2Seconds();
  console.log(await slow);

  // 2. Start the next timer after waiting for the previous one
  const fast = resolveAfter1Second();
  console.log(await fast);

  console.log("== sequentialStart done ==");
}

async function sequentialWait() {
  console.log("== sequentialWait starts ==");

  // 1. Start two timers without waiting for each other
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  // 2. Wait for the slow timer to complete, and then log the result
  console.log(await slow);
  // 3. Wait for the fast timer to complete, and then log the result
  console.log(await fast);

  console.log("== sequentialWait done ==");
}

async function concurrent1() {
  console.log("== concurrent1 starts ==");

  // 1. Start two timers concurrently and wait for both to complete
  const results = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second(),
  ]);
  // 2. Log the results together
  console.log(results[0]);
  console.log(results[1]);

  console.log("== concurrent1 done ==");
}

async function concurrent2() {
  console.log("== concurrent2 starts ==");

  // 1. Start two timers concurrently, log immediately after each one is done
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
  console.log("== concurrent2 done ==");
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrent1, 7000); // same as sequentialWait

// wait again
setTimeout(concurrent2, 10000); // after 1 second, logs "fast", then after 1 more second, "slow"


 // -------------



 