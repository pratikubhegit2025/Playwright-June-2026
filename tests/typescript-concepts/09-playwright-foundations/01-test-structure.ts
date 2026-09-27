import { expect, test } from '@playwright/test';

// test creates one independent browser automation scenario.
test('page title example', async ({ page }) => {
  // goto opens the application URL.
  await page.goto('https://example.com');

  // expect validates the actual title against the expected title.
  await expect(page).toHaveTitle('Example Domain');
});
