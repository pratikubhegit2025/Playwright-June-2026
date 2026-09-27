import { expect, test } from '@playwright/test';

test('selects one file for upload', async ({ page }) => {
  // Training-only pause so the chosen file name is visible in headed mode.
  const actionPause = 2_000;
  const filePath = 'C:/Users/prati/Downloads/image (10).png';

  await page.goto('https://testautomationpractice.blogspot.com/');

  // setInputFiles() selects a local file without opening the Windows file dialog.
  const fileInput = page.locator('#singleFileForm #singleFileInput');
  await fileInput.setInputFiles(filePath);
  await expect(fileInput).toHaveValue(/image \(10\)\.png$/);
  await page.waitForTimeout(actionPause);

  // This button would send the selected local file to the public practice site.
  // Enable the click only after approving that external upload.
  // await page.getByRole('button', {
  //   name: 'Upload Single File',
  //   exact: true,
  // }).click();
});
