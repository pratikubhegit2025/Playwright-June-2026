import { expect, test } from '@playwright/test';

test('Check CSS locators', async ({ page }) => {
  await page.goto(
    'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'
  );

  // Tag + ID: finds the Username input.
  const username = page.locator('input#username');
  await expect(username).toBeVisible();
  await username.fill('Pratik');
  await expect(username).toHaveValue('Pratik');

  // Tag + multiple attributes: finds the Email Address input.
  const email = page.locator("input[type='email'][name='email']");
  await email.fill('pratik@example.com');
  await expect(email).toHaveValue('pratik@example.com');

  // Tag + class + attribute: finds the full-name field.
  const fullName = page.locator(
    "input.full-width[placeholder='Enter your full name']"
  );
  await fullName.fill('Pratik Ubhe');
  await expect(fullName).toHaveValue('Pratik Ubhe');

  // Tag + attribute: finds the product-search field.
  const productSearch = page.locator(
    "input[type='search'][placeholder='Search products...']"
  );
  await productSearch.fill('Laptop');
  await expect(productSearch).toHaveValue('Laptop');

  // Attribute selector: finds the user-profile card by its test ID.
  const profileCard = page.locator("[data-testid='user-profile-card']");
  await expect(profileCard).toContainText('John Doe');

  // Attribute starts with: finds all three product cards.
  const productCards = page.locator("[data-testid^='product-card-']");
  await expect(productCards).toHaveCount(3);

  // Direct child selector: finds cards directly inside the product grid.
  const gridCards = page.locator(
    "[data-testid='product-grid'] > [data-testid^='product-card-']"
  );
  await expect(gridCards).toHaveCount(3);

  // Title attribute: finds the Save button.
  const saveButton = page.locator("button[title='Click to save your changes']");
  await expect(saveButton).toBeVisible();
});
