var fullName = 'Pratik';
let age = 25;
const isActive = true;

let score = 99.5;
let city = 'Pune';
let hobbies = ['reading', 'testing', 'coding'];
let user = {
  id: 1,
  role: 'QA',
};
let nothing = null;
let notAssigned;

console.log('fullName:', fullName);
console.log('age:', age);
console.log('isActive:', isActive);
console.log('score:', score);
console.log('city:', city);
console.log('hobbies:', hobbies);
console.log('user:', user);
console.log('nothing:', nothing);
console.log('notAssigned:', notAssigned);


function show() {
  if (true) {
    var name = 'Pratik';
  }

  console.log(name); // works
}

show();