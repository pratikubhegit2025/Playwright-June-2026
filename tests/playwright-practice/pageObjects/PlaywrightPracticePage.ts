import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightPracticePage {
  readonly pageHeading: Locator;
  readonly pageSubtitle: Locator;
  readonly homeNavLink: Locator;
  readonly playwrightPracticeNavLink: Locator;

  constructor(private readonly page: Page) {
    this.pageHeading = page.getByRole('heading', { name: 'Automation Testing Practice', exact: true });
    this.pageSubtitle = page.getByText('For Selenium, Cypress & Playwright', { exact: true });
    this.homeNavLink = page.getByRole('link', { name: 'Home', exact: true });
    this.playwrightPracticeNavLink = page.getByRole('link', { name: 'PlaywrightPractice', exact: true });
  }

  async open(): Promise<void> {
    await this.page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.pageHeading).toBeVisible();
    await expect(this.pageSubtitle).toBeVisible();
  }

  async verifyCorrectApplication(): Promise<void> {
    await expect(this.page).toHaveURL(/playwrightpractice\.html$/);
    await expect(this.pageHeading).toHaveText('Automation Testing Practice');
    await expect(this.playwrightPracticeNavLink).toBeVisible();
    await expect(this.playwrightPracticeNavLink).toHaveAttribute(
      'href',
      'https://testautomationpractice.blogspot.com/p/playwrightpractice.html',
    );
    await expect(this.homeNavLink).toBeVisible();
  }
}
