import { expect, test } from '@playwright/test';

test('changes the dynamic button from START to STOP', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // The first locator is valid only while the accessible button name is START.
  const startButton = page.getByRole('button', {
    name: 'START',
    exact: true,
  });

  await expect(startButton).toBeVisible();
  console.log('Initial button text:', await startButton.textContent());

  await startButton.click();

  // The button's accessible name changes after the click, so use STOP here.
  const stopButton = page.getByRole('button', {
    name: 'STOP',
    exact: true,
  });

  await expect(stopButton).toHaveText('STOP');
  console.log('Changed button text:', await stopButton.textContent());
});
