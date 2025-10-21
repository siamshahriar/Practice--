// JavaScript Modules

// ===============================================
// Exporting variables and functions from a module

// Exporting a variable
export const GREETING_MESSAGE = "Welcome!";

// Exporting a function that adds two numbers
export function add(a, b) {
  return a + b;
}

// Another function that creates a message
export function createMessage(name) {
  return `${GREETING_MESSAGE}, ${name}! Module is working properly.`;
}

// Importing and using the exported members in another file

// main.js
import { GREETING_MESSAGE, add, createMessage } from './utils.js';

console.log(GREETING_MESSAGE); // "Welcome!"

const sum = add(5, 10);
console.log(`Sum of 5 and 10: ${sum}`); // "Sum of 5 and 10: 15"

const message = createMessage("John");
console.log(message); // "Welcome!, John! Module is working properly."

// ===============================================
// Load the module in an HTML file

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Modules</title>
    <script type="module" src="main.js"></script>
</head>
<body>
    <div id="output"></div>
</body>
</html>
*/

// ===============================================
// Import Maps Example

/*
Import maps allow you to control how module specifiers are resolved.
Here's an example HTML with import map:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Import Maps Example</title>
    
    <!-- Import Map Definition -->
    <script type="importmap">
    {
      "imports": {
        "shapes": "./shapes/square.js",
        "shapes/square": "./modules/shapes/square.js", 
        "https://example.com/shapes/square.js": "./shapes/square.js",
        "https://example.com/shapes/": "/shapes/square/",
        "../shapes/square": "./shapes/square.js"
      }
    }
    </script>
</head>
<body>
    <div id="output"></div>
    
    <!-- Using the mapped imports -->
    <script type="module">
       
        import { name as squareName, draw } from "shapes";
        console.log('Square name:', squareName);
        draw();
        
        import { name as moduleSquareName } from "shapes/square";
        console.log('Module square name:', moduleSquareName);
        
        // Remapped URL import
        import { name as remappedName } from "https://example.com/shapes/square.js";
        console.log('Remapped name:', remappedName);
    </script>
</body>
</html>

*/

// ===============================================
// Loading Non-JavaScript Resources

/*
Modern browsers support importing non-JavaScript resources as modules.
You can import JSON, CSS, and other resource types using import attributes.

Example files needed:

// colors.json
{
  "colors": [
    { "name": "red", "value": "#ff0000" },
    { "name": "green", "value": "#00ff00" },
    { "name": "blue", "value": "#0000ff" }
  ]
}

// styles.css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

.highlight {
  background-color: yellow;
  padding: 10px;
}

// main.js - Importing non-JavaScript resources
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };

// Using imported JSON data
console.log("Available colors:");
colors.colors.forEach(color => {
  console.log(`${color.name}: ${color.value}`);
});

// Create color palette from JSON
const colorPalette = colors.colors.map(color => color.value);
console.log("Color palette:", colorPalette);

// Apply imported CSS styles
document.adoptedStyleSheets = [styles];

// Create elements using imported data
const container = document.createElement('div');
colors.colors.forEach(color => {
  const colorDiv = document.createElement('div');
  colorDiv.style.backgroundColor = color.value;
  colorDiv.style.width = '50px';
  colorDiv.style.height = '50px';
  colorDiv.style.display = 'inline-block';
  colorDiv.style.margin = '5px';
  colorDiv.title = color.name;
  container.appendChild(colorDiv);
});

document.body.appendChild(container);

// Complete HTML example:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Non-JavaScript Resources Example</title>
</head>
<body>
    <h1>Loading Non-JavaScript Resources</h1>
    <div id="output"></div>
    
    <script type="module">
        // Import JSON data
        import colorData from "./colors.json" with { type: "json" };
        
        // Import CSS styles
        import pageStyles from "./styles.css" with { type: "css" };
        
        // Apply the CSS
        document.adoptedStyleSheets = [pageStyles];
        
        // Use the JSON data
        console.log("Loaded colors:", colorData);
        
        // Display colors dynamically
        const output = document.getElementById('output');
        colorData.colors.forEach(color => {
            const colorBox = document.createElement('div');
            colorBox.style.backgroundColor = color.value;
            colorBox.style.width = '100px';
            colorBox.style.height = '50px';
            colorBox.style.display = 'inline-block';
            colorBox.style.margin = '10px';
            colorBox.style.border = '1px solid #ccc';
            colorBox.innerHTML = `<span style="color: white; padding: 5px;">${color.name}</span>`;
            output.appendChild(colorBox);
        });
    </script>
</body>
</html>

*/

// ===============================================
// Default Exports vs Named Exports

/*

// ================== NAMED EXPORTS

// mathUtils.js - Named Exports Example
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(num) {
    this.result += num;
    return this;
  }
  
  getResult() {
    return this.result;
  }
}

// Alternative named export syntax
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

export { subtract, divide };

// ================== DEFAULT EXPORTS 

// logger.js - Default Export Example
export default class Logger {
  constructor(name) {
    this.name = name;
  }
  
  log(message) {
    console.log(`[${this.name}]: ${message}`);
  }
  
  error(message) {
    console.error(`[${this.name}] ERROR: ${message}`);
  }
}

// userService.js - Default Export (Function)
export default function createUser(name, email) {
  return {
    id: Math.random().toString(36).substr(2, 9),
    name: name,
    email: email,
    createdAt: new Date()
  };
}

// config.js - Default Export (Object)
export default {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
  headers: {
    'Content-Type': 'application/json'
  }
};

// ================== IMPORTING EXAMPLES ==================

// main.js - Different ways to import

// Named imports (must use exact names)
import { PI, add, multiply, Calculator } from './mathUtils.js';
import { subtract, divide } from './mathUtils.js';

// Default imports (can use any name)
import Logger from './logger.js';
import createUser from './userService.js';
import config from './config.js';

// Importing everything as namespace
import * as MathUtils from './mathUtils.js';

// Aliasing named imports
import { add as addNumbers, multiply as multiplyNumbers } from './mathUtils.js';

// Using the imports
console.log('PI value:', PI);
console.log('5 + 3 =', add(5, 3));
console.log('4 * 6 =', multiply(4, 6));

const calc = new Calculator();
console.log('Calculator result:', calc.add(10).add(5).getResult());

const logger = new Logger('MyApp');
logger.log('Application started');
logger.error('Something went wrong');

const user = createUser('John Doe', 'john@example.com');
console.log('Created user:', user);

console.log('Config:', config);

const client = new ApiClient();
console.log('API Version:', API_VERSION);

// Using namespace import
console.log('PI from namespace:', MathUtils.PI);
console.log('Addition from namespace:', MathUtils.add(2, 3));

// Using aliased imports
console.log('Aliased add:', addNumbers(7, 8));
console.log('Aliased multiply:', multiplyNumbers(3, 4));

*/

// ===============================================
// Dynamic Module Loading

/*

// ================== BASIC DYNAMIC IMPORT 
// Basic syntax using import() function
async function loadModule() {
  try {
    const module = await import('./mathUtils.js');
    console.log('Module loaded:', module);
    
    // Use named exports
    console.log('PI:', module.PI);
    console.log('Add result:', module.add(5, 3));
    
    // Use default export if available
    if (module.default) {
      const defaultExport = new module.default();
      console.log('Default export:', defaultExport);
    }
  } catch (error) {
    console.error('Failed to load module:', error);
  }
}

loadModule();

// ================== CONDITIONAL LOADING
// Load different modules based on user preference
async function loadTheme(themeName) {
  let themeModule;
  
  if (themeName === 'dark') {
    themeModule = await import('./themes/darkTheme.js');
  } else if (themeName === 'light') {
    themeModule = await import('./themes/lightTheme.js');
  } else {
    themeModule = await import('./themes/defaultTheme.js');
  }
  
  // Apply the theme
  themeModule.default.apply();
  console.log(`${themeName} theme loaded`);
}

// Load theme based on user setting
const userTheme = localStorage.getItem('theme') || 'default';
loadTheme(userTheme);

// ================== FEATURE FLAGS 

// Load features dynamically based on flags
async function loadFeatures(features) {
  const loadedFeatures = {};
  
  for (const feature of features) {
    try {
      const featureModule = await import(`./features/${feature}.js`);
      loadedFeatures[feature] = featureModule.default;
      console.log(`Feature ${feature} loaded`);
    } catch (error) {
      console.warn(`Feature ${feature} not available:`, error.message);
    }
  }
  
  return loadedFeatures;
}

// Usage
const enabledFeatures = ['chat', 'notifications', 'analytics'];
loadFeatures(enabledFeatures).then(features => {
  console.log('All features loaded:', Object.keys(features));
});

// ================== LAZY LOADING WITH USER INTERACTION ==================

// Load module only when user interacts
document.getElementById('advancedButton')?.addEventListener('click', async () => {
  console.log('Loading advanced features...');
  
  try {
    const { AdvancedCalculator } = await import('./advanced/calculator.js');
    const { ChartGenerator } = await import('./advanced/charts.js');
    
    const calc = new AdvancedCalculator();
    const chart = new ChartGenerator();
    
    console.log('Advanced features ready!');
    
    // Use the loaded modules
    calc.scientificCalculation();
    chart.generateChart();
    
  } catch (error) {
    console.error('Failed to load advanced features:', error);
  }
});


*/


// Javascript Data structures

// Object literals

// Object Methods Examples
// ===============================================

// === Object.keys() Examples ===

// Object.keys() - returns an array of object's own enumerable property names
const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    occupation: 'Developer'
};

const keys = Object.keys(person);
console.log("Object.keys(person):", keys); 
// ["name", "age", "city", "occupation"]

// With array
const arr = ['a', 'b', 'c'];
console.log("Object.keys(arr):", Object.keys(arr)); 
// ["0", "1", "2"]

// With string
console.log("Object.keys('hello'):", Object.keys('hello')); 
// ["0", "1", "2", "3", "4"]


// ===============================================

// === Object.values() Examples ===

// Object.values() - returns an array of object's own enumerable property values
const values = Object.values(person);
console.log("Object.values(person):", values); 
// ["John", 30, "New York", "Developer"]

const scores = { math: 95, science: 87, english: 92 };
console.log("Object.values(scores):", Object.values(scores)); 
// [95, 87, 92]

// With array
console.log("Object.values(['a', 'b', 'c']):", Object.values(['a', 'b', 'c'])); 
// ["a", "b", "c"]


// ===============================================

// === Object.entries() Examples ===

// Object.entries() - returns an array of [key, value] pairs
const entries = Object.entries(person);
console.log("Object.entries(person):", entries); 
// [["name", "John"], ["age", 30], ["city", "New York"], ["occupation", "Developer"]]

// Convert back to object using Object.fromEntries()
const reconstructed = Object.fromEntries(entries);
console.log("Reconstructed object:", reconstructed); 
// {name: "John", age: 30, city: "New York", occupation: "Developer"}

// Useful for transformation
const doubled = Object.fromEntries(
    Object.entries(scores).map(([key, value]) => [key, value * 2])
);
console.log("Doubled scores:", doubled); 
// {math: 190, science: 174, english: 184}


// ===============================================

// === Object.defineProperty() Examples ===

// Object.defineProperty() - defines a new property or modifies an existing property
const student = {};

// Define property with descriptors
Object.defineProperty(student, 'name', {
    value: 'Alice',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(student, 'id', {
    value: 'STU001',
    writable: false,
    enumerable: false,
    configurable: false
});

console.log("student.name:", student.name); 
// "Alice"
console.log("student.id:", student.id); 
// "STU001"
console.log("Object.keys(student):", Object.keys(student)); 
// ["name"] (id is not enumerable)

// Define getter/setter
let _grade = 0;
Object.defineProperty(student, 'grade', {
    get: function() { return _grade; },
    set: function(value) {
        if (value >= 0 && value <= 100) {
            _grade = value;
        } else {
            throw new Error('Grade must be between 0 and 100');
        }
    },
    enumerable: true
});

student.grade = 85;
console.log("student.grade:", student.grade); 
// 85


// ===============================================

// === Object.getOwnPropertyNames() Examples ===

// Object.getOwnPropertyNames() - returns all own properties (enumerable and non-enumerable)
const propNames = Object.getOwnPropertyNames(student);
console.log("Object.getOwnPropertyNames(student):", propNames); 
// ["name", "id", "grade"] (includes non-enumerable 'id')

// Compare with Object.keys()
console.log("Object.keys(student):", Object.keys(student)); 
// ["name", "grade"] (only enumerable)

// Built-in objects
console.log("Array.prototype properties:", Object.getOwnPropertyNames(Array.prototype).slice(0, 10)); 
// ["length", "constructor", "concat", "copyWithin", "fill", "find", "findIndex", "lastIndexOf", "pop", "push"]


// ===============================================

// === Object.getOwnPropertySymbols() Examples ===

// Object.getOwnPropertySymbols() - returns array of symbol properties
const sym1 = Symbol('description1');
const sym2 = Symbol('description2');

const objWithSymbols = {
    normalProp: 'value',
    [sym1]: 'symbol value 1',
    [sym2]: 'symbol value 2'
};

console.log("Object.keys(objWithSymbols):", Object.keys(objWithSymbols)); 
// ["normalProp"] (symbols are not included)

const symbols = Object.getOwnPropertySymbols(objWithSymbols);
console.log("Object.getOwnPropertySymbols(objWithSymbols):", symbols); 
// [Symbol(description1), Symbol(description2)]

console.log("Symbol values:", symbols.map(sym => objWithSymbols[sym])); 
// ["symbol value 1", "symbol value 2"]


// ===============================================

// === Object.getOwnPropertyDescriptors() Examples ===

// Object.getOwnPropertyDescriptors() - returns all property descriptors
const descriptors = Object.getOwnPropertyDescriptors(student);
console.log("Object.getOwnPropertyDescriptors(student):", descriptors);
/*
{
  name: {value: "Alice", writable: true, enumerable: true, configurable: true},
  id: {value: "STU001", writable: false, enumerable: false, configurable: false},
  grade: {get: ƒ, set: ƒ, enumerable: true, configurable: false}
}
*/

// Useful for cloning objects with exact property descriptors
const clonedStudent = Object.defineProperties({}, descriptors);
console.log("Cloned student:", clonedStudent); 
// Same properties and descriptors as original


// ===============================================

// === Reflect.ownKeys() Examples ===

// Reflect.ownKeys() - returns all own property keys (strings and symbols)
const allKeys = Reflect.ownKeys(objWithSymbols);
console.log("Reflect.ownKeys(objWithSymbols):", allKeys); 
// ["normalProp", Symbol(description1), Symbol(description2)]

// Compare different methods
console.log("Object.keys():", Object.keys(objWithSymbols)); 
// ["normalProp"]
console.log("Object.getOwnPropertyNames():", Object.getOwnPropertyNames(objWithSymbols)); 
// ["normalProp"]
console.log("Object.getOwnPropertySymbols():", Object.getOwnPropertySymbols(objWithSymbols)); 
// [Symbol(description1), Symbol(description2)]
console.log("Reflect.ownKeys():", Reflect.ownKeys(objWithSymbols)); 
// ["normalProp", Symbol(description1), Symbol(description2)]


// ===============================================

// === Object.assign() Examples ===

// Object.assign() - copies enumerable own properties from source to target
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };

const result = Object.assign(target, source1, source2);
console.log("Object.assign result:", result); 
// {a: 1, b: 3, c: 5, d: 6}
console.log("Target modified:", target); 
// {a: 1, b: 3, c: 5, d: 6} (target is modified)

// Cloning objects (shallow copy)
const original = { name: 'John', address: { city: 'NYC', zip: '10001' } };
const clone = Object.assign({}, original);
console.log("Cloned object:", clone); 
// {name: "John", address: {city: "NYC", zip: "10001"}}

// Merging with default values
const defaults = { theme: 'light', fontSize: 14, autoSave: true };
const userPrefs = { theme: 'dark', fontSize: 16 };
const finalPrefs = Object.assign({}, defaults, userPrefs);
console.log("Final preferences:", finalPrefs); 
// {theme: "dark", fontSize: 16, autoSave: true}


// ===============================================

// === Object Spread (...) Examples ===

// Object spread - modern alternative to Object.assign()
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

// Spread syntax
const spreadResult = { ...obj1, ...obj2, ...obj3 };
console.log("Spread result:", spreadResult); 
// {a: 1, b: 3, c: 5, d: 6}

// Adding new properties
const enhanced = { ...person, salary: 75000, department: 'IT' };
console.log("Enhanced person:", enhanced); 
// {name: "John", age: 30, city: "New York", occupation: "Developer", salary: 75000, department: "IT"}

// Overriding properties
const updated = { ...person, age: 31, city: 'San Francisco' };
console.log("Updated person:", updated); 
// {name: "John", age: 31, city: "San Francisco", occupation: "Developer"}

// Conditional spreading
const includeExtra = true;
const conditional = {
    name: 'Test',
    ...(includeExtra && { extra: 'value' })
};
console.log("Conditional spread:", conditional); 
// {name: "Test", extra: "value"}

// Nested object spreading (shallow)
const profile = {
    user: { ...person },
    settings: { ...defaults },
    timestamp: new Date().toISOString()
};
console.log("Profile with spread:", profile);
/*
{
  user: {name: "John", age: 30, city: "New York", occupation: "Developer"},
  settings: {theme: "light", fontSize: 14, autoSave: true},
  timestamp: "2025-10-22T..."
}
*/

// Array spreading in objects
const arrayData = ['first', 'second', 'third'];
const objFromArray = { ...arrayData };
console.log("Object from array spread:", objFromArray); 
// {0: "first", 1: "second", 2: "third"}

// Function parameters with spread
function createUser({ name, email, ...otherProps }) {
    return {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        createdAt: new Date(),
        ...otherProps
    };
}

const newUser = createUser({
    name: 'Jane',
    email: 'jane@example.com',
    age: 28,
    department: 'Marketing'
});
console.log("Created user with spread:", newUser);
/*
{
  id: "...",
  name: "Jane",
  email: "jane@example.com",
  createdAt: Date,
  age: 28,
  department: "Marketing"
}
*/

// === Comparison Summary ===

const testObj = {
    enumProp: 'enumerable',
    [Symbol('sym')]: 'symbol value'
};

Object.defineProperty(testObj, 'nonEnumProp', {
    value: 'non-enumerable',
    enumerable: false
});

console.log("Test object methods comparison:");
console.log("Object.keys():", Object.keys(testObj)); 
// ["enumProp"]
console.log("Object.values():", Object.values(testObj)); 
// ["enumerable"]
console.log("Object.entries():", Object.entries(testObj)); 
// [["enumProp", "enumerable"]]
console.log("Object.getOwnPropertyNames():", Object.getOwnPropertyNames(testObj)); 
// ["enumProp", "nonEnumProp"]
console.log("Object.getOwnPropertySymbols():", Object.getOwnPropertySymbols(testObj)); 
// [Symbol(sym)]
console.log("Reflect.ownKeys():", Reflect.ownKeys(testObj)); 
// ["enumProp", "nonEnumProp", Symbol(sym)]

console.log("Object methods examples completed!"); 

