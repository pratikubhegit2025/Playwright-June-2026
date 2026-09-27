import { expect, test } from '@playwright/test';

test('Handle Tab', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

const   newTabPromise =page.waitForEvent('popup');



await page.getByRole('button',{name: 'New Tab', exact: true}).click();

const newTab =await newTabPromise;

console.log("New Tab : ", await newTab.title());
console.log("new url: ", await newTab.url());
await newTab.close();








});