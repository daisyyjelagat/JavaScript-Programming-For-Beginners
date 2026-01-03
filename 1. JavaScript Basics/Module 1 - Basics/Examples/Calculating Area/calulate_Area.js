// declare two variables to store the length and width provided by user using HTML
let length;
let width;

//function named calculateArea()
function calculateArea(){
    length = parseFloat(document.getElementById('length').value); 
    width = parseFloat(document.getElementById('width').value); 
    //document.getElementById ('length')- to fetch values from the user input within the function for caluclating area by retrieving the element by its ID
    //.value - after accessing the HTML Element, the value in the input field is retrived from associated element
    //parseFloat() - converts the string value retrived from input value to a floating-point number to ensure the input, typically text entered by user, is treated as a number and math operations can be performed on it
    // length & width - finally the obtained floating-point numbers (representing user input) are stored in the variables byy the user respectively. 

    let area = length * width

    document.getElementById('result').innerText = 'The area of the rectangle is: ' + area;
    //document.getElementbyID('result') - retrives the HTML element with the ID = 'result'
    //.innerText = this is used to modify the itext content of the element that has been retrieved within the HTML Element
}