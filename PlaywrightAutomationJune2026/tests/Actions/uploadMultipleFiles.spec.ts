import { expect, test } from '@playwright/test';

test('selects multiple files for upload', async ({ page }) => {
  // Training-only pause so the selected file names are visible in headed mode.
  const actionPause = 2_000;
  const filePaths = [
    'C:/Users/prati/Downloads/error-context.md',
    'C:/Users/prati/Downloads/error-context (1).md',
  ];

  await page.goto('https://testautomationpractice.blogspot.com/');

  // A file input with the multiple attribute accepts an array of local paths.
  const multipleFiles = page.locator(
    '#multipleFilesForm #multipleFilesInput'
  );
  await multipleFiles.setInputFiles(filePaths);

  const selectedFileNames = await multipleFiles.evaluate(input =>
    Array.from((input as HTMLInputElement).files ?? []).map(file => file.name)
  );
  expect(selectedFileNames).toEqual([
    'error-context.md',
    'error-context (1).md',
  ]);
  await page.waitForTimeout(actionPause);

  // This button would send the selected local files to the public practice site.
  // Enable the click only after approving that external upload.
  // await page.getByRole('button', {
  //   name: 'Upload Multiple Files',
  //   exact: true,
  // }).click();
});
