/*
 * Learning guide: Abstraction with abstract classes.
 * Learn: abstract methods define a contract and derived classes provide the implementation.
 * Rules: Do not instantiate an abstract class; every non-abstract child must implement all inherited abstract methods.
 */

// what is abstraction in typescript?
// abstraction is the process of hiding the implementation details and showing only the functionality to the user.
// abstraction can be achieved using abstract classes and interfaces in typescript.


//rules in abstraction
// 1. we cannot create object of abstract class.
// 2. abstract class can have abstract methods and non-abstract methods.
// 3. abstract methods are declared without any implementation and must be implemented in derived classes.
// 4. non-abstract methods can have implementation and can be called using object of derived class.
//5. abstract class can have constructor and can be used to initialize properties of derived class.


abstract class Shape { // this is abstract class

    // ABSTRACT CLASS CAN HAVE ABSTRACT METHODS AND NON-ABSTRACT METHODS
    abstract area(): number; // abstract method without implementation. THIS IS ABSTRACT METHOD
    abstract perimeter(): number; // abstract method without implementation

// NON-ABSTRACT METHOD WITH IMPLEMENTATION
display(): void { // non-abstract method with implementation
    console.log("This is a shape"); // implementation of non-abstract method    

}}


//let circle = new shape(); // error: cannot create object of abstract class

// how to achieve abstraction in typescript using abstract class



class Circle extends Shape { // derived class from abstract class Shape

    constructor(private radius: number) {
        super();
    }

    area(): number { // implementation of abstract method area
        return 3.14 * this.radius * this.radius; // formula for area of circle
}
perimeter(): number { // implementation of abstract method perimeter
    return 2 * 3.14 * this.radius; // formula for perimeter of circle
}}

let circle = new Circle(5); // creating object of derived class Circle
console.log("Area of circle: " + circle.area());
console.log("Perimeter of circle: " + circle.perimeter());


