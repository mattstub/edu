/* ---------- WHEREFORE ART THOU ---------- 273 ---------- */
/*

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var keyList = Object.getOwnPropertyNames(source);
    console.log(keyList);
    arr = collection.filter(function(obj) {
        return keyList.every(function(key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
    console.log(arr);
    // Only change code above this line
    return arr;
}
console.log('Test 1');
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// first:Tybalt, last:Capulet
console.log('Test 2');
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
// a: 1, a: 1, a: 1 b: 2
console.log('Test 3');
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// a:1 b:2, a:1 b:2 c:2
console.log('Test 4');
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
// a:1 b:2 c:2
*/

/* ---------- SEARCH AND REPLACE ---------- 274 ---------- */
/*

function myReplace(str, before, after) {
    console.log('=== ORIGINAL ===');
    console.log('String: ' + str);
    console.log('Search: ' + before);
    console.log('Reset: ' + after);
    if (before[0] === before[0].toUpperCase()) {
        console.log('*** There is an Uppercase Letter present ***');
        after = after.replace(after[0], after[0].toUpperCase());
        console.log('Reset Revised: ' + after);
    }
    var newStr = str.replace(before, after);
    console.log('=== NEW STRING ===');
    console.log('New String: ' + newStr);
    console.log('=== END OF TEST CASE ===');
    return str;
}

console.log('Test 1');
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// A quick brown fox leaped over the lazy dog
console.log('Test 2');
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
// He is Sitting on the couch
console.log('Test 3');
myReplace("This has a spellngi error", "spellngi", "spelling");
// This has a spelling error
console.log('Test 4');
myReplace("His name is Tom", "Tom", "john");
// His name is John
console.log('Test 5');
myReplace("Let us get back to more Coding", "Coding", "algorithms");
// Let us get back to more Algorithms
*/

/* ---------- PIG LATIN ---------- 275 ---------- */
/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()
*/
/*
function translatePigLatin(str) {
    console.log('String: ' + str);
    var pig, regEx;
    regEx = /[aeiou]/gi;
    str = str.toLowerCase();
    if (str[0].match(regEx)) {
        pig = str + 'way';
        console.log('VOWEL ' + str[0] + ' FIRST -- Pig Latin: ' + str);
    } else {
        var index = str.indexOf(str.match(regEx)[0]);
        console.log('CONSONANT ' + str[0] + ' FIRST');
        pig = str.substr(index) + str.substr(0,index) + 'ay';
        console.log('VOWEL ' + str[index] + ' FOUND AT ' + index + ' -- Pig Latin: ' + pig);
    }
    return pig;
}

console.log('Test 1');
translatePigLatin("consonant");
// "onsonantcay"
console.log('Test 2');
translatePigLatin("california");
// "aliforniacay"
console.log('Test 3');
translatePigLatin("paragraphs");
// aragraphspay"
console.log('Test 4');
translatePigLatin("glove");
// "oveglay"
console.log('Test 5');
translatePigLatin("algorithm");
// "algorithmway"
console.log('Test 6');
translatePigLatin("eight");
// "eightway"
console.log('Test 7');
translatePigLatin("Stubenhofer");
// "ubenhoferstay"
*/

/* ---------- DNA PAIRING ---------- 276 ---------- */
/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Array.prototype.push()
String.prototype.split()
*/
/*
function pairElement(str) {
    var strands = {
        'A' : ['A', 'T'],
        'T' : ['T', 'A'],
        'C' : ['C', 'G'],
        'G' : ['G', 'C']
    };
    var temp = str.split('').map(function(obj) {
        strands[obj];
        console.log(strands[obj]);
    });
    return temp;
}

console.log('Test 1');
pairElement("GCG");
// [["G", "C"], ["C","G"],["G", "C"]]
console.log('Test 2');
pairElement("ATCGA");
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log('Test 3');
pairElement("TTGAG");
// [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log('Test 4');
pairElement("CTCTA");
// [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
console.log('Test 5');
pairElement("CACGTCAT");
// [[C,G],[A,T],[C,G],[G,C],[T,A],[C,G],[A,T],[T,A]]
*/

/* ---------- MISSING LETTERS ---------- 277 ---------- */
/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
String.prototype.charCodeAt()
String.fromCharCode()
*/
/*
function fearNotLetter(str) {
    console.log('String is ' + str);
    for (var count = 0; count < str.length; count++) {
        var current = str.charCodeAt(count);
        console.log('Char Code at ' + count + ' is ' + current);
        if (current !== (str.charCodeAt(0) + count)) {
            console.log('Char Code ' + current + ' is not in order');
            console.log('Missing Char is ' + String.fromCharCode(current - 1));
            return String.fromCharCode(current - 1);
        }
    }
    console.log('String is in order');
    return undefined;
}

console.log('Test 1');
fearNotLetter("abce");
// return "d"
console.log('Test 2');
fearNotLetter("abcdefghjklmno");
// return "i"
console.log('Test 3');
fearNotLetter("bcd");
// return undefined.
console.log('Test 4');
fearNotLetter("yz");
// return undefined.
*/

/* ---------- BOO WHO ---------- 278 ---------- */
/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Boolean Objects
*/
/*
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true || bool === false) {
      console.log('Yes, it is a boolean object!');
      return true;
  } else {
      console.log('No, it is not a boolean object!');
      return false;
  }
}

console.log('Test 1');
booWho(true);
// should return true.
console.log('Test 2');
booWho(false);
// should return true.
console.log('Test 3');
booWho([1, 2, 3]);
// should return false.
console.log('Test 4');
booWho([].slice);
// should return false.
console.log('Test 5');
booWho({ "a": 1 });
// should return false.
console.log('Test 6');
booWho(1);
// should return false.
console.log('Test 7');
booWho(NaN);
// should return false.
console.log('Test 8');
booWho("a");
// should return false.
console.log('Test 9');
booWho("true");
// should return false.
console.log('Test 10');
booWho("false");
// should return false.
*/

/* ---------- SORTED UNION ---------- 279 ---------- */
/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Arguments object
Array.prototype.reduce()
*/
/*
function uniteUnique(arr) {
    console.log(arguments);
    // Create new array to return, and an array of arguments to manipulate
    var flatArr = [], newArr = [].slice.call(arguments);
    // Combine all arrays from arguments into one array
    newArr = newArr.reduce(function(initial, current) {
        return initial.concat(current);
    });
    console.log("Arguments Array: " + newArr);
    for (var count = 0; count < newArr.length; count++) {
        var index = newArr[count];
        // if the value in current position is not present, add to array
        if (flatArr.indexOf(index) < 0) {
            // testing in console if something is not present
            console.log(index + " is not present!");
            flatArr.push(index);
        } else {
            // testing in console if something is present
            console.log(index + " is present!");
        }
    };
    console.log(flatArr);
    return flatArr;
}

console.log('Test 1');
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// should return [1, 3, 2, 5, 4].
console.log('Test 2');
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
// should return [1, 3, 2, [5], [4]].
console.log('Test 3');
uniteUnique([1, 2, 3], [5, 2, 1]);
// should return [1, 2, 3, 5].
console.log('Test 4');
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
// should return [1, 2, 3, 5, 4, 6, 7, 8].
*/

/* ---------- CONVERT HTML ENTITIES ---------- 280 ---------- */
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
RegExp
HTML Entities
String.prototype.replace()
*/
/*
function convertHTML(str) {
    // &colon;&rpar;
    var entities = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];
    var reg = [/&/g, /</g, />/g, /\"/g, /\'/g];
    console.log('New String: ' + str);
    for(var count = 0; count < entities.length; count++) {
        str = str.replace(reg[count], entities[count]);
    };
    console.log('Completed String: ' + str);
    return str;
}

convertHTML("Dolce & Gabbana");
// should return Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos");
// should return Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve");
// should return Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"');
// should return Stuff in &quot;quotation marks&quot;.
convertHTML("Shindler's List");
// should return Shindler&apos;s List.
convertHTML("<>");
// should return &lt;&gt;.
convertHTML("abc");
// should return abc.
*/

/* ---------- SPINAL TAP CASE ---------- 281 ---------- */
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
RegExp
String.prototype.replace()
*/
/*
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    // the regWhite expression will look white spaces and underscores to later replace with dashes
    // the regUpper expression will look for upper case letters following lower case letters
    var regWhite = /\s+|_+/g;
    var regUpper = /([a-z])([A-Z])/g;
//    console.log('Orginal String: ' + str);
//    str = str.replace(regUpper, '$1 $2').replace(regWhite, '-').toLowerCase();
//    console.log('String Split: ' + str);
//    str = str.replace(regWhite, '-').toLowerCase();
//    console.log('String Dashed: ' + str);
    return str.replace(regUpper, '$1 $2').replace(regWhite, '-').toLowerCase();
}

spinalCase("This Is Spinal Tap");
// should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap"); 
// should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); 
// should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh"); 
// should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things"); 
// should return "all-the-small-things".
spinalCase("AllThe____small-things  together      at_last");
// should return "all-the-small-things-together-at-last"
*/

/* ---------- SUM ALL ODD FIBONACCI NUMBERS ---------- 282 ---------- */
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Remainder
*/
/*
function sumFibs(num) {
    var fib1 = 0, fib2 = 1, results = 0, iteration = 1;
    console.log('Input Number: ' + num);
//    function displayTest() {
//       console.log("---------------------");
//       console.log('Iteration: ' + iteration);
//       console.log("Fibonacci 1: " + fib1);
//       console.log("Fibonacci 2: " + fib2);
//    };
//    displayTest();
    while (fib2 <= num) {
        if (fib2 % 2 !== 0) {
            results += fib2;
//            console.log("Number is Odd! Added to Results!");
//            console.log('Total: ' + results);
        }
        fib2 += fib1;
        fib1 = fib2 - fib1;
//        iteration++;
//        displayTest();
    } 
    console.log('Results: ' + results);
    return results;
}

sumFibs(1); 
// should return a number.
sumFibs(1000);
// should return 1785.
sumFibs(4000000);
// should return 4613732.
sumFibs(4);
// should return 5.
sumFibs(75024);
// should return 60696.
sumFibs(75025);
// should return 135721.
*/

/* ---------- SUM ALL PRIMES ---------- 283 ---------- */
/*
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
For Loops
Array.prototype.push()
*/
/*
function sumPrimes(num) {
    var ptc, i, j, primes = [];
    function primeTest(temp) {
        for (ptc = 2; ptc < temp; ptc++)
            if (temp % ptc === 0) return false;
        return temp !== 1;
    }
    for (i = 2; i <= num; i++)
        if(primeTest(i))
            primes.push(i);
    function sumAll(total, current) {
        return total + current;
    }
    //console.log("List of Primes: " + primes);
    //console.log("Sum of Primes: " + primes.reduce(sumAll));
    return primes.reduce(sumAll);
}

sumPrimes(10);
// should return 17.
sumPrimes(977);
// should return 73156.
sumPrimes(35);
*/

/* ---------- Smallest Common Multiple ---------- 284 ---------- */
/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Smallest Common Multiple
*/
/*
function smallestCommons(arr) {
    var lcm = 0, num, count = 1, newArr = [];
    // Sort the array from highest value to lowest value, limit the amount of iterations this way
    arr.sort(function(a, b) {
        return b - a;
    });
    // Fill a new array of values highest to lowest between the original two values given
    for(i = arr[0]; i >= arr[1]; i--)
        newArr.push(i);
    //console.log("ARRAY: " + newArr);
    do {
        lcm = newArr[0] * count * newArr[1];
        //console.log("LCM: " + lcm);
        for (num = 2; num < newArr.length; num++) {
            temp = lcm % newArr[num];
            if (temp !== 0) {
                break;
            }
            //console.log(lcm + " % " + num + " = " + temp);
        }
        count++;
    } while (num < newArr.length);
    //console.log("LCM: " + lcm);
    return lcm;
}

smallestCommons([1, 5]);
// should return 60.
smallestCommons([5, 1]);
// should return 60.
smallestCommons([1, 13]);
// should return 360360.
smallestCommons([23, 18]);
// should return 6056820.
smallestCommons([13, 1]);
// should return 360360.
*/

/* ---------- Finders Keepers ---------- 285 ---------- */
/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Array.prototype.filter()
*/
/*
function findElement(arr, func) {
    var temp = arr.filter(func);
    // console.log(temp); <-- returns 8,0 (Test_1) and 0 (Test_2)
    return temp[0];
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
// should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
// should return undefined.
*/

/* ---------- Drop It ---------- 286 ---------- */
/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
Return the rest of the array, otherwise return an empty array.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Arguments object
Array.prototype.shift()
Array.prototype.slice()
*/
/*
function dropElements(arr, func) {
    //console.log(arr);
    var index = arr.findIndex(func);
    //console.log(index);
    if (index < 0)
        return [];
    arr.splice(0, index);
    return arr;
    //console.log(arr);
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
// should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;});
// should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;});
// should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;});
// should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});
// should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
// should return [3, 9, 2].
*/

/* ---------- Steamroller ---------- 287 ---------- */
/*
Flatten a nested array. You must account for varying levels of nesting.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Array.isArray()
*/
/*
function steamrollArray(arr) {
    return arr.reduce(function(rolled, toRoll) {
        return rolled.concat(Array.isArray(toRoll) ? steamrollArray(toRoll) : toRoll);
    }, []);
}

steamrollArray([[["a"]], [["b"]]]);
// should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]);
// should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]);
// should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]);
// should return [1, {}, 3, 4].
*/

/* ---------- Binary Agent ---------- 288 ---------- */
/*
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
String.prototype.charCodeAt()
String.fromCharCode()
*/
/*
function binaryAgent(str) {
    //var bin = String.fromCharCode(parseInt(str,2));
    //console.log(bin);
    var splitArr = str.split(' ');
    return splitArr.map(function(cur) {
        return String.fromCharCode(parseInt(cur,2));
    }).join('');
    //console.log(binaryArr);
    //var statement = binaryArr.join('');
    //console.log(statement);
    //return binaryArr.join('');
}

//binaryAgent("01110010");
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
// should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
// should return "I love FreeCodeCamp!"
*/

/* ---------- Local Weather Zipline ---------- 289 ---------- */
/* https://mtub.github.io/fcc-localweather */

/* ---------- Everything Be True ---------- 290 ---------- */
/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
Remember, you can access object properties through either dot notation or [] notation.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
/*
function truthCheck(collection, pre) {
    for (var count = 0; count < collection.length; count++) {
        if (!collection[count][pre]) {
            //console.log('FALSE');
            return false
        } else {
            //console.log('TRUE');
        }
    }
    return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
// should return true.
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
// should return false.
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
// should return false.
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");
// should return false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");
// should return true
truthCheck([{"single": "yes"}], "single");
// should return true
truthCheck([{"single": ""}, {"single": "double"}], "single");
// should return false
truthCheck([{"single": "double"}, {"single": undefined}], "single");
// should return false
truthCheck([{"single": "double"}, {"single": NaN}], "single");
// should return false
*/

/* ---------- Arguments Optional ---------- 291 ---------- */
/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Closures
Arguments object
*/

function addTogether() {
    //console.log('---------------------');
    //console.log('--> NEW TEST CASE <--');
    var verifyNum = function(value) {
        if (typeof value === 'number') {
            //console.log(value);
            return value;
        } else {
            console.log('--> VERIFICATION FAILED <--');
            return undefined;
        }
    }
    //console.log('LENGTH: ' + arguments.length);
    //console.log(arguments[0]);  // returns value of 2 (in first test case) -- returns value of 2 (in second test case)
    //console.log(arguments[1]);  // returns value of 3 (in first test case) -- returns undefined (in second test case)(throws an error)
    // if there are 2 valid arguments the function will work properly, if only one the program throws an error
    if (arguments.length > 1) {
        if (verifyNum(arguments[0]) !== undefined && verifyNum(arguments[1]) !== undefined) {
            //console.log('SUM: ' + (arguments[0] + arguments[1])); // returns value of 5 (if statement works properly when two numbers are passed)(throws error on second test case)
            return arguments[0] + arguments[1];
        } else {
            console.log('--> UNDEFINED <--');
            return undefined;
        }
    } else {
        // originally tried to solve without using a value initialized outside the return function
        // in the second test case I was adding 3 + 3, because arguments[0] had changed from 2 to 3
        var initial = arguments[0];
        if (verifyNum(initial)) {
            console.log('--> ARGUMENTS[0] VERIFIED');
            return function(val) {
                if (initial !== undefined && verifyNum(val) !== undefined) {
                    //console.log('--> VALUE IS VERIFIED');
                    //console.log(initial);
                    //console.log(val);
                    //console.log('SUM: ' + (initial + val));
                    return arguments[0] + val;
                } else {
                    //console.log('--> ARGUMENT[1] IS UNDEFINED <--');
                    return undefined;
                }
            }; 
        };
    };
 };

  addTogether(2, 3);
  // should return 5.
  // sum returned is 5, all verifications pass
  addTogether(2)(3);
  // should return 5.
  addTogether("http://bit.ly/IqT6zt");
  // should return undefined.
  // number verification fails on arguments[0]
  addTogether(2, "3");
  // should return undefined.
  // number verification fails on arguments[1]
  addTogether(2)([3]);
  // should return undefined.
  // number verification fails on arguments[1]