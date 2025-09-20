// MDN
// Regular Expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// Regular Expression Example (Literal & Constructor)
// Literal syntax
const re1 = /ab+/;
console.log(re1.test("ab"));    // true
console.log(re1.test("abb"));   // true
console.log(re1.test("ac"));    // false

// Constructor syntax
const userInput = "cat";
const re2 = new RegExp(userInput);
console.log(re2.test("dog"));   // false
console.log(re2.test("cat"));   // true

// Using simple patterns
const pattern = /hello/;
console.log(pattern.test("hello world")); // true
console.log(pattern.test("h e l l o there")); // false

// Using special characters

// Assertions
// Regex এ ^ আর $ হলো assertion → এগুলো আসলে কোনো character match করে না, বরং string এর অবস্থান চেক করে।
// Input boundary assertion: ^, $

// Use Case 1: Matching the Entire String (Validation)

// Problem: We want to validate a username that must consist only of lowercase letters (a-z)
// and be between 3 and 5 characters long. No leading/trailing spaces or other characters are allowed.

const validationRegex = /^[a-z]{3,5}$/;

console.log(`Regex used: ${validationRegex}`);
console.log('"azby" ->', validationRegex.test("azby"));             // true (Correct: Follows the rule from start to end)
console.log('"abcde" ->', validationRegex.test("abcde"));           // true (Correct: 5 characters and follows the rule)
console.log('"" ->', validationRegex.test(""));                     // false (Empty string)
console.log('"  azby  " ->', validationRegex.test("  azby  "));     // false (Has leading and trailing spaces)
console.log('"12azby34" ->', validationRegex.test("12azby34"));     // false (Has numbers before and after)
console.log('"abcdef" ->', validationRegex.test("abcdef"));         // false (Length is greater than 5)


// Use Case 2: Checking if a String Ends with Something (e.g., File Extensions)

function isImage(filename) {
  // The 'i' flag makes the match case-insensitive.
  const imageRegex = /\.(png|jpe?g|gif)$/i;
  return imageRegex.test(filename);
}

console.log('isImage("photo.jpg") ->', isImage("photo.jpg"));       // true
console.log('isImage("IMAGE.PNG") ->', isImage("IMAGE.PNG"));       // true (because of the 'i' flag)
console.log('isImage("document.pdf") ->', isImage("document.pdf"));    // false
console.log('isImage("photo.jpg.txt") ->', isImage("photo.jpg.txt"));   // false (because it ends with .txt)
console.log('isImage("thisisnotanimagejpg") ->', isImage("thisisnotanimagejpg")); // false (because there is no dot before jpg)


// Use Case 3: Checking if a String Starts with Something

const greetingRegex = /^Hello/;

console.log(`Regex used: ${greetingRegex}`);
console.log('"Hello world" ->', greetingRegex.test("Hello world"));           // true
console.log('"Hello, how are you?" ->', greetingRegex.test("Hello, how are you?")); // true
console.log('"world, Hello" ->', greetingRegex.test("world, Hello"));         // false (Does not start with "Hello")
console.log('"Say Hello" ->', greetingRegex.test("Say Hello"));                 // false


// Use Case 4: Removing a Character from the End (Replace)

function removeTrailingSlash(url) {
  // Find a slash (/) that is at the very end ($) of the string and replace it with an empty string.
  const slashAtEndRegex = /\/$/;
  return url.replace(slashAtEndRegex, "");
}

const url1 = "https://example.com/";
const url2 = "https://example.com/docs/";
const url3 = "https://example.com/about/team";

console.log(`"${url1}" -> "${removeTrailingSlash(url1)}"`); // "https://example.com"
console.log(`"${url2}" -> "${removeTrailingSlash(url2)}"`); // "https://example.com/docs"
console.log(`"${url3}" -> "${removeTrailingSlash(url3)}"`); // "https://example.com/about/team"

// Use Case 5: Special Case - Multiline Mode ('m' flag)

// With the 'm' flag, ^ and $ match not only the start/end of the entire string
// but also the start/end of each individual line.

const multilineText = `first line
second line
third line`;

console.log("Multiline Text:\n" + multilineText + "\n");

// --- `^` ---
const regexWithoutM = /^s/g; // Without 'm' flag: Looks for 's' only at the start of the entire string.
console.log("Without 'm' flag /^s/g:", multilineText.match(regexWithoutM)); // null (because the entire string starts with 'f')

const regexWithM = /^s/gm; // With 'm' flag: Looks for 's' at the start of each line.
console.log("With 'm' flag /^s/gm:", multilineText.match(regexWithM)); // ["s"] (because the second line starts with 's')

// --- `$` ---
const regexEndWithoutM = /e$/g; // Without 'm' flag: Looks for 'e' only at the end of the entire string.
console.log("Without 'm' flag /e$/g:", multilineText.match(regexEndWithoutM)); // ["e"] (because the entire string ends with 'e')

const regexEndWithM = /e$/gm; // With 'm' flag: Looks for 'e' at the end of each line.
console.log("With 'm' flag /e$/gm:", multilineText.match(regexEndWithM)); // ["e", "e", "e"] (because each line ends with 'e')

// Word boundary assertion: \b, \B

// Use Case 1: Matching a Whole Word Only (\bword\b)

// Problem: We want to find the word "cat" but not as part of another word like "caterpillar".
// Solution: Surround the word with `\b`. This ensures it's a standalone word.

const wholeWordRegex = /\bcat\b/g;
const testString1 = "The cat sat with another cat, but not on a caterpillar.";

console.log("Matches found:", testString1.match(wholeWordRegex)); // Matches found: ["cat", "cat"]

const testString2 = "This is a scattered catastrophe.";
console.log("Matches found:", testString2.match(wholeWordRegex)); // Matches found: null



// Use Case 2: Matching the Start of a Word (\bword)

// Problem: We want to find all words that *start* with "is".
// Solution: Use `\b` only at the beginning of the pattern.

const startsWithRegex = /\bis/g;
const testString3 = "This is an island. It is beautiful.";

console.log("Matches found:", testString3.match(startsWithRegex)); // Matches found: ["is", "is", "is"]


// Use Case 3: Matching the End of a Word (word\b)

// Problem: We want to find all words that *end* with "ing".
// Solution: Use `\b` only at the end of the pattern.

const endsWithRegex = /ing\b/g;
const testString4 = "I am walking and singing. My ring is shiny.";

console.log("Matches found:", testString4.match(endsWithRegex)); // Matches found: ["ing", "ing", "ing"]


// Use Case 4: Using the Non-Word Boundary (\B)

// Problem: We want to find a pattern only when it's *inside* another word, not as a whole word.
// Solution: Use `\B`.

// Example A: Find "cat" inside a larger word.
const nonBoundaryRegex = /\Bcat\B/g;
const testString6 = "The concatenation of caterpillar parts is catastrophic.";

console.log("Matches found:", testString6.match(nonBoundaryRegex)); // Matches found: ["cat", "cat"]

// Example B: Find "is" when it is NOT at the start of a word.
const isInsideWordRegex = /\Bis/g;
const testString7 = "This is a list. It is a masterpiece.";

console.log("Matches found:", testString7.match(isInsideWordRegex)); // Matches found: ["is", "is"]

// Lookahead assertion: (?=...), (?!...)

// Use Case 1: Matching Strings Without Consuming Them (Positive Lookahead)
function getFirstSubsentence(str) {
  // Regex Explanation:
  // ^       - Start of the string.
  // .*?     - Match any character (.), 0 or more times (*), but be non-greedy (?).
  //           This means it stops at the first possible opportunity.
  // (?=[,.]) - This is the positive lookahead. It checks if the *next* characters
  //           are a comma or a period, BUT it doesn't include them in the match.
  const regex = /^.*?(?=[,.])/;
  const result = regex.exec(str);
  return result ? result[0] : null; // Return the matched string or null
}

const sentence1 = "Hello, world!";
console.log("Result:", getFirstSubsentence(sentence1)); // "Hello"

const sentence2 = "Thank you.";
console.log("Result:", getFirstSubsentence(sentence2)); // "Thank you"

const sentence3 = "No punctuation here";
console.log("Result:", getFirstSubsentence(sentence3)); // null


// Use Case 2: Pattern Subtraction - Is X but NOT Y (Negative Lookahead)
function isValidIdentifierName(str) {
  // Regex Explanation:
  // ^                               - Start of the string.
  // (?!(?:break|case|catch)$)       - This is the negative lookahead. It asserts that
  //                                   from the current position, the pattern "break", "case", or "catch"
  //                                   followed by the end of the string ($) does NOT match.
  // [$_\p{ID_Start}][$\p{ID_Continue}]* - After the check passes, this part matches a valid identifier.
  // $                               - End of the string.
  // u                               - Unicode flag.
  const re = /^(?!(?:break|case|catch)$)[$_\p{ID_Start}][$\p{ID_Continue}]*$/u;
  return re.test(str);
}

const id1 = "break";
console.log("Result:", isValidIdentifierName(id1)); // false

const id2 = "foo";
console.log("Result:", isValidIdentifierName(id2)); // true

const id3 = "cases";
console.log("Result:", isValidIdentifierName(id3)); // true


// Use Case 3: Pattern Intersection - Is both X AND Y (Positive Lookahead)
function isASCIIIDPart(char) {
  // Regex Explanation:
  // ^                 - Start of the string.
  // (?=\p{ASCII}$)    - Condition 1 (Positive Lookahead): Assert that the entire string is an ASCII character.
  // \p{ID_Start}      - Condition 2 (Actual Match): Match if the character is a valid identifier-starting character.
  // $                 - End of the string.
  // u                 - Unicode flag.
  const re = /^(?=\p{ASCII}$)\p{ID_start}$/u;
  return re.test(char);
}

const char1 = "a";
console.log("Result:", isASCIIIDPart(char1)); // true

const char3 = ":";
console.log("Result:", isASCIIIDPart(char3)); // false

