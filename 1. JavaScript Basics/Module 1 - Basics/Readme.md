## Creating JavaScript Code

#### Internally within HTML

```
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Basics - Module 1</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
    <script> 
        //JavaScript Code
    </script>
</body>
</html>
```

#### Externally 
Step One: Create a .js file e.g. script.js

Step Two: Include a Script Tag with the src attribute
```
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Basics - Module 1</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
    <script src="./Script.js"></script>
</body>
</html>

```

## LOOPS AND ITERATIONS
They are for automating repetitive tasks and processing large data sets. Specifically they're used to iterate through arrays, perform actions and control flow of code dynamically. They're important in building dynamic and interactive apps: 

#### For Loop
It allows execution of code for a specified number of time or until a particular condition is met.. Has three parts: intialitzation, condition and update: 
```
for (intialization; condition; update) {
    //code to be executed
}
```

Example
```
let limit = 50; //fibonacci sequence
let a = 0;
let b = 1;
while (a <= limit) {
    console.log (a);
    let temp = a+b;
    a = b
    b = temp
}
```


#### While Loop

#### Do... While Loop