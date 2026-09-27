import { expect, test, Locator } from '@playwright/test';

test('Prompt alert', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');


// handling prompt alert
page.once('dialog', async (dialog) => {
 // once = it is handler, it handles alert when occcure
console.log("Dialog Message: ", dialog.message());
console.log(dialog.defaultValue);

  expect(dialog.type()).toBe('prompt');
expect(dialog.message()).toBe("Please enter your name:")
//await page.waitForTimeout(5000);

await dialog.accept();// clicking on ok button

//await dialog.dismiss();// clicking on cancel button
});

  //Confirmation Alert button 
  await page.getByRole('button',{name:'Prompt Alert', exact: true}).click();

await expect(page.getByText('Hello Harry Potter! How are you today?'),).toBeVisible();

});














//alert
//confirm
//prompt 




