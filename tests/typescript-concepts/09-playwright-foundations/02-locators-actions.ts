import { expect, test } from '@playwright/test';

// This lesson demonstrates a user-focused locator and action.
test('role locator and click action', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // getByRole finds the visible button using its accessible name.
  const copyButton = page.getByRole('button', { name: 'Copy Text', exact: true });

  // dblclick performs two quick clicks on the button.
  await copyButton.dblclick();

  // Validate that the action copied Field1 text into Field2.
  await expect(page.locator('#field2')).toHaveValue(await page.locator('#field1').inputValue());
});
