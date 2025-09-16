// map examples
const names = ["Siam", "Shahriar", "Rahman", "Nasif", "Mahim", "Rafi", "Tanvir", "Sadia", "Mim", "Nafisa", "Rashid", "Sakib"];
const nameLengths = names.map(name => name.length);
// [4, 8, 6, 5, 5, 4, 6, 5, 3, 6, 6, 5]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]

const marks = [80, 90, 70, 85, 60, 75, 95, 88, 77, 66, 55, 99];
const plusFive = marks.map(mark => mark + 5);
// [85, 95, 75, 90, 65, 80, 100, 93, 82, 71, 60, 104]

const fruits = ["apple", "banana", "mango", "orange", "guava", "jackfruit", "lychee", "papaya", "plum", "berry", "date", "fig"];
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
// ["APPLE", "BANANA", "MANGO", "ORANGE", "GUAVA", "JACKFRUIT", "LYCHEE", "PAPAYA", "PLUM", "BERRY", "DATE", "FIG"]

const cities = ["Dhaka", "Chittagong", "Sylhet", "Barisal", "Khulna", "Rajshahi", "Rangpur", "Mymensingh", "Comilla", "Jessore", "Bogra", "Noakhali"];
const cityFirstLetter = cities.map(city => city[0]);
// ["D", "C", "S", "B", "K", "R", "R", "M", "C", "J", "B", "N"]

const nameUpper = names.map(name => name.toUpperCase());
// ["SIAM", "SHAHRIAR", "RAHMAN", "NASIF", "MAHIM", "RAFI", "TANVIR", "SADIA", "MIM", "NAFISA", "RASHID", "SAKIB"]

const numberStrings = numbers.map(num => num.toString());
// ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

const markStatus = marks.map(mark => mark >= 80 ? "Pass" : "Fail");
// ["Pass", "Pass", "Fail", "Pass", "Fail", "Fail", "Pass", "Pass", "Fail", "Fail", "Fail", "Pass"]

const fruitLengths = fruits.map(fruit => fruit.length);
// [5, 6, 5, 6, 5, 9, 6, 6, 4, 5, 4, 3]

const cityUpper = cities.map(city => city.toUpperCase());
// ["DHAKA", "CHITTAGONG", "SYLHET", "BARISAL", "KHULNA", "RAJSHAHI", "RANGPUR", "MYMENSINGH", "COMILLA", "JESSORE", "BOGRA", "NOAKHALI"]

const nameWithSir = names.map(name => "Sir " + name);
// ["Sir Siam", "Sir Shahriar", "Sir Rahman", "Sir Nasif", "Sir Mahim", "Sir Rafi", "Sir Tanvir", "Sir Sadia", "Sir Mim", "Sir Nafisa", "Sir Rashid", "Sir Sakib"]

const cityWithDivision = cities.map(city => city + " Division");
// ["Dhaka Division", "Chittagong Division", "Sylhet Division", "Barisal Division", "Khulna Division", "Rajshahi Division", "Rangpur Division", "Mymensingh Division", "Comilla Division", "Jessore Division", "Bogra Division", "Noakhali Division"]

// filter examples
const longNames = names.filter(name => name.length > 5);
// ["Shahriar", "Rahman", "Tanvir", "Nafisa", "Rashid", "Sakib"]

const evenNumbers = numbers.filter(num => num % 2 === 0);
// [2, 4, 6, 8, 10, 12]

const highMarks = marks.filter(mark => mark >= 80);
// [80, 90, 85, 95, 88, 99]

const fruitsWithA = fruits.filter(fruit => fruit.includes("a"));
// ["apple", "banana", "mango", "orange", "guava", "jackfruit", "papaya", "date"]

const citiesWithD = cities.filter(city => city.startsWith("D"));
// ["Dhaka"]

const shortNames = names.filter(name => name.length <= 4);
// ["Siam", "Rafi", "Mim"]

const oddNumbers = numbers.filter(num => num % 2 !== 0);
// [1, 3, 5, 7, 9, 11]

const marksAbove90 = marks.filter(mark => mark > 90);
// [95, 99]

const fruitsWithE = fruits.filter(fruit => fruit.includes("e"));
// ["apple", "orange", "jackfruit", "lychee", "date"]

const citiesWithR = cities.filter(city => city.includes("r"));
// ["Barisal", "Rajshahi", "Rangpur", "Mymensingh", "Jessore"]

const namesWithA = names.filter(name => name.includes("a"));
// ["Siam", "Shahriar", "Rahman", "Nasif", "Mahim", "Tanvir", "Sadia", "Nafisa", "Rashid", "Sakib"]

const marksBelow70 = marks.filter(mark => mark < 70);
// [60, 55]

// concat examples
const boys = ["Siam", "Nasif", "Tanvir", "Sakib", "Rahman", "Rafi"];
const girls = ["Mahim", "Sadia", "Mim", "Nafisa"];
const allStudents = boys.concat(girls);
// ["Siam", "Nasif", "Tanvir", "Sakib", "Rahman", "Rafi", "Mahim", "Sadia", "Mim", "Nafisa"]

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10, 11, 12];
const arr3 = arr1.concat(arr2);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const fruits1 = ["apple", "banana", "mango", "orange", "guava", "jackfruit"];
const fruits2 = ["lychee", "papaya", "plum", "berry", "date", "fig"];
const allFruits = fruits1.concat(fruits2);
// ["apple", "banana", "mango", "orange", "guava", "jackfruit", "lychee", "papaya", "plum", "berry", "date", "fig"]

const marks1 = [80, 90, 70, 85, 60, 75];
const marks2 = [95, 88, 77, 66, 55, 99];
const allMarks = marks1.concat(marks2);
// [80, 90, 70, 85, 60, 75, 95, 88, 77, 66, 55, 99]

const cities1 = ["Dhaka", "Chittagong", "Sylhet", "Barisal", "Khulna", "Rajshahi"];
const cities2 = ["Rangpur", "Mymensingh", "Comilla", "Jessore", "Bogra", "Noakhali"];
const allCities = cities1.concat(cities2);
// ["Dhaka", "Chittagong", "Sylhet", "Barisal", "Khulna", "Rajshahi", "Rangpur", "Mymensingh", "Comilla", "Jessore", "Bogra", "Noakhali"]

const concatNames = ["Siam", "Shahriar"].concat(["Rahman", "Nasif"]);
// ["Siam", "Shahriar", "Rahman", "Nasif"]

const concatNumbers = [1, 2, 3].concat([4, 5, 6, 7, 8, 9]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

const concatFruits = ["apple", "banana"].concat(["mango", "orange", "guava"]);
// ["apple", "banana", "mango", "orange", "guava"]

const concatMarks = [80, 90].concat([70, 85, 60, 75, 95, 88, 77, 66, 55, 99]);
// [80, 90, 70, 85, 60, 75, 95, 88, 77, 66, 55, 99]

const concatCities = ["Dhaka", "Chittagong"].concat(["Sylhet", "Barisal", "Khulna"]);
// ["Dhaka", "Chittagong", "Sylhet", "Barisal", "Khulna"]

const concatEmpty = [].concat([1, 2, 3]);
// [1, 2, 3]

const concatMultiple = ["Siam"].concat(["Shahriar"], ["Rahman", "Nasif"], ["Mahim"]);
// ["Siam", "Shahriar", "Rahman", "Nasif", "Mahim"]

// toString examples
const arrToString1 = [1, 2, 3].toString();
// "1,2,3"

const arrToString2 = ["Siam", "Shahriar", "Rahman"].toString();
// "Siam,Shahriar,Rahman"

const arrToString3 = [true, false, true].toString();
// "true,false,true"

const arrToString4 = ["apple", "banana", "mango"].toString();
// "apple,banana,mango"

const arrToString5 = [80, 90, 70].toString();
// "80,90,70"

// parseInt examples
const int1 = parseInt("123");
// 123

const int2 = parseInt("45.67");
// 45

const int3 = parseInt("80 years");
// 80

const int4 = parseInt("Siam123");
// NaN

const int5 = parseInt("007");
// 7

// JSON.stringify examples
const obj1 = { name: "Siam", age: 22 };
const str1 = JSON.stringify(obj1);
// "{\"name\":\"Siam\",\"age\":22}"

const arrJson = JSON.stringify(["Siam", "Shahriar", "Rahman"]);
// "[\"Siam\",\"Shahriar\",\"Rahman\"]"

const markJson = JSON.stringify({ marks: [80, 90, 70] });
// "{\"marks\":[80,90,70]}"

const cityJson = JSON.stringify({ city: "Dhaka", division: "Dhaka" });
// "{\"city\":\"Dhaka\",\"division\":\"Dhaka\"}"

const boolJson = JSON.stringify({ pass: true, fail: false });
// "{\"pass\":true,\"fail\":false}"

// JSON.parse examples
const parsed1 = JSON.parse('{"name":"Siam","age":22}');
// { name: "Siam", age: 22 }

const parsedArr = JSON.parse('["Siam","Shahriar","Rahman"]');
// ["Siam", "Shahriar", "Rahman"]

const parsedMarks = JSON.parse('{"marks":[80,90,70]}');
// { marks: [80, 90, 70] }

const parsedCity = JSON.parse('{"city":"Dhaka","division":"Dhaka"}');
// { city: "Dhaka", division: "Dhaka" }

const parsedBool = JSON.parse('{"pass":true,"fail":false}');
// { pass: true, fail: false }
