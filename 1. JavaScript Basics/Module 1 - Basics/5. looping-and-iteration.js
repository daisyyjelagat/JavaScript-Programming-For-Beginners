//loops and iterations are techniques used to perform repetitive tasks, traverse data structures and handle scenarios

//For Loop: - allows execution of code for a specified number of time or until a particular condition is met.. Has three parts: intialitzation, condition and update
/* 
for (intialization; condition; update) {
    //code to be executed
} 
*/

// initialization - initialize a loop control variable with an initial value
// condition - a boolean expression that is evaluated before each iteration, if true, lopp continues
// update - changes lopp control variable in each iterations

for (let i = 1; i <= 5; i++){
    console.log(i)
};

//while loop - execute code as long as specified condition is true
/*
while (condition) {
    // code to be executed
}
*/

let limit = 50; //fibonacci sequence
let a = 0;
let b = 1;
while (a <= limit) {
    console.log (a);
    let temp = a+b;
    a = b
    b = temp
}

//do... while - execute a block of code as long as a specified condition is true unlike for, or while.. this guarantees that the code block executes atleast once
/* 
do {
    // code block
}while ();

*/

let roll = 1;

do {
    console.log("rolled a: " + roll);
    roll ++;
} while (roll < 7)

