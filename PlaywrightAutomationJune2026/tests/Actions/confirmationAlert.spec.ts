import { expect, test, Locator } from '@playwright/test';

test('Accep confirmation alert', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');


// handling confirmation aler 
page.once('dialog', async (dialog) => {
 // once = it is handler, it handles alert when occcure
console.log("Dialog Message: ", dialog.message());

  expect(dialog.type()).toBe('confirm');
expect(dialog.message()).toBe("Press a button!")
await page.waitForTimeout(5000);

//await dialog.accept();// clicking on ok button

await dialog.dismiss();// clicking on cancel button
});

  //Confirmation Alert button 
  await page.getByRole('button',{name:'Confirmation Alert', exact: true}).click();

await expect(page.getByText('You pressed Cancel!')).toBeVisible();




});














//alert
//confirm
//prompt 




