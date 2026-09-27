/*
 * Learning guide: Objects and typed properties.
 * Learn: object literals, reading and updating properties, optional properties, and deletion.
 * Rules: Give objects a specific shape instead of the broad object type; use optional properties only when a value may be absent.
 */

// Theory:
// 1. An object is a collection of related data stored as key-value pairs.
// 2. In TypeScript, objects help us group multiple properties in one variable.
// 3. Each property has a name called a key and a value assigned to that key.
// 4. Objects are useful for storing real-world data like student details, employee records, or product information.
// 5. We can read, update, add, and delete object properties.

// Basic object examples in TypeScript.

let student: { name: string; age: number; city: string } = {
  name: 'Pratik', // Property storing the student name.
  age: 25, // Property storing the student age.
  city: 'Pune', // Property storing the student city.
};

console.log('Student object:', student); // Prints the full object.
console.log('Student name:', student.name); // Reads the name property.
console.log('Student age:', student.age); // Reads the age property.
console.log('Student city:', student.city); // Reads the city property.

student.age = 26; // Updates an existing property value.
console.log('Updated age:', student.age);

let employee: { id: number; name: string; isActive: boolean } = {
  id: 101,
  name: 'Rahul',
  isActive: true,
};

console.log('Employee object:', employee); // Prints another object example.
console.log('Employee active status:', employee.isActive); // Reads boolean property.

let car = {
  brand: 'Honda',
  model: 'City',
  year: 2024,
};

console.log('Car object:', car); // Prints inferred object.

car.model = 'Amaze'; // Updates the model property.
console.log('Updated car model:', car.model);

let product: { name: string; price: number; stock?: number } = {
  name: 'Laptop',
  price: 55000,
};

console.log('Product object:', product); // Prints object with optional property missing.

product.stock = 10; // Adds optional property later.
console.log('Product stock:', product.stock);

delete product.stock; // Deletes a property from the object.
console.log('Product after delete:', product);



// oops - object oriented programming lang 
// class - object - method - property - constructor - inheritance - polymorphism - encapsulation

// what is object-  
// object is a collection of key value pair - key is property and value is data - object is real world entity - object is instance of class - object is created using class - object is created using constructor - object is created using new keyword - object is created using literal notation - object is created using factory function - object is created using Object.create() method - object is created using Object.assign() method - object is created using Object.freeze() method - object is created using Object.seal() method - object is created using Object.defineProperty() method - object is created using Object.defineProperties() method - object is created using Object.getOwnPropertyDescriptor() method - object is created using Object.getOwnPropertyDescriptors() method - object is created using Object.keys() method - object is created using Object.values() method - object is created using Object.entries() method - object is created using Object.fromEntries() method
// employee- emplID, SaLARY, NAME, DESIGNATION, DEPARTMENT, JOINING DATE, LEAVES, ATTENDANCE, PERFORMANCE, PROMOTION, TRANSFER, TERMINATION, RETIREMENT, RESIGNATION, EXIT INTERVIEW, EXIT FORMALITIES, EXIT CLEARANCE, EXIT DOCUMENTS, EXIT CHECKLIST, EXIT SURVEY, EXIT FEEDBACK, EXIT INTERVIEW QUESTIONS, EXIT INTERVIEW FORMATS, EXIT INTERVIEW TEMPLATESQ

//  let employee:string="Pratik";
//  let empID:number=101;
//  let salary:number=50000;
//  let designation:string="Software Engineer";

// object creeation 
  let employee1: { empID: number; name: string; salary?: number; designation: string } =   {
empID: 101, name: "Pratik", salary: 50000,designation: "Software Engineer"
  }
  console.log(employee1); // printing the object
console.log(employee1.empID); // printing original property of object
// update propety of object // .
employee1.empID=102;
console.log(employee1.empID); // printing updated property of object
// deleting property of object
delete employee1.salary;
console.log(employee1); // printing the object after deleting property
//REPLACE property of object
employee1.designation="Senior Software Engineer";
console.log(employee1); // printing the object after replacing property



console.log("---------------------------------------------------");

// data types
//primitive and non primitive data types
// primitive data types - number, string, boolean, null, undefined, symbol, bigint
// non primitive data types - object, array, function, class, interface, tuple, set, map, 

// assigining data types to object
let student1: { name: string; age: number; city: string } = { name: "Pratik", age: 25, city: "Pune" };
console.log(student1); // printing the object
student1.name="Rahul"; // updating the property of object
console.log(student1); // printing the object after updating property
delete student1.age; // deleting the property of object
console.log(student1); // printing the object after deleting property








//where we can implement the oops concepts in typescript
// class - 
//whaat is class in typescript
// class is a blueprint for creating objects. It defines the properties and methods that the objects created from the class will have. In TypeScript, classes can have constructors, methods, and access modifiers (public, private, protected) to control access to their members. Classes can also implement interfaces and extend other classes to create a hierarchy of related classes.
// constructor -
// what is constructor in typescript
// constructor is a special method in a class that is used to initialize the object of that class. It is called automatically when an object of the class is created. It can take parameters to initialize the properties of the class.
// method -
// what is method in typescript
// method is a function which is defined inside a class and can be called using an object of that class.
// property -

//in encapsulation where we can implement the constructor in typescript
//to initialize the properties of the class we can implement the constructor in typescript
































