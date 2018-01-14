# freeCodeCamp Sandbox
This sandbox was created as a way to run freeCodeCamp lessons outside of the built in browser IDE.

# 28 July 2017
FCC -- Wherefore Art Thou -- 273  
FCC -- Search and Replace -- 274  

# 29 July 2017
FCC -- Pig Latin -- 275  
FCC -- DNA Pairing -- 276  
[Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)  
[Array.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)  
[Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)  
- At the beginning of writing this function I started writing a SWITCH statement for use cases, but one of the things I don't do enough of with Javascript is utilize the given methods. So reading through the documentation of the MAP method it made more sense to utilize this instead of a SWITCH statement and FOR loop.
- The string is split into an array, the map function runs through each item in the array and pushes the strand value into the temp value. it also console.log's the object to make sure it's working property and then returns the array of objects.
- There is probably a better way to clean up the code and return the item at the time of instantiation but I will look into that later possibly.
  
# 30 July 2017
FCC -- Missing Letters -- 277  
[String.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)  
[String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)  
- Initialing working through this code I ran a console.log of the values received from the charCodeAt() method. Once I was able to visualize the numbers I could work through piecing together the IF/ELSE and RETURN statements.
- If the string is in order it passes over the IF statement, exits the FOR loop and will RETURN undefined. To verify this a console.log was put in place
  
FCC -- Boo Who -- 278  
[Boolean Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)  
- This lesson was pretty straight forward, test if the object passed was a boolen. Wrapped up in an IF/ELSE statement, may work on later to wrap in TERNARY OP.
- Utilized console.log to test the IF/ELSE statement before returning objects.
  
# 1 August 2017
FCC -- Sorted Union -- 279  
[Argument Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)  
[Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)  
[Array.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)  
[Array.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)  
- First things first, to understand how the ARGUMENT object worked I set up a simple console.log of the ARGUMENT object to see what kind of information it returned. Further reading of how to convert an ARGUMENT object with a bunch of arrays is shown to use slice.call method
- Then merged the multiple arrays presented by the ARGUMENT object and reduced them into one array using the REDUCE & CONCAT methods
- Created a FOR loop to pass through each iteration of the array to test if it was present in the array already, if it was not we PUSH'd the object into a new array called flatArr which was returned at the end of the function
  
# 5 August 2017
FCC -- HTML Entities -- 280  
[HTML Entities](https://dev.w3.org/html5/html-author/charref)  
[String.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)  
- wanted to output the original string just to verify things were pasing correctly  
- created two arrays to match each other in lieu of using REGEXP  
- looped through the string based on the entities array length and checked each iteration against an array  
- returned a recomposed array with proper entities
  
FCC -- Spinal Tap Case -- 281  
[String.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)  
[Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)  
- created two different reg expressions to handle the two different items we needed to replace  
  - the first was to search for any length of white spaces or underscores to later replace them with 1 dash per grouping (-)  
  - the second was to search for any upper case letter immediately following a lower case and then add a white space between  
- I called two replace methods to handle the varying reg expressions and then called toLowerCase to remove all upper case letters  
  - the first replace method called the second expression to add a white space between upper and lower  
  - the second replace method called the first expression to turn whitespaces and underscores into dashes
  
# 6 August 2017
FCC -- Sum All Odd Fibonacci Numbers -- 282  
[Fibonacci Number](https://en.wikipedia.org/wiki/Fibonacci_number)  
[Remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder)  
- to understand this i had to refresh with the Fibonacci Wiki, then initialize 3 variables for handle the the sequence  
- fib2 is tested to see if the number is even or odd, if odd it adds the number to the results  
- the sequence steps through by adding the previous number (fib1) to the current number (fib2) and walks through a loop as long as the current number is less than or equal to the number being tested against  
- return results in the end which is where all of the odd fib2's get summed
  
# 9 August 2017
FCC -- Sum All Primes -- 283  
[Testing Primality](https://en.wikipedia.org/wiki/Prime_number#Testing_primality_and_integer_factorization)  
[Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)  
[Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)  
[An Index of Prime Numbers](http://primos.mat.br/indexen.html)  
- To make sure I was clear on what it would take to make a primer number I read a blurp about testing primality on Wiki.  
- I ran a couple different console logs on different loop structures before ultimately wiping them out and starting again.  
- Utilize the index of prime numbers to help determine other testing sequences.  
- Build an array of prime numbers less than the number passed, utilize push to place them in the array once determined they are prime.  
- Utilize the reduce method to calculate a sum of the array.  
  
FCC -- Smallest Common Multiple -- 284  
[Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)  
[Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)  
- Sort the two items in reverse order to limit the amount of iterations required.  
- Develop a new array of values between the original two items given, highest to lowest.  
- Find the lowest common multiple of the two highest values, cycle through the remaining values to see if there is a match.  
  - Achieve this with nested IF (if lcm divided by array value has a remainder than break, restart loop)  
  - When the IF statement does not break, it will check the value of the DO WHILE loop to make sure we have not reached all possibilities  
  - if the while statement is still valid, test all values against the second common multiple of the two highest values and start again.  
  
# 11 August 2017
FCC -- Finders Keepers -- 285  
[Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)  
- The documentation on the filter method lays out a quick simple answer.  
- Filter method returns all results of the array that pass the test function that is passed, in our case that is written for us.  
- On the first test sequence I called the filter method on the passed array and passed function, and put the results in a temp variable and printed them to the console.  
- After that point it was easy to see we just needed to return the first value of the temp array value to pass the requirements  
  
FCC -- Drop It -- 286
[Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)  
[Array.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)  
- First utilized findIndex method with the passed function to see at what point the test passed. console.log'd the results to manipulate my future manipulation  
- setup an if statement to return a blank array if the test does not pass  
- utilized the index found and the splice method to remove all items before the index  
- returned the spliced array  
  
# 12 August 2017
FCC -- Steamroller -- 287  
[Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)  
[Array.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)  
[Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)  
[Conditional (ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)  
- I decided to use the reduce method, to cycle through and concatenate the multiple arrays that could be possible  
- with the callback function we used a "rolled" array which was a single array, and used a ternary operator to decide if the array was an array.  
- If the object to be concatenated was an array, it would cycle one step deeper on itself.  
- If the object was a value it would concatenate into the "rolled" array.  
  
FCC -- Binary Agents -- 288  
[Learn to Read Binary](https://www.youtube.com/watch?v=NH-3dUk2IMM)  
[String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)  
[String.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)  
[Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)  
[Array.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)  
[parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)  
- To get a basic understanding of how to translate binary, I watched a youtube video to understand how to get a character out of the string.  
- To test fromCharCode I created a single letter test case and console logged the result. Thankfully parseInt does the dirty work on computing the binary character.  
- In a full use case, split the string into an array, and then map the array with the fromCharCode & parseInt section written originally.  
- Join the array into a string and return. to condense code just return the array joined so that you don't have to initialize another variable  
- Lastly one step to condense code, remove the variable initilization and return the str joined after the map function completes  
  
# 18 August 2017
FCC -- Everything be True -- 290  
- Originally I was trying to access the objects with a mixture of bracket and dot notation which was not allowing it to work properly  
- This is just a simple check through the array with a for loop, and an IF statement that returns false if parameters are not met  
- If the for loop completes that means all instances are true, and will return true  
- I left the else statement with the console.log in place just commented out to show how I tested my IF & FOR  
  
FCC -- Arguments Optional -- 291  
[TypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)  
[Arguments Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)  
- Started out initially running 2 of the test cases to make sure the functions worked properly if the first given test case was actually two numbers.  
- When there was not two numbers I had to add the else statement to handle the second argument.  
- Initially I was trying to call arguments[0] twice because it was looping on itself on the callback function. Once I realized that I had to initialize a value before the callback so that it would not alter on the pass through  
- Once that was estabished the other test cases were easy verification to make sure the object was a number or not.  
