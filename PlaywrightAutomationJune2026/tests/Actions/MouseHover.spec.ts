import { expect, test } from '@playwright/test';

test('Mouse Hover', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

await page.getByRole('button',{name: 'Point Me', exact: true}).hover();


await page.waitForTimeout(2000);
await expect(page.getByText('Mobiles')).toBeVisible();
});