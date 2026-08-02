import { test, expect } from '@playwright/test';
import { PlaywrightPracticePage } from './pageObjects/PlaywrightPracticePage';

test.describe('Playwright Practice Website', () => {
  test('TC001 Verify navigation lands on the correct application', async ({ page }) => {
    const practicePage = new PlaywrightPracticePage(page);

    await practicePage.open();
    await practicePage.verifyPageLoaded();
    await practicePage.verifyCorrectApplication();
  });
});
