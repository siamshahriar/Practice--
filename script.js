// JavaScript Practice: Comments, Declarations, Variable Scope, and more
// Each section contains multiple examples with expected output in comments.

// 1. Comments
// Single-line comment
// This is a single-line comment

/*
Multi-line comment
This is a multi-line comment
*/

// 2. Declarations
var a = 10; // Output: 10
let b = 20; // Output: 20
const c = 30; // Output: 30
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// 3. Variable Scope
function scopeExample() {
    var x = 'var scoped';
    let y = 'let scoped';
    const z = 'const scoped';
    console.log(x); // var scoped
    console.log(y); // let scoped
    console.log(z); // const scoped
}
scopeExample();
// console.log(x); // Error: x is not defined
// console.log(y); // Error: y is not defined
// console.log(z); // Error: z is not defined

// Block scope
if (true) {
    var blockVar = 'I am var';
    let blockLet = 'I am let';
    const blockConst = 'I am const';
    console.log(blockVar); // I am var
    console.log(blockLet); // I am let
    console.log(blockConst); // I am const
}
console.log(blockVar); // I am var
// console.log(blockLet); // Error: blockLet is not defined
// console.log(blockConst); // Error: blockConst is not defined

// 4. Variable Hoisting
console.log(hoistedVar); // undefined (var is hoisted)
var hoistedVar = 'Hoisted!';
// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = 'Not hoisted!';

// 5. Global Variables
globalVar = 'I am global'; // Implicit global
console.log(globalVar); // I am global
var globalVar2 = 'I am also global';
console.log(globalVar2); // I am also global

// 6. Constants
const PI = 3.14159;
console.log(PI); // 3.14159
// PI = 3; // Error: Assignment to constant variable

// 7. Primitive Data Types
let str = "Hello"; // string
let num = 42; // number
let bool = true; // boolean
let und; // undefined
let nul = null; // null
let sym = Symbol("id"); // symbol
let bigInt = 1234567890123456789012345678901234567890n; // bigint
console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean
console.log(typeof und); // undefined
console.log(typeof nul); // object (special case)
console.log(typeof sym); // symbol
console.log(typeof bigInt); // bigint

// 8. Data Type Conversion
let n1 = "123";
let n2 = Number(n1); // 123
let n3 = parseInt("456.78"); // 456
let n4 = parseFloat("456.78"); // 456.78
let s1 = String(789); // "789"
let b1 = Boolean(0); // false
let b2 = Boolean(1); // true
console.log(n2, typeof n2); // 123 'number'
console.log(n3, typeof n3); // 456 'number'
console.log(n4, typeof n4); // 456.78 'number'
console.log(s1, typeof s1); // '789' 'string'
console.log(b1, typeof b1); // false 'boolean'
console.log(b2, typeof b2); // true 'boolean'

// 9. Numbers and the '+' Operator
console.log(1 + 2); // 3
console.log('1' + 2); // '12' (string concatenation)
console.log(1 + '2'); // '12' (string concatenation)
console.log('1' + '2'); // '12'
console.log(1 + 2 + '3'); // '33'
console.log('3' + 1 + 2); // '312'

// 10. Converting Strings to Numbers
console.log(Number('123')); // 123
console.log(parseInt('123abc')); // 123
console.log(parseFloat('123.45abc')); // 123.45
console.log(+'456'); // 456
console.log(Number('abc')); // NaN

// 11. Literals
// Array literals
let arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]

// Boolean literals
let t = true;
let f = false;
console.log(t, f); // true false

// Numeric literals
let intLit = 100; // Integer literal
let floatLit = 3.14; // Floating-point literal
let hexLit = 0xff; // Hexadecimal literal (255)
let binLit = 0b1010; // Binary literal (10)
let octLit = 0o77; // Octal literal (63)
console.log(intLit, floatLit, hexLit, binLit, octLit); // 100 3.14 255 10 63

// Object literals
let obj = { name: "Siam", age: 25 };
console.log(obj); // { name: 'Siam', age: 25 }

// Enhanced Object literals
let name = "Nasif";
let enhancedObj = {
    name,
    greet() { return `Hello, ${this.name}`; }
};
console.log(enhancedObj.greet()); // Hello, Nasif

// RegExp literals
let regex = /abc/i;
console.log(regex.test("ABC")); // true

// String literals
let s = 'single';
let d = "double";
let backtickStr = `backtick`;
console.log(s, d, backtickStr); // single double backtick

// Template literals

let user = 'Mahim';
let greet = `Hello, ${user}!`;
console.log(greet); // Hello, Mahim!

// Tagged templates
function tag(strings, value) {
    return strings[0] + value.toUpperCase();
}
let tagged = tag`Hi, ${user}`;
console.log(tagged); // Hi, MAHIM

// Using special characters in strings
let special = "Line1\nLine2\tTabbed";
console.log(special); // Line1 (newline) Line2 (tab)Tabbed

// Escaping characters
let escaped = 'It\'s a string with \'escape\' characters.';
console.log(escaped); // It's a string with 'escape' characters.

// =============================
// Control Flow and Error Handling
// =============================

// 1. Block Statement
let x = 1;
{
    let y = 2;
    x = x + y;
    console.log(x); // 3
}
// console.log(y); // Error: y is not defined

// var is not block scoped
var z = 5;
{
    var z = 10;
}
console.log(z); // 10

// let/const are block scoped
let mahim = 7;
{
    let mahim = 15;
    console.log(mahim); // 15
}
console.log(mahim); // 7

// 2. Conditional Statements
// if...else
let fahadScore = 80;
if (fahadScore > 90) {
    console.log("Fahad got A+");
} else if (fahadScore > 70) {
    console.log("Fahad got A"); // Fahad got A
} else {
    console.log("Fahad needs to improve");
}

// Nested if
let nasifAge = 20;
if (nasifAge >= 18) {
    if (nasifAge < 30) {
        console.log("Nasif is a young adult"); // Nasif is a young adult
    }
}

// Falsy values
let falsyValues = [false, undefined, null, 0, NaN, ""];
falsyValues.forEach(function(val) {
    if (val) {
        console.log("Truthy");
    } else {
        console.log("Falsy"); // All will print Falsy
    }
});

// Boolean object vs boolean primitive
const boolObj = new Boolean(false);
if (boolObj) {
    console.log("Boolean object is truthy"); // Boolean object is truthy
}
if (boolObj == true) {
    console.log("boolObj == true");
} else {
    console.log("boolObj != true"); // boolObj != true
}

// 3. switch statement
let fruitType = "Mangoes";
switch (fruitType) {
    case "Oranges":
        console.log("Oranges are 80 taka per kg.");
        break;
    case "Apples":
        console.log("Apples are 100 taka per kg.");
        break;
    case "Bananas":
        console.log("Bananas are 40 taka per dozen.");
        break;
    case "Cherries":
        console.log("Cherries are 300 taka per kg.");
        break;
    case "Mangoes":
        console.log("Mangoes are 120 taka per kg."); // Mangoes are 120 taka per kg.
        break;
    default:
        console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?"); // Is there anything else you'd like?

// switch without break (fall-through)
let day = 5;
switch (day) {
    case 5:
        console.log("Friday"); // Friday
    case 6:
        console.log("Saturday"); // Saturday
        break;
    default:
        console.log("Other day");
}

// 4. Exception Handling
// throw statement
// throw "Error2"; // Uncaught exception: Error2
// throw 42; // Uncaught exception: 42
// throw true; // Uncaught exception: true
// throw { toString() { return "I'm an object!"; } };

// try...catch
try {
    throw "amarException";
} catch (err) {
    console.log("Caught exception:", err); // Caught exception: amarException
}

// try...catch...finally
function getMonthName(mo) {
    mo--;
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    if (!months[mo]) {
        throw new Error("Invalid month code");
    }
    return months[mo];
}

let myMonth = 13;
let monthName;
try {
    monthName = getMonthName(myMonth);
} catch (e) {
    monthName = "unknown";
    console.error(e.name); // Error
    console.error(e.message); // Invalid month code
}
console.log(monthName); // unknown

// finally block always runs
function testFinally() {
    try {
        console.log("Try block"); // Try block
        throw "Error in try";
    } catch (e) {
        console.log("Catch block"); // Catch block
        return "from catch";
    } finally {
        console.log("Finally block"); // Finally block
        return "from finally";
    }
}
console.log(testFinally()); // from finally

// finally overwrites throw
function testFinallyThrow() {
    try {
        throw "Error thrown";
    } catch (e) {
        console.log('caught inner "Error thrown"'); // caught inner "Error thrown"
        throw e;
    } finally {
        return false; // overwrites the throw
    }
}
try {
    console.log(testFinallyThrow()); // false
} catch (e) {
    console.log('caught outer "Error thrown"');
}

// Nested try...catch
try {
    try {
        throw "Nested error";
    } finally {
        console.log("Inner finally"); // Inner finally
    }
} catch (e) {
    console.log("Outer catch:", e); // Outer catch: Nested error
}

// Using Error object
function doSomethingErrorProne() {
    let mistake = false;
    if (!mistake) {
        throw new Error("The message");
    }
}
try {
    doSomethingErrorProne();
} catch (e) {
    console.error(e.name); // Error
    console.error(e.message); // The message
}

// =============================
// Loops and Iteration
// =============================

// 1. for statement
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step"); // Walking east one step (5 times)
}

// Example: Sum of first 5 numbers
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum); // 15

// 2. do...while statement
let i = 0;
do {
    i += 1;
    console.log(i); // 1 2 3 4 5
} while (i < 5);

// 3. while statement
let n = 0;
let x2 = 0;
while (n < 3) {
    n++;
    x2 += n;
}
console.log(n, x2); // 3 6

// 4. labeled statement, break, and continue
let x3 = 0;
let z2 = 0;
labelCancelLoops: while (true) {
    console.log("Outer loops:", x3);
    x3 += 1;
    z2 = 1;
    while (true) {
        console.log("Inner loops:", z2);
        z2 += 1;
        if (z2 === 4 && x3 === 3) {
            break labelCancelLoops;
        } else if (z2 === 4) {
            break;
        }
    }
}

// continue statement in while
let j = 0;
let m = 0;
while (j < 5) {
    j++;
    if (j === 3) {
        continue;
    }
    m += j;
    console.log(m); // 1 3 7 12
}

// Nested labeled continue
let ii = 0;
let jj = 6;
checkIandJ: while (ii < 3) {
    console.log("ii:", ii);
    ii += 1;
    checkJ: while (jj > 4) {
        console.log("jj:", jj);
        jj -= 1;
        if (jj % 2 === 0) {
            continue;
        }
        console.log(jj, "is odd.");
    }
    console.log("ii =", ii);
    console.log("jj =", jj);
}

// 5. for...in statement (object)
let student = { name: "Fahad", roll: 12, city: "Dhaka" };
for (const key in student) {
    console.log(key, student[key]); // name Fahad, roll 12, city Dhaka
}

// for...in with array (not recommended for arrays)
let arr2 = [10, 20, 30];
arr2.extra = "hello";
for (const idx in arr2) {
    console.log(idx); // 0 1 2 extra
}

// 6. for...of statement (array)
const numbers = [3, 5, 7];
for (const value of numbers) {
    console.log(value); // 3 5 7
}

// for...of with destructuring (object entries)
const obj2 = { foo: 1, bar: 2 };
for (const [key, val] of Object.entries(obj2)) {
    console.log(key, val); // foo 1, bar 2
}

// More Loop Variations

// for loop: decrementing
for (let i = 5; i > 0; i--) {
    console.log("Countdown:", i); // Countdown: 5 4 3 2 1
}

// for loop: step by 2
for (let i = 0; i < 10; i += 2) {
    console.log("Even:", i); // Even: 0 2 4 6 8
}

// Nested for loops (multiplication table)
for (let row = 1; row <= 3; row++) {
    let line = '';
    for (let col = 1; col <= 3; col++) {
        line += (row * col) + ' ';
    }
    console.log(line.trim()); // 1 2 3, 2 4 6, 3 6 9
}

// do...while: user input simulation (stop at "stop")
let fakeInputs = ["Siam", "Nasif", "stop", "Fahad"];
let idx = 0;
let input;
do {
    input = fakeInputs[idx++];
    console.log("Input:", input); // Input: Siam, Input: Nasif, Input: stop
} while (input !== "stop");

// while: sum until over 20
let total = 0;
let add = 1;
while (total <= 20) {
    total += add;
    add++;
}
console.log("Total after while:", total); // Total after while: 21

// labeled break in nested for
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i * j === 4) {
            break outerLoop;
        }
        console.log(`i=${i}, j=${j}`); // i=1,j=1 i=1,j=2 i=1,j=3 i=2,j=1
    }
}

// continue in for...of (skip odd numbers)
const nums = [1, 2, 3, 4, 5, 6];
for (const n of nums) {
    if (n % 2 !== 0) continue;
    console.log("Even number:", n); // Even number: 2 4 6
}

// for...in: inherited properties
function Person(name) {
    this.name = name;
}
Person.prototype.country = "Bangladesh";
const mahimPerson = new Person("Mahim");
for (const prop in mahimPerson) {
    console.log("Property:", prop, mahimPerson[prop]); // name Mahim, country Bangladesh
}

// for...of: string iteration
for (const char of "Fahad") {
    console.log("Char:", char); // Char: F a h a d
}

// for...of: Set iteration
const set = new Set(["Siam", "Nasif", "Mahim"]);
for (const name of set) {
    console.log("Set name:", name); // Set name: Siam Nasif Mahim
}

// for...of: Map iteration
const map = new Map([
    ["Siam", 90],
    ["Nasif", 85],
    ["Fahad", 80]
]);
for (const [student, score] of map) {
    console.log(`${student}: ${score}`); // Siam: 90, Nasif: 85, Fahad: 80
}

