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


const numbersArray = [10, 20, 30, 20, 10, 40];
console.log("Array (with duplicates):", numbersArray);
// Expected Output: Array (with duplicates): [ 10, 20, 30, 20, 10, 40 ]

const numbersSet = new Set(numbersArray);
console.log("Set (without duplicates):", numbersSet);
// Expected Output: Set (without duplicates): Set(4) { 10, 20, 30, 40 }

const fruitsArray = ['Apple', 'Orange', 'Banana', 'Mango'];
console.log("Array before delete:", fruitsArray);
// Expected Output: Array before delete: [ 'Apple', 'Orange', 'Banana', 'Mango' ]

const indexToDelete = fruitsArray.indexOf('Banana');
if (indexToDelete > -1) {
    fruitsArray.splice(indexToDelete, 1);
}
console.log("Array after delete:", fruitsArray);
// Expected Output: Array after delete: [ 'Apple', 'Orange', 'Mango' ]

const fruitsSet = new Set(['Apple', 'Orange', 'Banana', 'Mango']);
console.log("Set before delete:", fruitsSet);
// Expected Output: Set before delete: Set(4) { 'Apple', 'Orange', 'Banana', 'Mango' }

fruitsSet.delete('Banana');
console.log("Set after delete:", fruitsSet);
// Expected Output: Set after delete: Set(3) { 'Apple', 'Orange', 'Mango' }

const mixedArray = [1, 2, NaN, 4];
console.log("Finding NaN in Array with indexOf:", mixedArray.indexOf(NaN));
// Expected Output: Finding NaN in Array with indexOf: -1
console.log("Finding NaN in Array with includes:", mixedArray.includes(NaN));
// Expected Output: Finding NaN in Array with includes: true

const mixedSet = new Set([1, 2, NaN, 4]);
console.log("Finding NaN in Set with .has:", mixedSet.has(NaN));
// Expected Output: Finding NaN in Set with .has: true

console.log("Array has 'Mango'?", fruitsArray.includes('Mango'));
// Expected Output: Array has 'Mango'? true
console.log("Set has 'Mango'?", fruitsSet.has('Mango'));
// Expected Output: Set has 'Mango'? true

let user1 = { name: "Rahim" };
let user2 = { name: "Karim" };
let admin = { role: "Admin" };

const activeUsers = new WeakSet();

activeUsers.add(user1);
activeUsers.add(admin);

console.log("Is user1 in activeUsers?", activeUsers.has(user1));
// Expected Output: Is user1 in activeUsers? true
console.log("Is user2 in activeUsers?", activeUsers.has(user2));
// Expected Output: Is user2 in activeUsers? false

user1 = null;

try {
    activeUsers.add("A string");
} catch (e) {
    console.log("Error:", e.message);
    // Expected Output: Error: Invalid value used in weak set


}


//Creating Objects

// a) Object Initializer
const myHonda = {
  color: "red",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 2.2
  },
};
console.log("Car color:", myHonda.color);
// Expected Output: Car color: red
console.log("Engine size:", myHonda.engine.size);
// Expected Output: Engine size: 2.2


// b) Constructor Function
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const ken = new Person("Ken Jones", 39);
const rand = new Person("Rand McKinnon", 33);

const car1 = new Car("Eagle", "Talon TSi", 1993, rand);
const car2 = new Car("Nissan", "300ZX", 1992, ken);

console.log("First car owner:", car1.owner.name);
// Expected Output: First car owner: Rand McKinnon
console.log("Second car model:", car2.model);
// Expected Output: Second car model: 300ZX


// c) Object.create() Method
const Animal = {
  type: "Invertebrates",
  displayType() {
    console.log(`Type: ${this.type}`);
  },
};

const animal1 = Object.create(Animal);
animal1.displayType();
// Expected Output: Type: Invertebrates

const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();
// Expected Output: Type: Fishes


//Objects and Properties

const myObj = {};
const propertyName = "fullName";

myObj.type = "Dot syntax";
myObj["date-created"] = "2023-10-27";
myObj[propertyName] = "John Doe";

console.log(myObj.type);
// Expected Output: Dot syntax
console.log(myObj["date-created"]);
// Expected Output: 2023-10-27
console.log(myObj.fullName);
// Expected Output: John Doe
console.log(myObj[propertyName]);
// Expected Output: John Doe
console.log(myObj.age);
// Expected Output: undefined

// Deleting a property
delete myObj.type;
console.log("type" in myObj);
// Expected Output: false


//Methods and 'this'

Car.prototype.displayCar = function () {
  const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  console.log(result);
};

car1.displayCar();
// Expected Output: A Beautiful 1993 Eagle Talon TSi
car2.displayCar();
// Expected Output: A Beautiful 1992 Nissan 300ZX

// Using the 'this' keyword
const Manager = { name: "Siam", age: 27 };
const Intern = { name: "Shahriar", age: 21 };

function sayHi() {
  console.log(`Hello, my name is ${this.name}`);
}

Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi();
// Expected Output: Hello, my name is Karina
Intern.sayHi();
// Expected Output: Hello, my name is Tyrone


//Getters and Setters

const user = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(user.fullName);
// Expected Output: John Doe

user.fullName = "Jane Smith";
console.log(user.firstName);
// Expected Output: Jane
console.log(user.lastName);
// Expected Output: Smith


//Comparing Objects

const fruit1 = { name: "apple" };
const fruit2 = { name: "apple" };
const fruit3 = fruit1;

console.log(fruit1 === fruit2);
// Expected Output: false
console.log(fruit1 === fruit3);
// Expected Output: true

fruit3.name = "grape";
console.log(fruit1.name);
// Expected Output: grape