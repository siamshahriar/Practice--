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


