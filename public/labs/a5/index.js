/* alert('Hello World!'); */

console.log('Hello World!');


console.log('Variables and Constants');
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1
    + functionScoped
    - blockScoped;
console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);


console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);


console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
let sortaTrue = '1' == 1
let notTrue   = '1' === 1

console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);
console.log(sortaTrue);
console.log(notTrue);


console.log('If else');
if(true1) {
  console.log(true);
}

if(!false1) {
  console.log('!false1');
} else {
  console.log('false1');
}


console.log('Ternary conditional operator');
let loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting);


console.log('Legacy ES5 function')
function add (a, b) {
  return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);



console.log('New ES6 arrow functions')
const subtract = (a, b) => {
  return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);


console.log('Implied Return')
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

const bold = "font-weight: bold";
const normal = "font-weight: normal";
console.log("%cParenthesis and parameters%c", bold, normal);
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

console.log("%cArrays%c", bold, normal);
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
  functionScoped,
  blockScoped,
  constant1,
  numberArray1,
  stringArray1
];
console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);


console.log("%cArray index and length%c", bold, normal);
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log(length1);
console.log(index1);

console.log("%cAdd and remove data to arrays%c", bold, normal);
// adding new items
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);


console.log("%cAdd and remove data to arrays%c", bold, normal);
// adding new items
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);