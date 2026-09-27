import { expect, test, Locator } from '@playwright/test';

test('Double Click', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

// element to be drag
const source =await page.locator('#draggable');
// target element

const target =await page.locator('#droppable');
// dragTo

await source.dragTo(target);


 await expect(target).toHaveText('Dropped!');


});