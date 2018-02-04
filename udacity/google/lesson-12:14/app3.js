// Test Cases
// const shirtWidth = 19, shirtLength = 28, shirtSleeve = 8.21;
// should return 'S'

// const shirtWidth = 26, shirtLength = 33, shirtSleeve = 9.63;
// should return '2XL'

// const shirtWidth = 18, shirtLength = 29, shirtSleeve = 8.47;
// should return 'N/A'

// const shirtWidth = 23, shirtLength = 30,  shirtSleeve = 8.71;
// should return 'L'

// Code that finally passed over the if/else statement from app2.js
// The format did not like the introduction of another variable and nested loops

if((shirtWidth < 20 && shirtWidth >= 18) && 
   (shirtLength >= 28 && shirtLength < 29) && 
   (shirtSleeve >= 8.13 && shirtSleeve < 8.38))
      console.log('S');
else if((shirtWidth < 22 && shirtWidth >= 20) && 
        (shirtLength >= 29 && shirtLength < 30) && 
        (shirtSleeve >= 8.38 && shirtSleeve < 8.63))
      console.log('M');
else if((shirtWidth < 24 && shirtWidth >= 22) && 
        (shirtLength >= 30 && shirtWidth < 31) && 
        (shirtSleeve >= 8.63 && shirtSleeve < 8.88))
      console.log('L');
else if((shirtWidth < 26 && shirtWidth >= 24) && 
        (shirtLength >= 31 && shirtLength < 33) && 
        (shirtSleeve >= 8.88 && shirtSleeve < 9.63))
      console.log('XL');
else if((shirtWidth < 28 && shirtWidth >= 26) && 
        (shirtLength >= 33 && shirtLength < 34) && 
        (shirtSleeve >= 9.63 && shirtSleeve < 10.13))
      console.log('2XL');
else if((shirtWidth >= 28) && 
        (shirtLength >= 34) && 
        (shirtSleeve >= 10.13))
      console.log('3XL');
else 
  console.log('N/A');
