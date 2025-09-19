// MDN  
// Expressions and operators
// Numbers and strings
// Representing dates & times

//Exponentiation assignment
let a = 2;
a **= 3; // 8
console.log('a =', a); // 8

let b = 5;
b **= 2; // 25
console.log('b =', b); // 25

let c = 3;
c **= (2 + 1); // 27
console.log('c =', c); // 27

// Left shift assignment 
let x = 2;
x <<= 1; // 4
console.log('x =', x); // 4

let y = 5;
y <<= 2; // 20
console.log('y =', y); // 20

let z = 7;
z <<= 3; // 56
console.log('z =', z); // 56

// Right shift assignment examples
// x >>= n মানে হলো x কে 2^n দিয়ে ভাগ করো (floor হয়ে যাবে)

let r1 = 8;
r1 >>= 1; // 4
console.log('r1 =', r1); // 4

let r2 = 20;
r2 >>= 2; // 5
console.log('r2 =', r2); // 5

let r3 = 56;
r3 >>= 3; // 7
console.log('r3 =', r3); // 7

// Unsigned right shift assignment examples
let u1 = -8;
u1 >>>= 1; // 2147483644
console.log('u1 =', u1); // 2147483644

let u2 = 20;
u2 >>>= 2; // 5
console.log('u2 =', u2); // 5

let u3 = -32;
u3 >>>= 3; // 536870908
console.log('u3 =', u3); // 536870908

// Bitwise AND assignment
let ba = 6; // 110
ba &= 3; // 2 (110 & 011 = 010)
console.log('ba =', ba); // 2

// Bitwise XOR assignment
let bx = 5; // 101
bx ^= 3; // 6 (101 ^ 011 = 110)
console.log('bx =', bx); // 6

// Bitwise OR assignment
let bo = 4; // 100
bo |= 1; // 5 (100 | 001 = 101)
console.log('bo =', bo); // 5

// Logical AND assignment
let la = true;
la &&= false; // false
console.log('la =', la); // false

// Logical OR assignment
let lo = false;
lo ||= true; // true
console.log('lo =', lo); // true

// Nullish coalescing assignment
let nc = null;
nc ??= 'default'; // 'default'
console.log('nc =', nc); // 'default'

// Comparison Operators examples
console.log('5 == "5" =', 5 == "5"); // true
console.log('5 === "5" =', 5 === "5"); // false
console.log('5 != "5" =', 5 != "5"); // false
console.log('5 !== "5" =', 5 !== "5"); // true
console.log('7 > 3 =', 7 > 3); // true
console.log('2 < 4 =', 2 < 4); // true
console.log('5 >= 5 =', 5 >= 5); // true
console.log('3 <= 2 =', 3 <= 2); // false

// Assigning to properties examples
const obj1 = {};
obj1.a = 10;
console.log(obj1.a); // 10
console.log(obj1); // { a: 10 }

const key1 = 'b';
obj1[key1] = 20;
console.log(obj1[key1]); // 20
console.log(obj1); // { a: 10, b: 20 }

obj1['c'] = 30;
console.log(obj1.c); // 30
console.log(obj1); // { a: 10, b: 20, c: 30 }

// Assigning to property of primitive (does not work)
const val1 = 42;
val1.x = 99;
console.log(val1.x); // undefined
console.log(val1); // 42

// Destructuring examples
// Array destructuring
const arr = [1, 2, 3];
const [first, second, third] = arr;
console.log(first, second, third); // 1 2 3

// Object destructuring
const person = { name: 'Rahim', age: 25, city: 'Dhaka' };
const { name, age, city } = person;
console.log(name, age, city); // Rahim 25 Dhaka

// Nested destructuring
const data = { info: { id: 7, value: 'hello' }, arr: [10, 20] };
const { info: { id, value }, arr: [num1, num2] } = data;
console.log(id, value, num1, num2); // 7 hello 10 20

// Increment (++) examples
let inc1 = 5;
console.log('++inc1 =', ++inc1); // 6
let inc2 = 10;
console.log('inc2++ =', inc2++); // 10
console.log('inc2 after inc2++ =', inc2); // 11

// Decrement (--) examples
let dec1 = 5;
console.log('--dec1 =', --dec1); // 4
let dec2 = 10;
console.log('dec2-- =', dec2--); // 10
console.log('dec2 after dec2-- =', dec2); // 9

// BigInt operators examples
// Addition
const bigA = 1n + 2n;
console.log('1n + 2n =', bigA); // 3n

// Division (rounds towards zero)
const bigB = 1n / 2n;
console.log('1n / 2n =', bigB); // 0n

// Bitwise shift
const bigC = 40000000000000000n >> 2n;
console.log('40000000000000000n >> 2n =', bigC); // 10000000000000000n

// Unsigned right shift (throws error)
try {
	const bigD = 8n >>> 2n;
} catch (e) {
	console.log('8n >>> 2n throws:', e.message); // BigInts have no unsigned right shift
}

// Mixing BigInt and Number (throws error)
try {
	const bigE = 1n + 2;
} catch (e) {
	console.log('1n + 2 throws:', e.message); // Cannot mix BigInt and other types
}

// Explicit conversion
const bigF = Number(1n) + 2;
console.log('Number(1n) + 2 =', bigF); // 3
const bigG = 1n + BigInt(2);
console.log('1n + BigInt(2) =', bigG); // 3n

// Comparison
console.log('1n > 2 =', 1n > 2); // false
console.log('3 > 2n =', 3 > 2n); // true

// Unary operator: typeof examples
console.log('typeof 42 =', typeof 42); // 'number'
console.log('typeof "hello" =', typeof "hello"); // 'string'
console.log('typeof true =', typeof true); // 'boolean'
console.log('typeof undefined =', typeof undefined); // 'undefined'
console.log('typeof null =', typeof null); // 'object'
console.log('typeof {} =', typeof {}); // 'object'
console.log('typeof [] =', typeof []); // 'object'
console.log('typeof function(){} =', typeof function(){}); // 'function'

// Relational operator: in examples
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log('0 in trees =', 0 in trees); // true
console.log('3 in trees =', 3 in trees); // true
console.log('6 in trees =', 6 in trees); // false
console.log('"bay" in trees =', "bay" in trees); // false
console.log('"length" in trees =', "length" in trees); // true

console.log('"PI" in Math =', "PI" in Math); // true
const myString = new String("coral");
console.log('"length" in myString =', "length" in myString); // true

const myCar = { make: "Honda", model: "Accord", year: 1998 };
console.log('"make" in myCar =', "make" in myCar); // true
console.log('"model" in myCar =', "model" in myCar); // true

// Relational operator: instanceof examples
const objMap = new Map();
console.log('objMap instanceof Map =', objMap instanceof Map); // true
console.log('[] instanceof Array =', [] instanceof Array); // true
console.log('{} instanceof Object =', {} instanceof Object); // true

// this keyword example
function getFullName() {
	return `${this.firstName} ${this.lastName}`;
}
const person1 = { firstName: "Abir", lastName: "Hasan" };
const person2 = { firstName: "Mitu", lastName: "Akter" };
person1.getFullName = getFullName;
person2.getFullName = getFullName;
console.log('person1.getFullName() =', person1.getFullName()); // Abir Hasan
console.log('person2.getFullName() =', person2.getFullName()); // Mitu Akter

// Grouping operator examples
const ga = 1;
const gb = 2;
const gc = 3;
console.log('ga + gb * gc =', ga + gb * gc); // 7
console.log('ga + (gb * gc) =', ga + (gb * gc)); // 7
console.log('(ga + gb) * gc =', (ga + gb) * gc); // 9
console.log('ga * gc + gb * gc =', ga * gc + gb * gc); // 9

// Property accessor examples
const objProp = { foo: 123, bar: 456 };
console.log('objProp.foo =', objProp.foo); // 123
console.log('objProp["bar"] =', objProp["bar"]); // 456

// Optional chaining examples
const maybeObj = { a: { b: 5 } };
console.log('maybeObj?.a?.b =', maybeObj?.a?.b); // 5
const maybeNull = null;
console.log('maybeNull?.a =', maybeNull?.a); // undefined
const maybeFunc = null;
console.log('maybeFunc?.() =', maybeFunc?.()); // undefined

// new operator examples
const arrNew = new Array(3);
console.log('new Array(3) =', arrNew); // [ <3 empty items> ]
const dateNew = new Date(2025, 8, 20);
console.log('new Date(2025, 8, 20) =', dateNew); // Date object

// Numbers examples
console.log('Decimal:', 1234567890); // 1234567890
console.log('Decimal:', 42); // 42
console.log('Binary:', 0b1010); // 10
console.log('Octal:', 0o755); // 493
console.log('Hexadecimal:', 0xA); // 10
console.log('Exponentiation:', 5e1); // 50
console.log('Numeric separator:', 1_000_000); // 1000000

// Number object examples
console.log('Number.parseFloat("3.14"):', Number.parseFloat("3.14")); // 3.14
console.log('Number.parseInt("42"):', Number.parseInt("42")); // 42
console.log('Number.isFinite(10):', Number.isFinite(10)); // true
console.log('Number.isInteger(10.5):', Number.isInteger(10.5)); // false
console.log('Number.isNaN(NaN):', Number.isNaN(NaN)); // true
console.log('Number.isSafeInteger(9007199254740991):', Number.isSafeInteger(9007199254740991)); // true
let num = 123.456;
console.log('toExponential:', num.toExponential(2)); // '1.23e+2'
console.log('toFixed:', num.toFixed(1)); // '123.5'
console.log('toPrecision:', num.toPrecision(4)); // '123.5'

// Math object examples
console.log('Math.PI:', Math.PI);
console.log('Math.abs(-5):', Math.abs(-5)); // 5
console.log('Math.sin(Math.PI / 2):', Math.sin(Math.PI / 2)); // 1
console.log('Math.floor(3.7):', Math.floor(3.7)); // 3
console.log('Math.ceil(3.2):', Math.ceil(3.2)); // 4
console.log('Math.min(1, 2, 3):', Math.min(1, 2, 3)); // 1
console.log('Math.max(1, 2, 3):', Math.max(1, 2, 3)); // 3
console.log('Math.random():', Math.random()); // random number
console.log('Math.round(3.5):', Math.round(3.5)); // 4
console.log('Math.sqrt(16):', Math.sqrt(16)); // 4
console.log('Math.cbrt(27):', Math.cbrt(27)); // 3
console.log('Math.sign(-10):', Math.sign(-10)); // -1

// BigInt examples
const b1 = 123n;
const b2 = -1234567890987654321n;
console.log('BigInt literal:', b1); // 123n
console.log('BigInt literal:', b2); // -1234567890987654321n
const b3 = BigInt(123);
const b4 = BigInt("-1234567890987654321");
console.log('BigInt constructor:', b3); // 123n
console.log('BigInt constructor:', b4); // -1234567890987654321n
console.log('BigInt arithmetic:', 12n ** 3n); // 1728n
console.log('BigInt division:', 5n / 2n); // 2n

// Strings examples
console.log('Single quotes:', 'foo'); // Single quotes: foo
console.log('Double quotes:', "bar"); // Double quotes: bar
console.log('Hex escape:', "\xA9"); // Hex escape: ©
console.log('Unicode escape:', "\u00A9"); // Unicode escape: ©
console.log('Unicode code point:', "\u{2F804}"); // Unicode code point: 你

// String object examples
console.log('toUpperCase:', "hello".toUpperCase()); // HELLO
console.log('at:', "Bangladesh".at(0)); // B
console.log('charAt:', "Bangladesh".charAt(1)); // a
console.log('charCodeAt:', "Bangladesh".charCodeAt(0)); // 66
console.log('codePointAt:', "Bangladesh".codePointAt(0)); // 66
console.log('indexOf:', "Bangladesh".indexOf("desh")); // 5
console.log('lastIndexOf:', "Bangladesh".lastIndexOf("a")); // 4
console.log('startsWith:', "Bangladesh".startsWith("Ban")); // true
console.log('endsWith:', "Bangladesh".endsWith("desh")); // true
console.log('includes:', "Bangladesh".includes("gla")); // true
console.log('match:', "Bangladesh".match(/desh/)); // [ 'desh', ... ]
console.log('padStart:', "5".padStart(3, "0")); // '005'
console.log('padEnd:', "5".padEnd(3, "0")); // '500'
console.log('concat:', "Bangla".concat("desh")); // 'Bangladesh'
console.log('repeat:', "Hi! ".repeat(3)); // 'Hi! Hi! Hi! '
console.log('split:', "a,b,c".split(",")); // [ 'a', 'b', 'c' ]
console.log('slice:', "Bangladesh".slice(0, 6)); // 'Bangla'
console.log('substring:', "Bangladesh".substring(0, 6)); // 'Bangla'
console.log('trim:', "  Bangla  ".trim()); // 'Bangla'
console.log('toLowerCase:', "BANGLADESH".toLowerCase()); // 'bangladesh'
console.log('toLocaleUpperCase:', "bangladesh".toLocaleUpperCase()); // 'BANGLADESH'

// Template literals examples
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`); // Fifteen is 15 and not 20.
console.log(`string text line 1
string text line 2`); // multi-line string

// Date object examples
const today = new Date();
console.log('Today:', today); // Today: current date and time

const dateFromString = new Date('1995-12-25');
console.log('Date from string:', dateFromString); // Date from string: Mon Dec 25 1995

const dateFromNumbers = new Date(1995, 11, 25);
console.log('Date from numbers:', dateFromNumbers); // Date from numbers: Mon Dec 25 1995

const dateWithTime = new Date(1995, 11, 25, 9, 30, 0);
console.log('Date with time:', dateWithTime); // Date with time: Mon Dec 25 1995 09:30:00

// Get methods
console.log('Month:', dateFromString.getMonth()); // 11 (December)
console.log('Year:', dateFromString.getFullYear()); // 1995
console.log('Date:', dateFromString.getDate()); // 25
console.log('Day of week:', dateFromString.getDay()); // 1 (Monday)
console.log('Hours:', dateWithTime.getHours()); // 9
console.log('Minutes:', dateWithTime.getMinutes()); // 30
console.log('Seconds:', dateWithTime.getSeconds()); // 0

// Set methods
let setDate = new Date('2025-09-20');
setDate.setFullYear(2022);
setDate.setMonth(0); // January
setDate.setDate(15);
console.log('Set date:', setDate); // Set date: Sat Jan 15 2022

// to methods
console.log('toISOString:', today.toISOString()); // ISO string
console.log('toDateString:', today.toDateString()); // Date string
console.log('toTimeString:', today.toTimeString()); // Time string

// parse and setTime
const ipoDate = new Date();
ipoDate.setTime(Date.parse('Aug 9, 1995'));
console.log('IPO date:', ipoDate); // IPO date: Wed Aug 09 1995

// UTC method
console.log('UTC:', Date.UTC(2025, 8, 20)); // UTC timestamp for Sep 20, 2025








