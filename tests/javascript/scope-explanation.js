// Function-scoped:
// A function-scoped variable is available everywhere inside the function
// where it was created, even if it is declared inside an if block.

function functionScopeExample() {
  if (true) {
    var name = 'Pratik';
  }

  console.log('Function-scoped var:', name); // works
}

functionScopeExample();

// Block-scoped:
// A block-scoped variable is available only inside the block { }
// where it was created.

function blockScopeExample() {
  if (true) {
    let age = 25;
    const city = 'Pune';

    console.log('Block-scoped let:', age); // works
    console.log('Block-scoped const:', city); // works
  }

  // console.log(age); // error
  // console.log(city); // error
}

blockScopeExample();
