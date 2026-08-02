// what is polymosrphism in typescript
//poly = many 
//morph = forms
// polymorphism is the ability of an object to take many forms.
// polymorphism is achieved in typescript using method overloading and method overriding.


//types - compile time polymorphism and runtime polymorphism

console.log('----------------compile time polymorphism----------------------------');
class calculator {
    // method overloading 1 in typescript
    add(a: number, b: number): number; // using method overloading
  

    // method overloading 2 in typescript
    add(a: string, b: string): string;

    // method overloading 3 in typescript
    add(a: any, b: any): any {

        return a + b;
    }
}

let cal = new calculator();
console.log(cal.(10, 20)); // Output: 30
console.log(cal.add('Hello', 'World')); // Output: HelloWorld



// parameters and arguments in typescript


console.log('----------------runtime polymorphism----------------------------');
// class payment {
//     pay() {
//         console.log("Payment done");
//     }
// }

//     class creditCardPayment extends payment {
//         pay() {
//             console.log("Payment done using credit card");
//         }   
//     }

//     class debitCardPayment extends payment {
//         pay() {
//             console.log("Payment done using debit card");
//         }   }



        // To achive run time polymorphism we need to have multiple classes with 
        // same method name and same number of parameters but different implementation.


        // with parameters

        class payment1 {
            pay(amount: number) {
                console.log("Payment done with amount: " + amount);
            }}

            class creditCardPayment1 extends payment1 {
                pay(amount: number) {
                    console.log("Payment done using credit card with amount: " + amount);
                }   }
                class debitCardPayment1 extends payment1 {
                    pay(amount: number) {
                        console.log("Payment done using debit card with amount: " + amount);
                    }}


                    let payment = new debitCardPayment1();
payment.pay(1000); // Output: Payment done using debit card with amount: 1000
payment = new creditCardPayment1();
payment.pay(2000); // Output: Payment done using credit card with amount: 2000
payment = new payment1();
payment.pay(3000); // Output: Payment done with amount: 3000















add