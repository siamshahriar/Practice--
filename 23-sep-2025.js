// ==== Map examples ====
const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");

// Basic operations
console.log("sayings.size:", sayings.size);               // 3
console.log("sayings.get('dog'):", sayings.get("dog"));   // "woof"
console.log("sayings.get('fox'):", sayings.get("fox"));   // undefined
console.log("sayings.has('cat'):", sayings.has("cat"));   // true
sayings.delete("dog");
console.log("sayings.has('dog') after delete:", sayings.has("dog")); // false

// Iterating
for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
console.log("sayings.size after clear:", sayings.size);   // 0

// Using non-string keys
const map2 = new Map();
map2.set(1, "number one");
map2.set(true, "yes");
map2.set({a:1}, "object");
console.log("map2 keys:", Array.from(map2.keys()));       // [1, true, {a:1}]
console.log("map2.get(1):", map2.get(1));                 // "number one"

// Iterating keys and values separately
const m = new Map([["x", 1], ["y", 2], ["z", 3]]);
console.log("Map keys:", Array.from(m.keys()));           // ['x','y','z']
console.log("Map values:", Array.from(m.values()));       // [1,2,3]
console.log("Map entries:", Array.from(m.entries()));     // [['x',1],['y',2],['z',3]]

// ==== Set examples ====
const mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");
mySet.add(1); // duplicate, won't be added

console.log("mySet.has(1):", mySet.has(1));               // true
console.log("mySet.size:", mySet.size);                   // 3
mySet.delete("foo");
console.log("mySet.size after delete:", mySet.size);      // 2

for (const item of mySet) {
  console.log("Set item:", item);
}
// 1
// "some text"

// Set from Array, unique values only
const array = [1,2,2,3,3,3];
const setFromArray = new Set(array);
console.log("Unique from array:", Array.from(setFromArray)); // [1,2,3]

// Array from Set
const arrFromSet = Array.from(mySet);
console.log("Array from Set:", arrFromSet);                   // [1,"some text"]

// Spread syntax
const set2 = new Set([1,2,3,4]);
console.log("Spread:", [...set2]);                            // [1,2,3,4]


