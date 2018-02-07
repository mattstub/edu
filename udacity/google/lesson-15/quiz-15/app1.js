Create a function called hasEnoughPlayers() that takes the team array as an argument and 
returns true or false depending on if the array has at least seven players.
/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here
function hasEnoughPlayers(quid) {
  return quid.length >= 7;
}
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
