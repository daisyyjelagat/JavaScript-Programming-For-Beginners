// JS provide methods to perform various operations on arrays like adding, removing, and iterating over elements without writing code

// push () - add one or more elements and returns the arrays new length
const fruits = ['apple', 'banana', 'cherry'];
fruits.push('date', 'elderberry');
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry', 'date', 'elderberry' ]

// pop () - removes the last element from an array and returns that element
const lastFruit = fruits.pop();
console.log(lastFruit); // Output: elderberry
console.log('Fruits are: ' +    fruits); // Output: Fruits are: apple,banana,cherry,date
console.log('Removed Fruit is: ' + lastFruit); // Output: [ 'apple', 'banana', 'cherry', 'date' ]

// shift () - removes the first element from an array and returns that element  
const firstFruit = fruits.shift();
console.log(firstFruit); // Output: apple

//unshift () - adds one or more elements to the beginning of an array and returns the new length of the array
const newLength = fruits.unshift('fig', 'grape');
console.log(fruits); // Output: [ 'fig', 'grape', 'banana', 'cherry', 'date' ]

//splice () - adds/removes/replacing elements from an array at a specific index
const fruits2 = ['apple', 'banana', 'cherry'];
console.log(fruits2);

fruits2.splice(1,1, 'grape'); //replaces the second element with grape
console.log(fruits2);

//concat - combines two or more arrays without modifying the original ones
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const combinedArray = array1.concat(array2);
console.log(combinedArray); // Output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]

//slice - returns a shallow copy of a portion of an array into a new array object without modifying the original array
console.log(fruits);
const slicedFruits = fruits.slice(1,3); // creates a new array with index 1 to 2 (not including three)
console.log('sliced fruits are: ', slicedFruits)
console.log(fruits)

//indexOf - finds the index of a specific element in an array, returns the first occurence of element or -1 if not found
const index = fruits.indexOf('banana') //returns the first occurence of banana
if (index === -1) {
    console.log('Element not found in the array');
}  else {
    console.log('Element found at index: ', index);
}

// reverse method - reverses the order of elements in an array effectively reversing the array
console.log(fruits)
const reverseFruits = fruits.reverse();
console.log('Reversed fruits: ', reverseFruits);

//sort - used to sort the elements in an array. By default it sort element in lexicographical order
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log('Sorted numbers: ', numbers);
// to sort numbers correctly provide a comparison function
numbers.sort((a,b) => a - b); //sort in assending order
console.log(numbers.reverse()); //sort in descending order

// expanding an array using length 
console.log(fruits);
console.log(fruits.length);
fruits.length = 10; // expands the array to length 10
console.log(fruits); // 
// truncating an array using length 
fruits.length = 3; // truncates the array to length 3
console.log(fruits); // 

// Iterating Through Array