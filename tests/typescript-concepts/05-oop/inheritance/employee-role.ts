// A class groups data and behavior into one reusable blueprint.

// Create a base class for every employee.
class Employee {
  constructor(protected readonly name: string) {}

  introduce(): void {
    console.log('Employee: ' + this.name);
  }
}

// Extend Employee so a tester inherits its data and behavior.
class Tester extends Employee {
  runTest(): void {
    console.log(this.name + ' is running Playwright tests.');
  }
}

// Create a tester and use inherited and new methods.
const tester: Tester = new Tester('Pratik');
tester.introduce();
tester.runTest();
