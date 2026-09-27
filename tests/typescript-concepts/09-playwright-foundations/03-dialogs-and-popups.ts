import { expect, test } from '@playwright/test';

// Browser dialogs must be handled before the click that opens them.
test('handle a confirmation dialog', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // once listens for the next dialog only.
  page.once('dialog', async (dialog) => {
    expect(dialog.type()).toBe('confirm');
    await dialog.accept();
  });

  // Clicking the button opens the dialog handled above.
  await page.getByRole('button', { name: 'Confirmation Alert', exact: true }).click();

  await expect(page.locator('#demo')).toHaveText('You pressed OK!');
});
