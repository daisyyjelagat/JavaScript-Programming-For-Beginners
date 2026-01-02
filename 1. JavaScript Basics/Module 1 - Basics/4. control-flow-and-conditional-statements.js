//Control Flow - Order in which statements are exectued
//if statements and else statement
let age = 4; 
if (age >= 18) {
    console.log("You're an adult")
} else {
    console.log("You're not an adult")
}

//else if statements -test more than one condition sequentially
let time = 12;
if(time < 12){
   console.log("Good Morning");
} else if (time < 18) {
    console.log("Good Afternoon!");
} else {
    console.log("Evening");
}

//nested if statement -test multiple conditions and exectue multiple blocks of code 
let temperature = 55;
let isRaining = false;
if (temperature > 30) {
    if (isRaining) {
        console.log("It is Hot and It's Raining.")
    } else {
        console.log("It is Hot and It is not Raining")
    } }
else {
    if (isRaining) {
        console.log("It is not hot and it is raining")
    } else {
        console.log("It is not hot and it is not raining")
    }
} 

//switch statement - compares multiple case values and executes the first matching case
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's Monday");
        break;
    case "Friday":
        console.log("It is Friday")
        break;
    default:
        "It's a regular day"
}
//ternary operator - concise way to write conditional statement
let age_two = 20
let isAdult = age_two >= 18 ? "Yes" : "No";