//Object oriented programming
//Four pillars of OOps
//Abstraction
//Polymorphism
//Inheritance
//Encapsulation
class Student {
    constructor(name, age, isGraduated) {
        this.qualification = "B.tech";
        this.name = name;
        this.age = age;
        this.isGraduated = isGraduated;
    }
    walk() {
        console.log(`${this.name} is walking !!!`)
    }
    eat() {
        console.log(`${this.name} is eating !!!!`)
    }
}
//inheritance: It's a process of aquiring properties from one class
// to another class 
class Employee extends Student {
    constructor(name, age, isGraduated) {
        super(name, age, isGraduated)
    }
}
let emp = new Employee("Dileep", 22, true);
console.log(emp);
emp.eat();


//call apply bind methods(method shariing)
//these methods are used to share methods between different objects

const user = {
    name: 'jack',
    age: 34,
    printInfo(hometown) {
        console.log(`My name is ${this.name}, and iam ${this.age} years old. and
            my home town is ${hometown}`)
    }
}
//here the emp method  is shared with user object
emp.walk.call(user);
user.printInfo("Hyderabad");
user.printInfo.apply(emp, ["Kurool"]);


//bind() method creates a new function that, when called,
//its 'this' keyword set to a specific vale and arguments
//are partially vound. 

function greet() {
    return `Hello, ${this.name}!`;
}

const person = { name: 'John' };
const greetPerson = greet.bind(person);
console.log(greetPerson()); // Output: Hello, John!








