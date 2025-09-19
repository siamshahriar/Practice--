// 1.
function updateLaptop(techObject) {
  techObject.brand = "Asus";
}

const rahmanLaptop = {
  brand: "Dell",
  model: "Inspiron",
  year: 2022
};

console.log(`Before: ${rahmanLaptop.brand}`); // Dell
updateLaptop(rahmanLaptop);
console.log(`After: ${rahmanLaptop.brand}`); // Asus

// 2.
function upgradePhone(phone) {
  phone.os = "Android 15";
  phone.ram = "12GB";
}

const siamPhone = { brand: "Samsung", model: "S23", os: "Android 14", ram: "8GB" };
console.log(`Siam's Phone Before: ${siamPhone.os}, ${siamPhone.ram}`); // Android 14, 8GB
upgradePhone(siamPhone);
console.log(`Siam's Phone After: ${siamPhone.os}, ${siamPhone.ram}`); // Android 15, 12GB

// 3.
function promoteStudent(student) {
  student.class = "University";
  student.status = "Active";
}

const nasifRecord = { name: "Nasif", class: "College", status: "Inactive" };
console.log(`Nasif Before: ${nasifRecord.class}, ${nasifRecord.status}`); // College, Inactive
promoteStudent(nasifRecord);
console.log(`Nasif After: ${nasifRecord.class}, ${nasifRecord.status}`); // University, Active
// -----------

// 1.
function boostFirstScore(scores) {
  scores[0] += 10;
}

const nasifScores = [65, 72, 80];
console.log(`Before: ${nasifScores[0]}`); // 65
boostFirstScore(nasifScores);
console.log(`After: ${nasifScores[0]}`); // 75

// 2.
function doubleAllScores(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
}

const fahadScores = [40, 50, 60];
console.log(`Fahad Before: [${fahadScores.join(", ")}]`); // [40, 50, 60]
doubleAllScores(fahadScores);
console.log(`Fahad After: [${fahadScores.join(", ")}]`); // [80, 100, 120]

// 3.
function maxOutLast(arr) {
  if (arr.length > 0) arr[arr.length - 1] = 100;
}

const rahmanScores = [88, 92, 85];
console.log(`Rahman Before: [${rahmanScores.join(", ")}]`); // [88, 92, 85]
maxOutLast(rahmanScores);
console.log(`Rahman After: [${rahmanScores.join(", ")}]`); // [88, 92, 100]
// -----------

// 1.
function calculateTotal(shahriarMath, shahriarEnglish) {
  function cube(x) {
    return x * x * x;
  }
  return cube(shahriarMath) + cube(shahriarEnglish);
}

console.log(`Total cubes: ${calculateTotal(2, 3)}`); // 35

// 2.
function calculateNetSalary(basic, bonus) {
  function calculateTax(amount) {
    return amount * 0.1;
  }
  const gross = basic + bonus;
  return gross - calculateTax(gross);
}

console.log(`Siam's Net Salary: ${calculateNetSalary(50000, 10000)}`); // 54000

// 3.
function finalPrice(basePrice, discountPercent) {
  function applyDiscount(price, percent) {
    return price * (1 - percent / 100);
  }
  return applyDiscount(basePrice, discountPercent);
}

console.log(`Rahat's Final Price: ${finalPrice(2000, 15)}`); // 1700
// -----------

// 1.
const double = function(x) {
  return x * 2;
};

// 2.
const factorial = function calc(n) {
  return n <= 1 ? 1 : n * calc(n - 1);
};

console.log(`Double of 15: ${double(15)}`); // 30
console.log(`Factorial of 5: ${factorial(5)}`); // 120

// 3.
const circleArea = function(r) {
  return Math.PI * r * r;
};

console.log(`Shahriar's Circle Area (r=7): ${circleArea(7).toFixed(2)}`); // 153.94

// 4.
const countDown = function timer(n) {
  if (n <= 0) return "Blast Off!";
  console.log(`${n}...`);
  return timer(n - 1);
};

console.log("Countdown:");
console.log(countDown(3)); // 3...\n2...\n1...\nBlast Off!
// -----------

// 1.
function transformGrades(f, grades) {
  const result = [];
  for (let i = 0; i < grades.length; i++) {
    result.push(f(grades[i]));
  }
  return result;
}

const mahimGrades = [3.2, 3.5, 3.8];
const bonusGrades = transformGrades(function(g) { return g + 0.2; }, mahimGrades);
const percentGrades = transformGrades(g => g * 25, mahimGrades);

console.log(`With Bonus: [${bonusGrades.join(", ")}]`); // [3.4, 3.7, 4]
console.log(`As Percent: [${percentGrades.join(", ")}]`); // [80, 87.5, 95]

// 2.
function filterStudents(filterFn, students) {
  return students.filter(filterFn);
}

const allStudents = [
  { name: "Siam", gpa: 3.8 },
  { name: "Fahad", gpa: 2.9 },
  { name: "Nasif", gpa: 3.5 }
];

const passingStudents = filterStudents(s => s.gpa >= 3.5, allStudents);
console.log(`Passing Students: ${passingStudents.map(s => s.name).join(", ")}`); // Siam, Nasif

// 3.
function applyToAll(fn, items) {
  return items.map(fn);
}

const prices = [100, 200, 300];
const withTax = applyToAll(p => p * 1.15, prices);
console.log(`Prices with Tax: [${withTax.join(", ")}]`); // [115, 230, 345]
// -----------

// 1.
let applyDiscount;

const promoCode = "BD2024";

if (promoCode === "BD2024") {
  applyDiscount = function(item) {
    item.price *= 0.8;
  };
}

const siamWatch = { name: "Casio", price: 5000 };
console.log(`Original Price: ${siamWatch.price}`); // 5000
applyDiscount(siamWatch);
console.log(`Discounted Price: ${siamWatch.price}`); // 4000

// 2.
let giveBonus;

const isHoliday = true;

if (isHoliday) {
  giveBonus = function(employee) {
    employee.bonus = "1 month salary";
  };
}

const rahatEmployee = { name: "Rahat", salary: 60000 };
giveBonus(rahatEmployee);
console.log(`${rahatEmployee.name}'s Bonus: ${rahatEmployee.bonus}`); // Rahat's Bonus: 1 month salary

// 3.
let logMessage;

const env = "production";

if (env === "development") {
  logMessage = function(msg) {
    console.log(`[DEV] ${msg}`);
  };
} else {
  logMessage = function(msg) {
    console.log(`[PROD] ${msg}`);
  };
}

logMessage("Server started"); // [PROD] Server started
// -----------

// 1.
console.log(`Bonus on 5000: ${getBonus(5000)}`); // 500

function getBonus(salary) {
  return salary * 0.1;
}

// 2.
console.log(`Square of 9: ${calcSquare(9)}`); // 81
// -----------

function calcSquare(n) {
  return n * n;
}

// 1.
function factorialRecur(n) {
  if (n <= 1) return 1;
  return n * factorialRecur(n - 1);
}

function countDescendants(person) {
  if (!person.children) return 1;
  let total = 1;
  for (const child of person.children) {
    total += countDescendants(child);
  }
  return total;
}

const rahmanFamily = {
  name: "Rahman",
  children: [
    {
      name: "Siam",
      children: [
        { name: "Tania", children: [] },
        { name: "Rafi", children: [] }
      ]
    },
    { name: "Fahad", children: [] }
  ]
};

console.log(`Factorial of 6: ${factorialRecur(6)}`); // 720
console.log(`Family Members: ${countDescendants(rahmanFamily)}`); // 4

// 2.
function sumArray(arr, index = 0) {
  if (index >= arr.length) return 0;
  return arr[index] + sumArray(arr, index + 1);
}

const mahimNumbers = [10, 20, 30, 40];
console.log(`Sum of Mahim's Numbers: ${sumArray(mahimNumbers)}`); // 100

// 3.
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(`Reversed 'Shahriar': ${reverseString("Shahriar")}`); // rairahS
// -----------

// 1.
const getSecretKey = (function() {
  const key = "RAHMAN_2024_SECRET_KEY";
  return function() {
    return key;
  };
})();

console.log(`Secret Key: ${getSecretKey()}`); // RAHMAN_2024_SECRET_KEY

// 2.
const getCounter = (function() {
  let count = 0;
  return function() {
    return ++count;
  };
})();

console.log(`Counter 1: ${getCounter()}`); // 1
console.log(`Counter 2: ${getCounter()}`); // 2

// 3.
const getAppConfig = (function() {
  const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    owner: "Siam"
  };
  return function() {
    return { ...config };
  };
})();

console.log(`App Owner: ${getAppConfig().owner}`); // Siam
// -----------

// 1.
function createWallet(initialAmount) {
  let balance = initialAmount;

  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) {
      if (amount <= balance) balance -= amount;
      else console.log("Insufficient funds!");
    },
    getBalance() { return balance; }
  };
}

const shahriarWallet = createWallet(1000);
shahriarWallet.deposit(500);
shahriarWallet.withdraw(200);
console.log(`Shahriar's Balance: ${shahriarWallet.getBalance()}`); // 1300

const nasifWallet = createWallet(500);
console.log(`Nasif's Balance: ${nasifWallet.getBalance()}`); // 500

// 2.
function createIdGenerator(prefix) {
  let id = 0;
  return function() {
    return `${prefix}-${++id}`;
  };
}

const studentId = createIdGenerator("STU");
console.log(`New Student ID: ${studentId()}`); // STU-1
console.log(`New Student ID: ${studentId()}`); // STU-2

// 3.
function createScoreKeeper(name) {
  let score = 0;
  return {
    add(points) { score += points; },
    getScore() { return `${name}: ${score}`; }
  };
}

const fahadGame = createScoreKeeper("Fahad");
fahadGame.add(10);
fahadGame.add(15);
console.log(fahadGame.getScore()); // Fahad: 25
// -----------

// 1.
function level1(x) {
  function level2(y) {
    function level3(z) {
      return x + y + z;
    }
    return level3(2);
  }
  return level2(3);
}

console.log(`Result (x=5,y=3,z=2): ${level1(5)}`); // 10

// 2.
function greet(country) {
  function withCity(city) {
    function withName(name) {
      return `Hello ${name} from ${city}, ${country}!`;
    }
    return withName;
  }
  return withCity;
}

const greetBD = greet("Bangladesh");
const greetDhaka = greetBD("Dhaka");
console.log(greetDhaka("Siam")); // Hello Siam from Dhaka, Bangladesh!

// 3.
function startCalc(a) {
  function add(b) {
    function multiply(c) {
      return (a + b) * c;
    }
    return multiply;
  }
  return add;
}

console.log(`Result: ${startCalc(2)(3)(4)}`); // 20
// -----------

// 1.
function teacher() {
  const name = "Shahriar Sir";
  function student(name) {
    return `Assignment from: ${name}`;
  }
  return student("Rahat");
}

console.log(teacher()); // Assignment from: Rahat

// 2.
function parent() {
  const value = "Outer Value";
  function child(value) {
    return `Inner received: ${value}`;
  }
  return child("Inner Value");
}

console.log(parent()); // Inner received: Inner Value

// 3.
function outer() {
  const title = "Mr. Rahman";
  function inner(title) {
    function deepest() {
      return `Final: ${title}`;
    }
    return deepest();
  }
  return inner("Dr. Fahad");
}

console.log(outer()); // Final: Dr. Fahad
// -----------

// 1.
function joinSubjects(separator) {
  let result = "";
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

console.log(joinSubjects(" + ", "Math", "Physics", "Chemistry")); // Math + Physics + Chemistry + 

// 2.
function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(`Sum: ${sumAll(1, 2, 3, 4, 5)}`); // 15

// 3.
function findMax() {
  if (arguments.length === 0) return undefined;
  let max = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) max = arguments[i];
  }
  return max;
}

console.log(`Max of Nasif's Numbers: ${findMax(45, 78, 12, 99, 67)}`); // 99
// -----------

// 1.
function calculateFee(creditHour, ratePerHour = 500) {
  return creditHour * ratePerHour;
}

console.log(`Default Rate Fee: ${calculateFee(15)}`); // 7500
console.log(`Custom Rate Fee: ${calculateFee(12, 600)}`); // 7200

// 2.
function greetUser(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greetUser("Shahriar")); // Hello, Shahriar!
console.log(greetUser("Rahat", "Hi")); // Hi, Rahat!

// 3.
function applyDiscount(price, discount = 0.1) {
  return price * (1 - discount);
}

console.log(`Siam's Price after default discount: ${applyDiscount(1000)}`); // 900
console.log(`Fahad's Price after 20% discount: ${applyDiscount(1000, 0.2)}`); // 800
// -----------

// 1.
function totalExpenses(base, ...items) {
  return items.reduce((sum, price) => sum + price, base);
}

console.log(`Siam's Monthly Expenses: ${totalExpenses(100, 250, 150, 300)}`); // 800

// 2.
function sumAfterFirst(first, ...rest) {
  return rest.reduce((a, b) => a + b, 0);
}

console.log(`Sum after first: ${sumAfterFirst(10, 1, 2, 3, 4)}`); // 10

// 3.
function formatStudent(name, ...subjects) {
  return `${name} studies: ${subjects.join(", ")}`;
}

console.log(formatStudent("Nasif", "Math", "Physics", "CSE")); // Nasif studies: Math, Physics, CSE
// -----------

// 1.
const names = ["Siam", "Nasif", "Rahat", "Fahad"];
const nameLengths = names.map(n => n.length);
console.log(`Name Lengths: [${nameLengths.join(", ")}]`); // [4, 5, 5, 5]

// 2.
function GamePlayer(name) {
  this.name = name;
  this.scores = [10, 20, 30];

  this.printScores = function() {
    this.scores.forEach(score => {
      console.log(`${this.name} scored ${score}`);
    });
  };
}

const player1 = new GamePlayer("Siam");
console.log("Scores:"); // Scores:
player1.printScores(); // Siam scored 10\nSiam scored 20\nSiam scored 30

// 3.
const multiply = (a, b) => a * b;
const square = x => x * x;

console.log(`Multiply 6x7: ${multiply(6, 7)}`); // 42
console.log(`Square of 9: ${square(9)}`); // 81
// -----------

// 4.
function Timer(name) {
  this.name = name;
  this.start = function() {
    setTimeout(() => {
      console.log(`${this.name}'s timer finished!`);
    }, 1000);
  };
}

const rahatTimer = new Timer("Rahat");
rahatTimer.start(); // (After 1s) Rahat's timer finished!
// -----------