import { test, expect } from '@playwright/test';

test('Verify Page Title', async ({ page }) => {

    await page.goto('https://www.facebook.com');

    const title = await page.title();

    console.log("Actual Title:", title);

    await expect(page).toHaveTitle('Facebook');

});


test('Verify URL', async ({ page }) => {

    await page.goto('https://www.facebook.com');

    console.log("Actual URL:", page.url());

    await expect(page).toHaveURL('https://www.facebook.com/');

});


test('Verify page is loaded', async ({ page }) => {

    await page.goto('https://www.facebook.com');

    await expect(page.locator('body')).toBeVisible();

    console.log("Page loaded successfully");

});