/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

let num = 99;
let container1 = `bottles`;
let container2 = `bottles`;

while (num > 0) {
  let temp = num;
  if (temp === 1)
    container1 = `bottle`;
  else 
    container1 = `bottles`;
  let string1 = `${temp} ${container1} of juice on the wall! ${temp} ${container1} of juice! Take one down, pass it around...`;
  num--;
  if (num === 1)
    container2 = `bottle`;
  else
    container2 = `bottles`;
  let string2 = `${num} ${container2} of juice on the wall!`;
  console.log(`${string1} ${string2}`);
}
