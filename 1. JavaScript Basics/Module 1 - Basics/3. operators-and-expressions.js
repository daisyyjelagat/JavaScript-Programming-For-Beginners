//operators - 6 categories 
//arithmetic
let x= 10;
let y= 5;

let sum = x + y; //addition
let difference = x - y; //subtraction
let product = x * y; //multiplication
let quotient = x / y; //division
let remainder = x % y; //modulus
let increment = ++x; //increment
let decrement = --y; //decrement
console.log( sum ,difference, product, quotient, remainder, increment, decrement);

//comparison - compares two values and returns a boolean result
let isEqual = (x == y); //equal to
let isNotEqual = (x != y); //not equal to - inequality 
let isStrictEqual = (x === y); //strict equal to
let isStrictNotEqual = (x !== y); //strict not equal to 
let isGreater = (x > y); //greater than
let isLess = (x < y); //less than
let isGreaterOrEqual = (x >= y); //greater than or equal to
let isLessOrEqual = (x <= y); //less than or equal to
console.log(isEqual, isNotEqual, isStrictEqual, isStrictNotEqual, isGreater, isLess, isGreaterOrEqual, isLessOrEqual);

//logical - combine and manipulate boolean values
let hasID = true;
let hasTicket = false;
let canEnter = hasID && hasTicket; //logical AND
let canBuy = hasID || hasTicket; //logical OR
let isDenied = !hasTicket; //logical NOT
console.log(canEnter, canBuy, isDenied);

//assignment - used to assign values to variables
let a = 10; //simple assignment
a += 5; //addition assignment
console.log(a);
a -= 3; //subtraction assignment
console.log(a);
a *= 2; //multiplication assignment
console.log(a);
a /= 4; //division assignment
console.log(a);
a %= 3; //modulus assignment
console.log(a);

//unary -operate on single value or variable
let basicNum = 5;
basicNum++; //increment operator (count will be 6)
console.log(basicNum);
basicNum--; //decrement operator (count will be 5)
console.log(basicNum);
let negativeNum = -basicNum; //negation operator
console.log(negativeNum);
 //logical NOT operator
 
//typeof -determine datatype of variable or expression
console.log(typeof basicNum);
let myVar = false;
let myTypeofVar = typeof myVar 
console.log(myTypeofVar)
let answer = a + basicNum;
console.log(`My Type is a: ${typeof answer}`);


//expressionsn- integrating values, variables and operators that produce a single value
//arithmetic expressions: numbers+operators
let sum2 = a+basicNum; 
console.log(sum2);
//variable experessions: variables combinations
let c = 10;
let result = c* 2;
console.log(result); //variable+operator
//function call expression: calling a function and using its return value
function square(number){
    return number*number
};
let squaredValue = square (4);
console.log(squaredValue)
//contitional expressions: the ternary operator to create conditional expressions
let age_person = 20;
let canVote = age_person >=18? "Yes" : "No";
console.log(canVote)
