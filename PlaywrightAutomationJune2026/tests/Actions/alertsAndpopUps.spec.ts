import { expect, test, Locator } from '@playwright/test';

test('Alerts and Pop Ups', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');
page.once('dialog', async (dialog) => {

console.log("Dialog Message: ", dialog.message());

  expect(dialog.type()).toBe('alert');
await page.waitForTimeout(5000);

await dialog.accept();
});

  //simple Alert 
  // dialog.accept dialog.message
  await page.getByRole('button',{name:'Simple Alert', exact: true}).click();

});




