import { expect, test } from '@playwright/test';

test('Handle Tab', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

const popup =page.waitForEvent('popup');// wait, cause new window get opens immediately 

await page.getByRole('button',{name: 'Popup Windows', exact: true}).click(); //

const newTab = await popup; // finding new tab and swiching focus. storing pop up window

//wait until pop up gets load
//(await popup).waitForLoadState('domcontentloaded') //used to get content of the new window

console.log("New window : ", await newTab.title());// to get title name
console.log("new url: ", await newTab.url()); // to get url
await newTab.close();

});