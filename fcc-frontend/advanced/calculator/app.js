// BASIC VARIABLES
var value1 = '',
    value2 = '',
    tempNumber = '', 
    current = '', 
    operator = '';

// BOOLEAN VARIABLES
var decimalStored = false,
    numberStored = false,
    operatorStored = false;

// DOM VARIABLES
const display = $('.display-text');

var calculateValues = function() { 
    value2 = parseFloat(tempNumber);
    console.log(`Value One is ${value1} and Value Two is ${value2}. They will be calculated based on ${operator}`);
    if(operator == '+')
        value1 += value2;
    else if(operator == '-')
        value1 -= value2;
    else if(operator =='X')
        value1 *= value2;
    else if(operator == '/')
        value1 /= value2;
    display.html(value1);
    tempNumber = '';
    decimalStored = false;
}   

function allClear() {
    value1 = '';
    value2 = '';
    tempNumber = '';
    current = '';
    previous = '';
    operator = '';
    decimalStored = false;
    operatorStored = false;
    display.html(0);
    console.log(`All Clear Executed!`);
}

function clearEntry() {
    current = '';
    display.html(0);
    console.log(`Clear Entry Executed!`);
}



$(document).ready(function() {
    // NUMBER EVENT
    $('.number').click(function() {
        numberStored = true;
        current = $(this).html();
        if(current == '.' && !decimalStored && tempNumber == undefined) {
            tempNumber = '0.';
            decimalStored = true;
        } else if(current == '.' && !decimalStored) {
            tempNumber += current;
            decimalStored = true;
        } else {
            tempNumber += current;
        }
        display.html(tempNumber);
    });

    // OPERATOR EVENT
    $('.operator').click(function() {
        if(numberStored) {
            current = $(this).html();
            if(!operatorStored) {
                value1 = parseFloat(tempNumber);
                tempNumber = '';
                decimalStored = false;
                operatorStored = true;
                operator = current;
            } else if(operatorStored) {
                calculateValues();
                operator = current;
            }
        } else {
            display.html(`Need Number First!`);
        }
    }); 

    // EQUALS EVENT
    $('.equals').click(calculateValues);

    // CLEAR EVENTS
    $('.clear-entry').click(clearEntry);
    $('.all-clear').click(allClear);
});
