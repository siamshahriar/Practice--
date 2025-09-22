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

//Lookbehind assertion: (?<=...), (?<!...)

const priceText = "Price: $100, Discount: $20, Points: 5";

// Positive lookbehind: numbers after $
const dollarAmounts = priceText.match(/(?<=\$)\d+/g);

// Negative lookbehind: numbers NOT after $
const nonDollarNumbers = priceText.match(/(?<!\$)\b\d+\b/g);

console.log("Dollar amounts:", dollarAmounts);           // ['100', '20']
console.log("Non-dollar numbers:", nonDollarNumbers);    // ['5']

// 1. Basic Character Class [abc]
console.log("Basic class [abc]:", "bat".match(/[abc]/g)); // ['b', 'a']
console.log("Basic class [abc]:", "dog".match(/[abc]/g)); // null

// 2. Range [a-z]
console.log("Range [a-z]:", "hello".match(/[a-z]/g)); // ['h','e','l','l','o']
console.log("Range [a-z]:", "HELLO".match(/[a-z]/g)); // null

// 3. Digit [0-9]
console.log("Digit [0-9]:", "Address: 123B".match(/[0-9]/g)); // ['1','2','3']

// 4. Negated Character Class [^abc]
console.log("Negated [^abc]:", "abcx".match(/[^abc]/g)); // ['x']
console.log("Negated [^abc]:", "dog".match(/[^abc]/g)); // ['d','o','g']

// 5. Combined Range [a-zA-Z0-9]
console.log("Combined [a-zA-Z0-9]:", "Mix123".match(/[a-zA-Z0-9]/g)); // ['M','i','x','1','2','3']

// 6. Predefined Classes
console.log("\\d (digit):", "A1_ ".match(/\d/g)); // ['1']
console.log("\\D (non-digit):", "A1_ ".match(/\D/g)); // ['A','_',' ']
console.log("\\w (word char):", "A1_ ".match(/\w/g)); // ['A','1','_']
console.log("\\W (non-word char):", "A1_ ".match(/\W/g)); // [' ']
console.log("\\s (whitespace):", "Hello world!".match(/\s/g)); // [' ']
console.log("\\S (non-whitespace):", "Hello world!".match(/\S/g)); // ['H','e','l','l','o','w','o','r','l','d','!']

// 7. Special Characters Inside Class [\.\-\+]
console.log("Special chars [. - +]:", "a.b-c+d".match(/[\.\-\+]/g)); // ['.','-','+']

// 8. Multiple Classes Together [a-z0-9@]
console.log("Lowercase, digit, @:", "user@email123.com".match(/[a-z0-9@]/g)); // All lowercase, digits, '@'

// 1. Simple Group: Capture area code
const phone = "(880) 123-4567";
const phoneMatch = phone.match(/\((\d{3})\)\s\d{3}-\d{4}/);
console.log("[Group] Area code:", phoneMatch ? phoneMatch[1] : null); // 880

// 2. Backreference: Find repeated words (e.g. "bye bye")
const text = "bye bye go go no no yes yes";
const repeatedWordRegex = /\b(\w+)\s\1\b/g;
console.log("[Backreference] Repeated words:", text.match(repeatedWordRegex)); // ['bye bye', 'go go', 'no no', 'yes yes']

// 3. Multiple Groups: Swap first and last name
const name = "Siam Shahriar";
const swapped = name.replace(/(\w+)\s(\w+)/, "$2, $1");
console.log("[Multiple Groups] Swapped:", swapped); // Shahriar, Siam

// 4. Nested Groups: Extract inner and outer parts
const str = "abc123xyz";
const nestedMatch = str.match(/(a(bc))(123)/);
console.log("[Nested Groups] Group 1:", nestedMatch ? nestedMatch[1] : null); // 'abc'
console.log("[Nested Groups] Group 2:", nestedMatch ? nestedMatch[2] : null); // 'bc'
console.log("[Nested Groups] Group 3:", nestedMatch ? nestedMatch[3] : null); // '123'

// 5. Non-capturing Groups: (?:...) Match but don't capture
const animals = "cat dog goat";
const nonCapturing = animals.match(/(?:cat|dog)/g);
console.log("[Non-capturing Group] Matches:", nonCapturing); // ['cat', 'dog']

// 6. Named Groups (ES2018+)
const date = "2025-09-22";
const namedMatch = date.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
if (namedMatch && namedMatch.groups) {
  console.log("[Named Groups] Year:", namedMatch.groups.year);    // '2025'
  console.log("[Named Groups] Month:", namedMatch.groups.month);  // '09'
  console.log("[Named Groups] Day:", namedMatch.groups.day);      // '22'
} else {
  console.log("[Named Groups] Not matched or not supported");
}


// Quantifiers

// 1. ? (Zero or One): Optional character
console.log("'color' or 'colour':", "color colour".match(/colou?r/g)); // ['color', 'colour']

// 2. * (Zero or More): Repeat zero or more times
console.log("'ba', 'baa', 'baaa':", "ba baa baaa".match(/ba*/g)); // ['ba', 'baa', 'baaa']

// 3. + (One or More): At least one occurrence
console.log("'ba', 'baa', 'baaa':", "ba baa baaa".match(/ba+/g)); // ['ba', 'baa', 'baaa']

// 4. {n} (Exactly n times)
console.log("'aaa', 'aa', 'a':", "aaa aa a".match(/a{2}/g)); // ['aa', 'aa']

// 5. {n,} (At least n times)
console.log("'aaa', 'aa', 'a':", "aaa aa a".match(/a{2,}/g)); // ['aaa', 'aa']

// 6. {n,m} (Between n and m times)
console.log("'aaa', 'aa', 'a':", "aaa aa a".match(/a{1,2}/g)); // ['aa', 'a', 'aa', 'a']

// 7. Greedy vs. Lazy (Non-greedy: ? after quantifier)
// Greedy: grabs as much as possible, Lazy: grabs as little as possible
const greedy = "<b>bold</b><b>again</b>".match(/<b>.*<\/b>/g); // ['<b>bold</b><b>again</b>']
const lazy = "<b>bold</b><b>again</b>".match(/<b>.*?<\/b>/g); // ['<b>bold</b>', '<b>again</b>']
console.log("Greedy:", greedy);
console.log("Lazy:", lazy);

// 8. Quantifiers with character classes
console.log("Digits:", "123456".match(/\d{2,4}/g)); // ['1234', '56']

// 9. Quantifiers with groups
console.log("Double word:", "ha ha haha".match(/(ha\s?){2}/g)); // ['ha ha']

// 10. Zero times (matches nothing)
console.log("Zero a's:", "xyz".match(/a{0}/g)); // [''] (matches empty string at every position)

// exec()
const execRegex = /(\d+)/g;
console.log("exec 1:", execRegex.exec("Item 42 is ready"));        // ['42', '42']
console.log("exec 2:", execRegex.exec("No digits here"));         // null
console.log("exec 3:", execRegex.exec("Room 7, Floor 2"));        // ['7', '7']
console.log("exec 4:", execRegex.exec("Order: 123, 456"));        // ['123', '123']
console.log("exec 5:", execRegex.exec("2025-09-22"));             // ['2025', '2025']

// test()
console.log("test 1:", /\d/.test("abc"));                         // false
console.log("test 2:", /\d/.test("abc123"));                      // true
console.log("test 3:", /^hello/.test("hello world"));             // true
console.log("test 4:", /world$/.test("Say world"));               // true
console.log("test 5:", /\s/.test("no_space"));                    // false

// match()
console.log("match 1:", "foo123bar456".match(/\d+/g));            // ['123', '456']
console.log("match 2:", "no numbers here".match(/\d+/g));         // null
console.log("match 3:", "cat bat rat".match(/\w{3}/g));           // ['cat', 'bat', 'rat']
console.log("match 4:", "one two three".match(/\w+/g));           // ['one','two','three']
console.log("match 5:", "2025-09-22".match(/\d+/g));              // ['2025','09','22']

// matchAll()
const matchAllRegex = /(\w+): (\d+)/g;
const fruitsText = "apples: 10, oranges: 20, bananas: 5";
const allMatches = Array.from(fruitsText.matchAll(matchAllRegex));
console.log("matchAll 1:", allMatches[0]); // ['apples: 10', 'apples', '10']
console.log("matchAll 2:", allMatches[1]); // ['oranges: 20', 'oranges', '20']
console.log("matchAll 3:", allMatches[2]); // ['bananas: 5', 'bananas', '5']
console.log("matchAll length:", allMatches.length);                // 3
console.log("matchAll words:", allMatches.map(m => m[1]));        // ['apples','oranges','bananas']

// search()
console.log("search 1:", "hello world".search(/world/));           // 6
console.log("search 2:", "banana".search(/a/));                    // 1
console.log("search 3:", "no match".search(/z/));                  // -1
console.log("search 4:", "abc123".search(/\d/));                   // 3
console.log("search 5:", "find me".search(/me$/));                 // 5

// replace()
console.log("replace 1:", "cat bat rat".replace(/bat/, "mat"));    // "cat mat rat"
console.log("replace 2:", "123-456-789".replace(/\d+/, "X"));      // "X-456-789"
console.log("replace 3:", "one two three".replace(/\w+/, "num"));  // "num two three"
console.log("replace 4:", "foo bar baz".replace(/ba./, "qux"));    // "foo qux baz"
console.log("replace 5:", "hello world".replace(/world/, "JS"));   // "hello JS"

// replaceAll()
console.log("replaceAll 1:", "cat bat rat".replaceAll(/at/g, "oop"));      // "coop boop roop"
console.log("replaceAll 2:", "a1 b2 c3".replaceAll(/\d/g, "#"));           // "a# b# c#"
console.log("replaceAll 3:", "apple apple apple".replaceAll(/apple/g, "fruit")); // "fruit fruit fruit"
console.log("replaceAll 4:", "foo foo foo".replaceAll(/foo/g, "bar"));     // "bar bar bar"
console.log("replaceAll 5:", "red green blue".replaceAll(/\b\w{4}\b/g, "xxxx")); // "xxxx green xxxx"

// split()
console.log("split 1:", "one,two,three".split(/,/));               // ['one','two','three']
console.log("split 2:", "a b c".split(/\s/));                      // ['a','b','c']
console.log("split 3:", "apple|banana|cherry".split(/\|/));        // ['apple','banana','cherry']
console.log("split 4:", "2025-09-22".split(/-/));                  // ['2025','09','22']
console.log("split 5:", "x1y2z3".split(/\d/));                     // ['x','y','z','']