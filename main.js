/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];
for(let i = 0; i < students.length; i++){
  console.log(students[i]);
}


// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
grades.reverse();
for(let i = 0; i < grades.length; i++){
  console.log(grades[i]);
}


// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
let negNumbers = [];
for(let i = 0; i < positiveNumbers.length; i++){
  if((positiveNumbers[i] % 2) === 0){
    negNumbers.push(positiveNumbers[i]);
    console.log(positiveNumbers[i]);
  }
}


// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
let negMixedSignNumbers = [];
for(let i = 0; i < mixedSignNumbers.length; i++){
  if((mixedSignNumbers[i] % 2) === 0){
    negMixedSignNumbers.push(mixedSignNumbers[i]);
    console.log(mixedSignNumbers[i]);
  }
}


// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
const sliceStartIndex = 2;
const sliceEndIndex = 10;
const partialsymmetricalCapitals = symmetricalCapitals.slice(sliceStartIndex, sliceEndIndex);
console.log(partialsymmetricalCapitals);

// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.unshift(5000);
console.log(fibonacciNumbers);


// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
let newArray1 = [5, 10, 15, 20, 25];
for(let i = 0; i < newArray1; i++){
  newArray1.unshift(0);
  console.log(newArray1[i]);
}


// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const newArray2 = [1, 2, 3, 4, 5];
for(let i = 0; i < newArray2; i++){
  newArray2.unshift(0);
  newArray2.push(6);
  console.log(newArray2[i]);
}


// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
const students1 = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];
const sliceStartStudentIndex = 2;
const sliceEndStudentIndex = 11;
const partialstudents1 = students1.slice(sliceStartStudentIndex, sliceEndStudentIndex);
console.log(partialstudents1);



// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
const students2 = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];
const students3 = ['Tre', 'Sonny', 'Arnold', 'Andy'];
const student1 = students2.concat(students3);
const spliceStartStudent2Index = 2;
const spliceEndStudentsGroupIndex = 11;
const newGroup = students1.splice(sliceStartStudent2Index, sliceEndStudentsGroupIndex);
console.log(students1);



// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
const students4 = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];
const sliceStartStudentIndex1 = 3;
const sliceEndStudentsGroupIndex1 = 11;
const newGroup = students4.splice(sliceStartStudent3Index, sliceEndStudentsGroupIndex1);
console.log(newGroup);

// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
let dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
const spliceStartDinosaursIndex = 4;
const numItemsToRemoveDinosaurs = 6;
sandwich.splice(spliceStartDinosaursIndex, numItemsToRemoveDinosaurs);
console.log(dinosaurs);


// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
console.log(dinosaurs.join('*'));

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
dinosaurs.reverse();
console.log(dinosaurs);


// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
const priSec = primaries.concat(secondaries);
console.log(priSec);
