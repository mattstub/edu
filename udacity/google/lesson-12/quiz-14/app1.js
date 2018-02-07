// Test Cases
// const shirtWidth = 19, shirtLength = 28, shirtSleeve = 8.21;
// should return 'S'

// const shirtWidth = 26, shirtLength = 33, shirtSleeve = 9.63;
// should return '2XL'

// const shirtWidth = 18, shirtLength = 29, shirtSleeve = 8.47;
// should return 'N/A'

// const shirtWidth = 23, shirtLength = 30,  shirtSleeve = 8.71;
// should return 'L'

const selection = { width: undefined, length: undefined, sleeve: undefined }

const shirts = [
  { size: 'S',   width: 18, length: 28, sleeve:  8.13 },
  { size: 'M',   width: 20, length: 29, sleeve:  8.38 },
  { size: 'L',   width: 22, length: 30, sleeve:  8.63 },
  { size: 'XL',  width: 24, length: 31, sleeve:  8.88 },
  { size: '2XL', width: 26, length: 33, sleeve:  9.63 },
  { size: '3XL', width: 28, length: 34, sleeve: 10.13 }
]

function calculateWidth(dimension) {
  selection.width = undefined
  shirts.forEach(current => {
    if(dimension == current.width || dimension == current.width + 1)
      selection.width = current.size
  })
}

function calculateLength(dimension) {
  selection.length = undefined
  shirts.forEach(current => { 
    if(dimension === current.length)
      selection.length = current.size
  }) 
}

function calculateSleeve(dimension) {
  selection.sleeve = undefined;
  for(let i = shirts.length - 1; i >= 0; i--) {
    if(dimension === shirts[i].sleeve)
      selection.sleeve = shirts[i].size;
    else if(dimension <= shirts[i].sleeve && dimension > shirts[i-1].sleeve)
      selection.sleeve = shirts[i-1].size;
  }
}

function calculateSize() {
  calculateWidth(shirtWidth);
  calculateLength(shirtLength);
  calculateSleeve(shirtSleeve);
  const temp = selection.width;
  if(selection.width == selection.length && selection.length == selection.sleeve)
    shirts.forEach(current => {
      if(temp == current.size)
        console.log(temp);
    })
  else
    console.log('N/A');
}
