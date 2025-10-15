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

//if I add return in function*
function* countWithReturn(n) {
    for (let i = 1; i <= n; i++) {
        if (i === 3) return 'done'; // return instead of yield
        yield i;
    }
}
const counterWithReturn = countWithReturn(3);
console.log(counterWithReturn.next()); // { value: 1, done: false }
console.log(counterWithReturn.next()); // { value: 2, done: false }
console.log(counterWithReturn.next()); // { value: 'done', done: true }
console.log(counterWithReturn.next());  // { value: undefined, done: true }
console.log(counterWithReturn.next()); // { value: 1, done: false }
console.log(counterWithReturn.next()); // { value: 2, done: false }
console.log(counterWithReturn.next()); // { value: 'done', done: true }
console.log(counterWithReturn.next());  // { value: undefined, done: true }

// Internationalization

// Number formatting (currency and percent)
const nfUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log('Price formatted (en-US):', nfUSD.format(1234.5)); // $1,234.50

const nfIN = new Intl.NumberFormat('hi-IN', { style: 'currency', currency: 'INR' });
console.log('Price formatted (hi-IN):', nfIN.format(1234.5)); // ₹1,234.50 (format varies)

// Date/time formatting
const dtf = new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/London' });
console.log('Date formatted (en-GB):', dtf.format(new Date()));

// List formatting
const lf = new Intl.ListFormat('en-US', { style: 'long', type: 'conjunction' });
console.log('List formatted:', lf.format(['apple', 'banana', 'cherry'])); // apple, banana, and cherry

// Plural rules
const pr = new Intl.PluralRules('en-US');
console.log('Plural category for 1:', pr.select(1)); // one
console.log('Plural category for 2:', pr.select(2)); // other

// Collation (sorting)
const collator = new Intl.Collator('de-DE', { sensitivity: 'base' });
const names = ['Hochberg', 'Hönigswald', 'Holzman'];
console.log('Sorted (de-DE):', names.slice().sort(collator.compare));

// Relative time
const rtf = new Intl.RelativeTimeFormat('en-US', { numeric: 'auto' });
console.log(rtf.format(-1, 'day')); // 1 day ago (or 'yesterday')
console.log(rtf.format(2, 'day')); // in 2 days

// DisplayNames (currencies example)
if (typeof Intl.DisplayNames === 'function') {
    const dn = new Intl.DisplayNames(['en'], { type: 'currency' });
    console.log('Currency display name for EUR:', dn.of('EUR')); // Euro
}


// Dynamic and weak typing

let x = 42; // number
console.log('x:', x, 'type:', typeof x); // x: 42 type: number

x = 'now I am a string';
console.log('x reassigned:', x, 'type:', typeof x); // x reassigned: now I am a string type: string

x = true;
console.log('x reassigned again:', x, 'type:', typeof x); // x reassigned again: true type: boolean

// Weak typing / implicit coercion
console.log('number + string ->', 5 + '1'); // '51' (number coerced to string)
console.log('number - string ->', 5 - '1'); // 4 (string coerced to number)

// Loose equality pitfalls
console.log("'0' == 0 ->", '0' == 0); // true
console.log("'' == 0 ->", '' == 0); // true
console.log('null == undefined ->', null == undefined); // true
console.log('null === undefined ->', null === undefined); // false

// Boolean coercion examples
console.log('Boolean(0) ->', Boolean(0)); // false
console.log("Boolean('') ->", Boolean('')); // false
console.log("Boolean('false') ->", Boolean('false')); // true

// Unary plus to convert string to number (explicit coercion)
console.log('+"123" ->', +"123", typeof +"123");

// Array + number can be surprising
console.log('[1,2] + 3 ->', [1, 2] + 3); // '1,23' 

// Symbol and BigInt don't coerce to Number implicitly 
const bi = 10n;
console.log('BigInt:', bi, 'type:', typeof bi);
// console.log(bi + 2); // TypeError: Cannot mix BigInt and other types

// NaN behavior
console.log('0/0 ->', 0 / 0); // NaN
console.log('NaN === NaN ->', NaN === NaN); // false

// Primitive coercion
// 1) Date constructor: string vs number
console.log('Date from string:', new Date('2020-01-01').toString()); // Wed Jan 01 2020 ...
console.log('Date from timestamp:', new Date(1577836800000).toString()); // Wed Jan 01 2020 ...

// Example where valueOf returns primitive
const objValueOf = {
    valueOf() {
        return 10;
    },
    toString() {
        return 'x';
    },
};
console.log('objValueOf + 5 ->', objValueOf + 5); // 15 (valueOf used)

// Example where valueOf returns object, toString used
const objToString = {
    valueOf() {
        return {};
    },
    toString() {
        return 'hello';
    },
};
console.log('objToString + " world" ->', objToString + ' world'); // 'hello world'






