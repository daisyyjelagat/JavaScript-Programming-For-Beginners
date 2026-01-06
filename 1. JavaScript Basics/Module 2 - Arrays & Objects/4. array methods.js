// Array methods are built-in functions that simplify common operations for example: iterating through elements, filtering elements based on conditions, transforming elements, aggregating values and searching through data

// forEach - iterates through an array and applies the provided function to each element useful for performing specific actions on each element without returning a new array
// for example, sending an email to each user

function sendEmailtoEachUser (email) {
    console.log(`Wlecome email sent to ${email} `) // function for iterating - sending the email - it logs an email to connsole for each email
}
const users = [
    { name: 'Alice', email: 'alice@example.com'}, // user data that has been collected
    { name: 'Bob', email: 'bob@example.com'},
    { name: 'Daisy', email: 'daisy@example.com'},
]
// this is a function that takes the current user object as a parameter
users.forEach((user) => { // this iterates through the array and for Each user calls the sendEmail.. function
    sendEmailtoEachUser (user.email) 
})

// map - this creates a new array by performing a provided function to each element in the original array
// for example: let's extract the price of products from a list of products 
const products = [
    {name: 'oil', price: 1000}, 
    {name: 'tomato', price: 300}, 
    {name: 'pen', price: 10},
]
products.map((product) => { // constructs and logs the message for each price for each product
    console.log(product.name + ": " + product.price)
})

// filter - creates a new array of elements that pass a specified condition for extracting specific data from an array
// Example One: filter books published in the last five years
const books = [
    {name: 'book 1', year: 2005}, 
    {name: 'book 2', year: 2008},
    {name: 'book 2', year: 2007},
    {name: 'book 2', year: 2004},
    {name: 'book 2', year: 2003},
]

let currentYear = 2010

function filterBooksByYear() {
    return books
    .filter((book) => book.year <= currentYear - 5) // filters through an identifies the elements(both book and year) that were published before 5 years
    .map((book) => book.name) // extracts the names of the books from what has been filters and puts it into a new array
}
console.log(filterBooksByYear())

//Example2: 
// from an array of items, filter out products as per the price range.. 

const items = [ 
    {name: 'laptop', price: 1000},
    {name: 'smartphone', price: 500},
    {name: 'tablet', price: 300},
    {name: 'monitor', price: 250},
    {name: 'keyboard', price: 50},
]
const minPrice = 100; 
const maxPrice = 500;
function filterProductsByPriceRange (items, minPrice, maxPrice) {
    return items
    .filter((item) => item.price >= minPrice && item.price <= maxPrice);
}

const filteredItems = filterProductsByPriceRange(items, minPrice, maxPrice);

filteredItems.forEach((item) => {
    console.log(item.name + " : " + item.price)
})

// reduce - reduce an array to a single value by applying a function to each element and is good for aggregating data:
// an array of order prices and we want to aggregate the total order value: 
const orderPrices = [50, 30, 20, 100, 80];

const totalOrderValue = orderPrices.reduce((total, price) => total + price, 0);
console.log("the total order of the order is: " + totalOrderValue)

//find - returns the first element that satisfies a specified condition. 
// example: find an employee with a specific ID

const employees = [
    {id: 1, name: 'Alice', Eid: 'EMP001', 'Contact Details': 'alice@gmail.com', Role: 'Manager', Designation: 'Project Manager', Experience: '5 years'},
    {id: 2, name: 'Joyce', Eid: 'EMP002', 'Contact Details': 'joyce@gmail.com', Role: 'Engineer', Designation: 'Software Engineer', Experience: '3 years'},
    {id: 3, name: 'Daisy', Eid: 'EMP003', 'Contact Details': 'daisy@gmail.com', Role: 'Analyst', Designation: 'Data Analyst', Experience: '2 years'}
];

const employee = employees.find((employee) => employee.id === 2);
console.log(`Details of employee\nname: ${employee.name}\nEid: ${employee.Eid}\nContact Details: ${'Contact Details'}\nRole: ${employee.Role}\nDesignation: ${employee.Designation}\nExperience: ${employee.Experience}`);
// the \ creates a line break for clean code                                                                                                                            