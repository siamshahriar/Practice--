// MDN
// Using Classes

// 1. Basic Class & Constructor
class Student {
  constructor(name, studentId) {
    this.name = name;
    this.studentId = studentId;
  }
}

const student1 = new Student('Karim Ahmed', 101);
const student2 = new Student('Rahima Khatun', 102);
console.log(student1); // Student { name: 'Karim Ahmed', studentId: 101 }
console.log(student2); // Student { name: 'Rahima Khatun', studentId: 102 }

// 2. Instance Methods
class StudentWithMethod {
  constructor(name, studentId) {
    this.name = name;
    this.studentId = studentId;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and my ID is ${this.studentId}.`);
  }
}

const student3 = new StudentWithMethod('Karim Ahmed', 101);
student3.introduce(); // Hello, my name is Karim Ahmed and my ID is 101.

// 3. Private Fields
class StudentWithPrivateField {
  #grade;

  constructor(name, studentId) {
    this.name = name;
    this.studentId = studentId;
    this.#grade = 'N/A';
  }
  setGrade(grade) {
    this.#grade = grade;
  }
  getGrade() {
    return this.#grade;
  }
}

const student4 = new StudentWithPrivateField('Karim Ahmed', 101);
student4.setGrade('A+');
console.log(`${student4.name}'s grade is: ${student4.getGrade()}`); // Karim Ahmed's grade is: A+
// console.log(student4.#grade); // Error

// 4. Accessors (get/set)
class StudentWithAccessors {
  #grade;

  constructor(name, studentId) {
    this.name = name;
    this.studentId = studentId;
    this.#grade = 'N/A';
  }
  get grade() {
    return this.#grade;
  }

  set grade(newGrade) {
    this.#grade = newGrade;
  }
}

const student5 = new StudentWithAccessors('Karim Ahmed', 101);
student5.grade = 'B';
console.log(`${student5.name}'s new grade is: ${student5.grade}`); // Karim Ahmed's new grade is: B

// 5. Public Fields & Static Methods
class StudentWithStatic {
  school = 'ABC High School';

  constructor(name, studentId) {
    this.name = name;
    this.studentId = studentId;
  }

  introduce() {
    console.log(`My name is ${this.name}, I study at ${this.school}.`);
  }
  static isEligible(age) {
    return age > 5;
  }
}

console.log(`Is a 12-year-old eligible for admission? ${StudentWithStatic.isEligible(12)}`); // Is a 12-year-old eligible for admission? true
console.log(`Is a 4-year-old eligible for admission? ${StudentWithStatic.isEligible(4)}`);   // Is a 4-year-old eligible for admission? false

const student6 = new StudentWithStatic('Karim Ahmed', 101);
student6.introduce(); // My name is Karim Ahmed, I study at ABC High School.
StudentWithStatic.isEligible(6); // true

// 6. Inheritance (extends and super)
class BaseStudent {
  school = 'ABC High School';
  constructor(name, studentId) {
    this.name = name;
    this.studentId = studentId;
  }
  introduce() {
    console.log(`Hello, my name is ${this.name} and my ID is ${this.studentId}.`);
  }
}

class Monitor extends BaseStudent {
  constructor(name, studentId, duty) {
    super(name, studentId);
    this.duty = duty;
  }

  performDuty() {
    console.log(`${this.name} is performing their duty (${this.duty}).`);
  }
  // Method Overriding
  introduce() {
    super.introduce();
    console.log('And I am the monitor of this class.');
  }
}

const classMonitor = new Monitor('Tania Sultana', 1, 'Maintaining class discipline');
classMonitor.introduce();
// Hello, my name is Tania Sultana and my ID is 1.
// And I am the monitor of this class.
classMonitor.performDuty(); // Tania Sultana is performing their duty (Maintaining class discipline).

// 7. Private Methods and Accessors
class UniversityStudent {
  #attendance = 0;
  #scores = [];

  constructor(name) {
    this.name = name;
  }

  addScore(score) {
    this.#scores.push(score);
  }
  #calculateAverage() {
    if (this.#scores.length === 0) return 0;
    const total = this.#scores.reduce((sum, score) => sum + score, 0);
    return total / this.#scores.length;
  }
  getReport() {
    const average = this.#calculateAverage();
    console.log(`Student: ${this.name}, Average Score: ${average.toFixed(2)}`);
  }

  get #internalId() {
    return `STUDENT_${this.name.toUpperCase()}`;
  }
  getStudentId() {
    console.log(`Internal ID: ${this.#internalId}`);
  }
}

const student7 = new UniversityStudent('Alice');
student7.addScore(90);
student7.addScore(85);
student7.addScore(92);
student7.getReport(); // Student: Alice, Average Score: 89.00
student7.getStudentId(); // Internal ID: STUDENT_ALICE

// 8. Static Private Fields and Static Blocks
class School {
  static #SCHOOL_CODE;
  
  static {
    this.#SCHOOL_CODE = 'XYZ-12345';
    console.log('School class initialized. School code set.');
  }

  static getSchoolCode() {
    return this.#SCHOOL_CODE;
  }
}

console.log(`School Code: ${School.getSchoolCode()}`); // School Code: XYZ-12345

// 9. Using `instanceof` for Type Checking
const regularStudent = new BaseStudent('Bob');
const aMonitor = new Monitor('Charlie');
const notAStudent = { name: 'David' };

function printStudentDetails(student) {
  if (student instanceof Monitor) {
    console.log(`${student.name} is a Monitor.`);
  } else if (student instanceof BaseStudent) {
    console.log(`${student.name} is a regular student.`);
  } else {
    console.log('This is not a student object.');
  }
}

printStudentDetails(regularStudent); // Bob is a regular student.
printStudentDetails(aMonitor);       // Charlie is a Monitor.
printStudentDetails(notAStudent);    // This is not a student object.

// 10. Class Expressions
const Course = class {
  constructor(title, creditHours) {
    this.title = title;
    this.creditHours = creditHours;
  }
  getInfo() {
    return `${this.title} is a ${this.creditHours} credit hour course.`;
  }
};
const mathCourse = new Course('Calculus I', 3);
console.log(mathCourse.getInfo()); // Calculus I is a 3 credit hour course.

// 11. Advanced Constructor Behavior (Returning Objects)
let instance = null;
class AppConfig {
  constructor() {
    if (instance) {
      console.log('Returning existing AppConfig instance.');
      return instance;
    }
    console.log('Creating new AppConfig instance.');
    this.config = { theme: 'dark', version: '1.0' };
    instance = this;
  }
}
const config1 = new AppConfig(); // Prothombar she instance toiri korse
const config2 = new AppConfig(); // kintu eibar ar kore nai, ager tai return korse
console.log(config1 === config2); // true

// 12. Extending Built-in Classes (Custom Errors)
class AppError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidationError extends AppError {
  constructor(field, message) {
    super(`Validation failed for field '${field}': ${message}`);
    this.field = field;
  }
}

function saveUser(user) {
  if (!user.name) {
    throw new ValidationError('name', 'Name is required');
  }
  console.log('User saved successfully!');
}

try {
  saveUser({});
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Error Field: ${error.field}`); // Error Field: name
    console.error(`Error Message: ${error.message}`); // Error Message: Validation failed for field 'name': Name is required
  }
}
