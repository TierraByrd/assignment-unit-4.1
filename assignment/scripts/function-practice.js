console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('Test - should say "Hello, Tierra!"', helloName('Tierra'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
   return firstNumber + secondNumber;
}  
console.log('Test - should add the firstNumber(37653) with the second Number(76358): ', addNumbers(37653,76358));
console.log('Test - adding: 64, 21', addNumbers(64, 12));
console.log('Test - adding: 5, (-81)', addNumbers(5, (-81)));
// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
return firstNumber * secondNumber * thirdNumber;
}
console.log('Test - multiplying three numbers: 1234, 5678, 91011 ', multiplyThree(1234, 5678, 91011));
console.log('Test- Multiplying three numbers: 3,7, 21:', multiplyThree(3, 7, 21));
// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Test - Is the number (56) positive?', isPositive(56));
console.log('Test - Is the number (-13) positive?', isPositive(-13));
console.log('Test - Is the number (-69) positive?', isPositive(-69));
console.log('Test - Is the number (18) positive?', isPositive(18));
console.log('Test - Is the number (-405) positive?' , isPositive(-405));
// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
if (array.length===0){
  return undefined;
}
else{
  return array[array.length-1];
}
}
console.log('Last Item in the array[1, 2, 3, 4, 5] is: ', getLast([1,2,3,4,5]));
console.log('Last Item in the array[a, b, c, d, e] is: ', getLast(['a', 'b', 'c', 'd', 'e']));
console.log('Last Item in the array[blue, yellow, white, orange, green] is: ', getLast(['blue', 'yellow', 'white', 'orange', 'green']));
console.log('Last Item in the array[penny, nickel, dime, qurater] is: ', getLast(['penny', 'nickel', 'dime', 'quarter']));
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
for (let i=0; i < array.length; i++ ){
  if (array[i]===value) {
    return true;
  }
}
return false;
}
console.log('Test - is the value 3 found in the array[1, 2, 3, 4, 5]: ', find(3,[1, 2, 3, 4, 5]));
console.log('Test - is the value 12 found in the array[1, 2, 3, 4, 5]: ', find(12,[1, 2, 3, 4, 5]));
console.log('Test - is the value 2 found in the array[1, 2, 3, 4, 5]: ', find(2,[1, 2, 3, 4, 5]));
console.log('Test - is the value 6 found in the array[1, 2, 3, 4, 5]: ', find(6,[1, 2, 3, 4, 5]));
console.log('Test - is the value tracy found in the array[John, Ashley, Terry, Sarah]: ', find('Tracy',['John', 'Adhley', 'Terry', 'Sarah']));
console.log('Test - is the value Sarah found in the array[John, Ashley, Terry, Sarah]: ', find('Sarah',['John', 'Adhley', 'Terry', 'Sarah']));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
if (letter===string[0]) {
  return true;
} else {
  return false;
}
}

console.log('The first letter in the string should be "" ', isFrstLetter("n", 'not today'));
// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}