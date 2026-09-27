import { expect, test, Locator } from '@playwright/test';

test('Double Click', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');
await page.getByRole('button',{name:'Copy Text', exact:true}).dblclick();
await page.waitForTimeout(5000);





});