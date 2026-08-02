import { test as base, expect } from '@playwright/test';
import { env } from '../config/env';
import { PatientDashboardPage } from '../pages/PatientDashboardPage';
import { PatientRegistrationPage } from '../pages/PatientRegistrationPage';
import { DbHelper } from '../utils/dbHelper';
import { logger } from '../utils/logger';
import { ScreenshotHelper } from '../utils/screenshotHelper';

type AppFixtures = {
  registrationPage: PatientRegistrationPage;
  patientDashboardPage: PatientDashboardPage;
  dbHelper: DbHelper;
};

export const test = base.extend<AppFixtures>({
  page: async ({ page }, use, testInfo) => {
    page.setDefaultTimeout(env.defaultTimeout);

    await page.goto(env.openmrsBaseUrl);
    await page.getByPlaceholder('Enter your username', { exact: true }).fill(env.username);
    await page.getByPlaceholder('Enter your password', { exact: true }).fill(env.password);
    await page.getByText('Registration Desk', { exact: true }).click();
    await Promise.all([
      page.waitForURL('**/referenceapplication/home.page'),
      page.getByRole('button', { name: 'Log In' }).click(),
    ]);

    await page.locator(
      '#referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension',
    ).click();
    await page.waitForURL('**/registrationapp/registerPatient.page**');

    try {
      await use(page);
    } catch (error) {
      await ScreenshotHelper.capture(page, testInfo, 'failure');
      throw error;
    }
  },

  registrationPage: async ({ page }, use) => {
    const registrationPage = new PatientRegistrationPage(page);
    await registrationPage.verifyPageLoaded();
    await use(registrationPage);
  },

  patientDashboardPage: async ({ page }, use) => {
    await use(new PatientDashboardPage(page));
  },

  dbHelper: async ({}, use) => {
    const dbHelper = new DbHelper();
    try {
      await dbHelper.connect();
    } catch (error) {
      logger.warn(`Database connection skipped: ${(error as Error).message}`);
    }

    await use(dbHelper);
    await dbHelper.disconnect();
  },
});

export { expect };
