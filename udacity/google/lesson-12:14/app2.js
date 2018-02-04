// Test Cases
// const shirtWidth = 19, shirtLength = 28, shirtSleeve = 8.21;
// should return 'S'

// const shirtWidth = 26, shirtLength = 33, shirtSleeve = 9.63;
// should return '2XL'

// const shirtWidth = 18, shirtLength = 29, shirtSleeve = 8.47;
// should return 'N/A'

// const shirtWidth = 23, shirtLength = 30,  shirtSleeve = 8.71;
// should return 'L'

// All test cases passing within defined parameters

let temp = undefined;

if(shirtWidth < 20 && shirtWidth >= 18) {
  if(shirtLength == 28)
    if(shirtSleeve >= 8.13 && shirtSleeve < 8.38)
      temp = 'S';
} else if(shirtWidth < 22 && shirtWidth >= 20) {
  if(shirtLength == 29) 
    if(shirtSleeve >= 8.38 && shirtSleeve < 8.63) 
      temp = 'M';
} else if(shirtWidth < 24 && shirtWidth >= 22) {
  if(shirtLength == 30) 
    if(shirtSleeve >= 8.63 && shirtSleeve < 8.88) 
      temp = 'L';
} else if(shirtWidth < 26 && shirtWidth >= 24) {
  if(shirtLength >= 31 && shirtLength < 33) 
    if(shirtSleeve >= 8.88 && shirtSleeve < 9.63) 
      temp = 'XL';
} else if(shirtWidth < 28 && shirtWidth >= 26) {
  if(shirtLength == 33) 
    if(shirtSleeve >= 9.63 && shirtSleeve < 10.13) 
      temp = '2XL';
} else if(shirtWidth == 28) {
  if(shirtLength == 34) 
    if(shirtSleeve >= 10.13) 
      temp = '3XL';
}

if(temp === undefined) 
  temp = 'N/A';

console.log(temp);
