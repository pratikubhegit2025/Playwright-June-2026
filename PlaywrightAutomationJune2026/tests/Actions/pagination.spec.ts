import { expect, test } from '@playwright/test';

test('prints every row from each pagination table page', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Scope rows to the pagination table so other page tables are ignored.
  const productTable = page.locator('#productTable');
  const pageLinks = page.locator('.pagination li a');

  await expect(pageLinks).toHaveCount(4);

  const totalPages = await pageLinks.count();

  for (let pageIndex = 0; pageIndex < totalPages; pageIndex++) {
    await pageLinks.nth(pageIndex).click();

    const rows = productTable.locator('tbody tr');
    await expect(rows).toHaveCount(5);

    console.log('----- Page ' + (pageIndex + 1) + ' -----');

    const totalRows = await rows.count();
    for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
      console.log(await rows.nth(rowIndex).innerText());
    }
  }
});
