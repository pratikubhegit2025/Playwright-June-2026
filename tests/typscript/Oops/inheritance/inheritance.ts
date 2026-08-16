// // what is inheritance in typescript
// // inheritance is a mechanism in object-oriented programming that allows a class to inherit properties and methods from another class.
// //  In TypeScript, inheritance is implemented using the 'extends' keyword. 
// // The class that inherits from another class is called the derived class or subclass, while the class being inherited from is called the base class or superclass. Inheritance allows for code reuse and the creation of a c relationship between classes.


// //types of inheritance in typescript
// //1. single inheritance - a class inherits from a single base class
// //2. multilevel inheritance - a class inherits from a derived class, which in turn inherits from a base class   
// // hierarchical inheritance - multiple classes inherit from a single base class
// //multiple inheritance - a class inherits from multiple base classes (not directly supported in TypeScript, but can be achieved using interfaces)


// //single inheritance example in typescript

// console.log('-------------------single inheritance example in typescript-------------------');


// class animal {
//     protected name: string
//     constructor(name: string) {
//         this.name = name;
//     }  
    
//     Eat() {
//         console.log(`${this.name} is eating.`);
//     }}

//     class dog extends animal {

// bit(){
//         console.log(`${this.name} is biting.`);
// }}


// let dog1 = new dog('Tommy');
// dog1.Eat();
// dog1.bit();


console.log('-------------------multilevel inheritance example in typescript-------------------');
// use of super keyword in typescript
// The 'super' keyword in TypeScript is used to call the constructor or methods of the base class from the derived class. 
// It allows the derived class to access and invoke the functionality of its parent class. 
// The 'super' keyword is typically used in the constructor of the derived class to initialize properties inherited from the base class, and it can also be used to call overridden methods from the base class.


class Animal {

    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {

    bark() {
        console.log("Dog is barking");
    }
}

class Puppy extends Dog {

    sleep() { // intializing the sleep method in Puppy class
        console.log("Puppy is sleeping"); // IMplementation of the sleep method in Puppy class
    }
}

const puppy = new Puppy();

puppy.eat();     // From Animal
puppy.bark();    // From Dog
puppy.sleep();   // From Puppy


// hierarchical inheritance example in typescript

console.log('-------------------hierarchical inheritance example in typescript-------------------');

//animal -

class Animal22 {

    eat() {
        console.log("Animal is eating");
    }
}

class Dog22 extends Animal {

    bark() {
        console.log("Dog is barking");
    }
}

class Cat extends Animal {

    meow() {
        console.log("Cat is meowing");
    }
}

const dog = new Dog();

dog.eat();      // Parent method
dog.bark();     // Dog method

const cat = new Cat();

cat.eat();      // Parent method
cat.meow();     // Cat method

