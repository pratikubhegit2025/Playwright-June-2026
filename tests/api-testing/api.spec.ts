import { test, expect } from '@playwright/test';

test.describe('API testing for Playwright practice application', () => {
  test('GET target page should return success and expected content', async ({ request }) => {
    const response = await request.get('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toContain('Automation Testing Practice');
    expect(body).toContain('PlaywrightPractice');
  });
});
