// classes and objects in Javascript
// Classes - a blueprint or template for creating objects in JavaScript. It defines the structure and behaviour encapsulating data or properties and methods or functions that are common to a group of objects and bring an abstraction level to code. 
// E.g a Person class, has properties such as name, and age, and methods such as sayHello. 

// An Object, is a specific instance of a class created based on the blueprint and represents specific entities with unique values for properties defined in the class. 
// e.g. for the person class, an object can be, a person named John, of age 30

//creating a class in JavaScript:
class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName (){
        return `${this.firstName} ${this.lastName}`;
    }
}

//creating an instance(object) of the Person Class
const person_one = new Person ("John", "Doe")
console.log(person_one.getFullName())

// using object literals to create objects:
const students = {
    first_name: "Alice",
    second_name: "Johnson",
    getStudentName: function (){
        return `${this.first_name} ${this.second_name}`
    }
}
console.log(students.getStudentName());

// using function constructors to create objects
function Car (make, model){
    this.make = make;
    this.model = model;
}
const car1= new Car ("Toyota", "Camry")
console.log(car1)