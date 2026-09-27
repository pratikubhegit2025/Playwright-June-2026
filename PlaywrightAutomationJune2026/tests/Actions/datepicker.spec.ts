import { expect, test } from '@playwright/test';

test('selects and validates a date range', async ({ page }) => {
  // Training-only pause so the entered dates are visible in headed mode.
  const actionPause = 2_000;

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Native date inputs accept the ISO format: yyyy-mm-dd.
  const startDate = page.locator('#start-date');
  const endDate = page.locator('#end-date');

  await startDate.fill('2026-09-11');
  await page.waitForTimeout(actionPause);
  await endDate.fill('2026-09-25');
  await page.waitForTimeout(actionPause);

  await expect(startDate).toHaveValue('2026-09-11');
  await expect(endDate).toHaveValue('2026-09-25');

  // Submit the range and validate the application response.
  await page.locator('.date-picker-box .submit-btn').click();
  await page.waitForTimeout(actionPause);

  await expect(page.locator('#result')).toHaveText(
    'You selected a range of 14 days.'
  );
});
