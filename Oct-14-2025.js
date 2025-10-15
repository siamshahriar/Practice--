// Array.isArray() examples

const a1 = [1, 2, 3];
const a2 = 'not an array';
const a3 = new Array(5);
const a4 = new Int16Array([15, 33]);

//checking if they are arrays
console.log('is a1 array?', Array.isArray(a1)); // true
console.log('is a2 array?', Array.isArray(a2)); // false
console.log('is a3 array?', Array.isArray(a3)); // true
console.log('is a4 array (TypedArray)?', Array.isArray(a4)); // false

// Edge cases I tried
console.log('empty literal', Array.isArray([])); // true
console.log('null', Array.isArray(null)); // false
console.log('undefined', Array.isArray(undefined)); // false

// Yield Practice

// Personal practice notes for `yield` and generators
// I wrote these while testing how generators pause/resume.

// Simple generator that yields a few values
function* simpleGen() {
	yield 'first';
	yield 'second';
	yield 'third';
}

const it = simpleGen();
console.log(it.next()); // { value: 'first', done: false }
console.log(it.next().value); // 'second'
console.log(it.next()); // { value: 'third', done: false }
console.log(it.next()); // { value: undefined, done: true }

// Generate next Easyr example
function* countUpTo(n) {
    for (let i = 1; i <= n; i++) {
        yield i;
    }
}

const counter = countUpTo(3);
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
console.log(counter.next().done);  // true
console.log(counter.next().value); // undefined



