import { expect, test } from '@playwright/test';

test('Accept confirmation alert', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Register the handler before clicking because the dialog opens immediately.
  page.once('dialog', async (dialog) => {
    console.log('Dialog message:', dialog.message());

    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('Press a button!');

    // Select OK on the confirmation dialog.
    await dialog.accept();
  });

  await page.getByRole('button', {
    name: 'Confirmation Alert',
    exact: true,
  }).click();

  // Confirm that selecting OK updated the page result.
  await expect(page.locator('#demo')).toHaveText('You pressed OK!');
});
