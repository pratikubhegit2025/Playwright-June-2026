/*
 * Learning guide: Constructors and class initialization.
 * Learn: default and parameterized constructors, this, private fields, and instance methods.
 * Rules: Initialize required object state in the constructor and use this.property to refer to the current object.
 */

//what is constructor in typescript
//constructor is a special method in a class that is used to initialize the object of that class.
//it is called automatically when an object of the class is created.
//it can take parameters to initialize the properties of the class.


// types of cunstructor in typescript
//1. default constructor - a constructor with no parameters
//2. parameterized constructor - a constructor with parameters
//3. private constructor - a constructor that can only be called within the class
//4. protected constructor - a constructor that can only be called within the class and its subclasses

// default costructor example in typescript

class Student12{
    constructor() {
        //default constructor   
        let name: string = 'Pratik';
        let age: number = 25;
        console.log('Student name:', name);
        console.log('Student age:', age);
    }
}

// object creation of class using new keyword
const student13 = new Student12(); // Output: Student name: Pratik, Student age: 25


console.log('-------------------------------------------------------');

//parameterized constructor example in typescript
// use of thuis keyword?
// The 'this' keyword in TypeScript refers to the current instance of the class. 
// It is used to access the properties and methods of the class within its own context. 
// In the constructor, 'this' is used to differentiate between class properties and constructor parameters that have the same name.

class Student14 {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }
}

const student15 = new Student14('Pratik', 25);
console.log('Student name:', student15.getName()); // Output: Student name: Pratik
console.log('Student age:', student15.getAge()); // Output: Student age: 25



console.log('-------------------------------------------------------');

class Student16 {
    private name: string;
    private age:number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
display (){
    console.log('Student name:', this.name);
    console.log('Student age:', this.age);
}
}



const student16 = new Student16('Pratik', 25);
student16.display();
