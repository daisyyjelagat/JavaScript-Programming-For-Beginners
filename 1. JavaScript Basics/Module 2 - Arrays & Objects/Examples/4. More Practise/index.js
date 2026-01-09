// Working with 1D Arrays
// 1.1 Transforming Data

const array_one = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const new_array_one = array_one.map((number) => number + 1);
console.log(new_array_one);

const filtered_array_one = array_one.filter((number) => number % 2 === 0);
console.log(filtered_array_one);
