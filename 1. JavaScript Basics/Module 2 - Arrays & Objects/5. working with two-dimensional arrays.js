// a 2d array is a collection of elements organized in rows and columns. 
const grid = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// to access an individual element in a 2d array, you need to specify the row and column index
console.log(grid[1][2])

// iterating through a 2d array using nested loops
for (let i = 0; i < grid.length; i++) { // iterates through inner rows
    for (let j = 0; j < grid[i].length; j++) { // iterates through each columns
        console.log(`Element at row ${i} and column ${j} is: ${grid[i][j]}`);
    }
}