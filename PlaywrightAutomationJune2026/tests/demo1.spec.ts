import {test, expect} from '@playwright/test'; // Playwright will find the test 
// to verify page title of facebook 

// Notes / guidelines to create a Playwright test:
// 1. Import `test` and `expect` from `@playwright/test`.
// 2. Give the test a clear name that describes the validation.
// 3. Use the `page` fixture inside the async test function.
// 4. Open the target URL with `await page.goto(...)`.
// 5. Capture useful data such as title, text, or element state when needed.
// 6. Validate behavior with Playwright assertions like `toHaveTitle`, `toHaveURL`, or locator assertions.
// 7. Keep the test simple, readable, and focused on one main verification.
// 8. Add logs only when they help debugging or learning.

test('verify Page Title', async({page}) => { //test('verify Page Title',

    console.log("Test Started");  //print
    await page.goto("https://www.facebook.com/"); //will open the url

    // Get Title
   const title = await page.title(); //Fetch the title or get the title and storing the output in variable
 console.log("Actualt Title: " , title); // Print the actual title

 // Expected Title

 await  expect(page).toHaveTitle("Facebook"); // Validation of expected title
 console.log("Test End"); // printing statement 

}
)



