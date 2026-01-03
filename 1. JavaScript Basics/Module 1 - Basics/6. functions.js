//Function Declaration:
function sayHello (){
    console.log("Hello!");  
}

sayHello(); // Calling the function

//non-parametized functions
function greet(){
    let name = "Alice";
    console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, Alice!

//parametized functions
function greetUser(name){
    console.log("Hello, " + name + "!");
}   
greetUser("Bob"); // Output: Hello, Bob!

//paramerers and arguments 


//Ways of Writing Functions in JavaScript
//1, function declaration
function area (a,b){
    let area = a*b;
    return area; // mention something on the return keyword
}

console.log(area(4,5))

//2. function expression
const add_numbers = function (x,y){
    console.log(x+y);
}
add_numbers(3,7);
// Types of Functions in JavaScript