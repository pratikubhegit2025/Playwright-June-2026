// encapsulation is a concept of object oriented programming which is used to hide the
//  data members of a class from outside world and only allow access to them through public 
// methods. 
// This helps in protecting the data from unauthorized access and modification.

// binding methods and vasriables together in a single unit is called encapsulation.
// access speifiers in typescript are used to implement encapsulation.
//public - can be accessed from anywhere
//private - can be accessed only within the class
//protected - can be accessed within the class and its subclasses

// examples of encapsulation in typescript
 




class Student {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
// what is mothod in typescript
// methoid is a function which is defined inside a class and can be called using an object of that class.
    public getName(): string {
        return this.name;
    }
    public getAge(): number {
        return this.age;
    }
}

//object of class is created using new keyword

let student2 = new Student('Pratik', 25);
console.log(student2.getName()); // Output: Pratik
console.log(student2.getAge()); // Output: 25
























