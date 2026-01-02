function sayHello(){
    console.log("Hello, World!"); 
}

sayHello();
console.log("This is a basic JavaScript script.");

// JavaScript DataTypes
//Primitive DataTypes
let name = "John" //strings
console.log(typeof name)
let age = 30; //number
console.log(typeof age)
let isStudent = true; //boolean
console.log(typeof isStudent)
let address; //undefined - a variable that has been declared but hasn't been assigned a value
console.log(typeof address)
let nullValue = null; //null - represents the intentional absence of any object value

//Composite DataTypes - holds and manages multiple values as a single unit
let fruits = ["Apple", "Banana", "Orange"]; //array -list like data structure
console.log(typeof fruits)
let person = { //object - key:value pairs for storing related data and functionality
    firstName: "John",
    lastName: "Doe",
    age: 30
};  
console.log(typeof person)

//JavaScript Allows  for switching of Data Types