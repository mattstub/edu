/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
  let temp = '';
  for (let i = 0; i < num; i++)
    temp += 'ha';
  return `${temp}!`;
}

console.log(laugh(10));
