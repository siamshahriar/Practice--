//MDN - Equality comparisons and sameness

// 1. STRICT EQUALITY (===)

// Basic type comparisons
const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true - same value, same type
console.log(obj === obj); // true - same object reference
console.log(str === str); // true - same value, same type

console.log(num === obj); // false - different types (number vs object)
console.log(num === str); // false - different types (number vs string)
console.log(obj === str); // false - different types (object vs string)
console.log(null === undefined); // false - different types
console.log(obj === null); // false
console.log(obj === undefined); // false

// Special numeric cases
console.log(+0 === -0); // true - zero is treated as equal
console.log(NaN === NaN); // false - NaN is never equal to itself
console.log(5 === 5); // true
console.log("hello" === "hello"); // true

// Array methods using strict equality
console.log([1, 2, NaN, 4].indexOf(NaN)); // -1 (can't find NaN)
console.log([1, 2, 3, 4].indexOf(3)); // 2

// Switch statement uses strict equality
const testValue = NaN;
switch (testValue) {
  case NaN:
    console.log("This won't execute"); // Never runs
    break;
  default:
    console.log("NaN doesn't match in switch"); // This runs
}

// 2. LOOSE EQUALITY (==)

// Type coercion examples
const num2 = 0;
const big = 0n;
const str2 = "0";
const objWrapper = new String("0");

console.log(num2 == str2); // true - string "0" converted to number 0
console.log(big == num2); // true - BigInt 0n equals number 0
console.log(str2 == big); // true - string converted, then compared
console.log(num2 == objWrapper); // true - object converted to primitive
console.log(big == objWrapper); // true
console.log(str2 == objWrapper); // true

// More coercion examples
console.log(1 == true); // true - true converts to 1
console.log(0 == false); // true - false converts to 0
console.log("" == false); // true - both convert to 0
console.log("1" == true); // true - both convert to 1
console.log(null == undefined); // true - special case
console.log("hello" == new String("hello")); // true - object to primitive

// Array coercion
console.log([1] == 1); // true - array converts to "1", then to 1
console.log([1, 2] == "1,2"); // true - array converts to "1,2"

// 3. OBJECT.IS() - SAME-VALUE EQUALITY

// Basic comparisons
console.log(Object.is(25, 25)); // true
console.log(Object.is("hello", "hello")); // true
console.log(Object.is(null, null)); // true
console.log(Object.is(undefined, undefined)); // true

// Special cases where Object.is() differs from ===
console.log(Object.is(NaN, NaN)); // true (different from ===)
console.log(Object.is(+0, -0)); // false (different from ===)
console.log(Object.is(0, -0)); // false

// Comparison with ===
console.log("NaN === NaN:", NaN === NaN); // false
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true
console.log("+0 === -0:", +0 === -0); // true
console.log("Object.is(+0, -0):", Object.is(+0, -0)); // false

// Practical use case: checking immutable property changes
Object.defineProperty(Number, "NEGATIVE_ZERO", {
  value: -0,
  writable: false,
  configurable: false,
  enumerable: false,
});

function attemptMutation(v) {
  try {
    Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
    console.log(`Successfully set to ${v}`);
  } catch (e) {
    console.log(`Cannot change: ${e.message}`);
  }
}

attemptMutation(-0); // No error - same value
attemptMutation(0); // Error - different value (Object.is treats +0 and -0 as different)

// 4. SAME-VALUE-ZERO EQUALITY

// Custom implementation
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}

console.log("sameValueZero(NaN, NaN):", sameValueZero(NaN, NaN)); // true
console.log("sameValueZero(+0, -0):", sameValueZero(+0, -0)); // true
console.log("sameValueZero(5, 5):", sameValueZero(5, 5)); // true
console.log("sameValueZero(5, '5'):", sameValueZero(5, "5")); // false

// Array.includes() uses same-value-zero
console.log([1, 2, NaN].includes(NaN)); // true (can find NaN!)
console.log([1, 2, 3].includes(3)); // true

// Map and Set use same-value-zero for key equality
const map = new Map();
map.set(NaN, "found");
console.log(map.get(NaN)); // "found"

const set = new Set([NaN, NaN, 1, 1, 2]);
console.log([...set]); // [NaN, 1, 2] - NaN is deduplicated

// INHERITANCE AND THE PROTOTYPE CHAIN

// Setting prototype using Object.setPrototypeOf()
const parent = {
  greet: function () {
    console.log("Hello!");
  },
};

const child = {
  name: "Siam",
};

// Set parent as the prototype of child
Object.setPrototypeOf(child, parent);

child.greet(); // Output: "Hello!"
// The child object can now access the greet method from its prototype (parent)

console.log(child.name); // Output: "Siam" (own property)
console.log(child.greet); // Output: [Function: greet] (inherited from parent)

// ============================================================

// CLOSURES

// 1. LEXICAL SCOPING - BASIC EXAMPLE

function init() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init(); // Output: Mozilla

// 2. SCOPING WITH LET AND CONST

// Example with var (function scope)
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x); // Works - x is accessible (function/global scoped)

// Example with const (block scope)
if (Math.random() > 0.5) {
  const y = 1;
} else {
  const y = 2;
}
// console.log(y); // ReferenceError: y is not defined

// 3. CLOSURE - BASIC EXAMPLE

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc(); // Output: Mozilla
// Even though makeFunc() finished executing, displayName() still has access to 'name'

// 4. MAKEADDER FUNCTION - FUNCTION FACTORY

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7 (5 + 2)
console.log(add10(2)); // 12 (10 + 2)
console.log(add5(10)); // 15 (5 + 10)
console.log(add10(20)); // 30 (10 + 20)

// 5. PRACTICAL CLOSURES - MULTIPLIER FACTORY

function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
const quadruple = makeMultiplier(4);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(quadruple(5)); // 20

// 6. EMULATING PRIVATE METHODS WITH CLOSURES - MODULE PATTERN

const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0
counter.increment();
counter.increment();
console.log(counter.value()); // 2
counter.decrement();
console.log(counter.value()); // 1

// privateCounter and changeBy are private - can't be accessed directly
// console.log(counter.privateCounter); // undefined
// counter.changeBy(10); // Error

// 7. MULTIPLE INDEPENDENT COUNTERS

function makeCounter() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    },
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0
counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2

console.log(counter2.value()); // 0 (independent from counter1)
counter2.increment();
console.log(counter2.value()); // 1

counter1.decrement();
console.log(counter1.value()); // 1
console.log(counter2.value()); // 1 (still independent)

// 8. CLOSURE SCOPE CHAIN

// global scope (Currying)
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20 (1 + 2 + 3 + 4 + 10)

// Same example with named functions
function sum2(a) {
  return function addB(b) {
    return function addC(c) {
      return function addD(d) {
        return a + b + c + d + e;
      };
    };
  };
}

const step1 = sum2(1);
const step2 = step1(2);
const step3 = step2(3);
const result = step3(4);
console.log(result); // 20

// 9. CLOSURES WITH BLOCK SCOPE

function outer() {
  let getY;
  {
    const y = 6;
    getY = () => y;
  }
  console.log(typeof y); // undefined (y is block-scoped)
  console.log(getY()); // 6 (closure captured y before block ended)
}

outer(); // Outputs: undefined, 6

// 10. CREATING CLOSURES IN LOOPS - THE PROBLEM (with var)

function problemExample() {
  var callbacks = [];

  for (var i = 0; i < 3; i++) {
    callbacks.push(function () {
      console.log(i);
    });
  }

  console.log("Problem with var:");
  callbacks[0](); // 3 (not 0!)
  callbacks[1](); // 3 (not 1!)
  callbacks[2](); // 3 (not 2!)
  // All closures share the same 'i' which is 3 after the loop
}

problemExample();

// 11. SOLUTION 1 - USING IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)

function solution1() {
  var callbacks = [];

  for (var i = 0; i < 3; i++) {
    (function (index) {
      callbacks.push(function () {
        console.log(index);
      });
    })(i);
  }

  console.log("Solution 1 - IIFE:");
  callbacks[0](); // 0
  callbacks[1](); // 1
  callbacks[2](); // 2
}

solution1();

// 12. SOLUTION 2 - USING LET (BLOCK SCOPE)

function solution2() {
  var callbacks = [];

  for (let i = 0; i < 3; i++) {
    // Using 'let' instead of 'var'
    callbacks.push(function () {
      console.log(i);
    });
  }

  console.log("Solution 2 - let:");
  callbacks[0](); // 0
  callbacks[1](); // 1
  callbacks[2](); // 2
}

solution2();

// 13. SOLUTION 3 - USING HELPER FUNCTION

function solution3() {
  var callbacks = [];

  function makeCallback(value) {
    return function () {
      console.log(value);
    };
  }

  for (var i = 0; i < 3; i++) {
    callbacks.push(makeCallback(i));
  }

  console.log("Solution 3 - Helper function:");
  callbacks[0](); // 0
  callbacks[1](); // 1
  callbacks[2](); // 2
}

solution3();

// 14. PRACTICAL EXAMPLE - CREATING GREETING FUNCTIONS

function createGreeter(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");
const sayGoodMorning = createGreeter("Good morning");

sayHello("Alice"); // Hello, Alice!
sayHi("Bob"); // Hi, Bob!
sayGoodMorning("Charlie"); // Good morning, Charlie!

// 15. PRACTICAL EXAMPLE - CREATING FORMATTERS

function createFormatter(prefix, suffix) {
  return function (text) {
    return `${prefix}${text}${suffix}`;
  };
}

const addQuotes = createFormatter('"', '"');
const addParentheses = createFormatter("(", ")");
const addBrackets = createFormatter("[", "]");

console.log(addQuotes("Hello")); // "Hello"
console.log(addParentheses("Hello")); // (Hello)
console.log(addBrackets("Hello")); // [Hello]

// 16. PRACTICAL EXAMPLE - PRIVATE VARIABLES

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${balance}`);
      }
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn: $${amount}. New balance: $${balance}`);
      } else {
        console.log("Insufficient funds");
      }
    },
    getBalance() {
      return balance;
    },
  };
}

const myAccount = createBankAccount(100);
console.log(myAccount.getBalance()); // 100
myAccount.deposit(50); // Deposited: $50. New balance: $150
myAccount.withdraw(30); // Withdrawn: $30. New balance: $120
console.log(myAccount.getBalance()); // 120
// console.log(myAccount.balance); // undefined (balance is private)


