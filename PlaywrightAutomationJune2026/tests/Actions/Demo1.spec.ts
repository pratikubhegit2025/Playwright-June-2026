import { expect, test } from '@playwright/test';

test('Practice actions and assertions', async ({ page }) => {
  test.setTimeout(90_000);

  // Training-only pause so each action is visible in headed mode.
  const actionPause = 1_000;

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Page assertion: Playwright waits for the expected title automatically.
  await expect(page).toHaveTitle('Automation Testing Practice');
  console.log('Title is:', await page.title());

  // fill(), focus(), and press() actions.
  const name = page.getByPlaceholder('Enter Name');
  const nameLongerThanLimit = 'PratikUbheTesting';
  const expectedName = nameLongerThanLimit.slice(0, 15);
  await name.fill(nameLongerThanLimit);
  await page.waitForTimeout(actionPause);
  await name.focus();
  await name.press('End');
  await page.waitForTimeout(actionPause);
  await expect(name).toHaveAttribute('maxlength', '15');
  await expect(name).toHaveValue(expectedName);

  // Radio-button action and assertion.
  const male = page.getByRole('radio', { name: 'Male', exact: true });
  await male.check();
  await page.waitForTimeout(actionPause);
  await expect(male).toBeChecked();

  // Checkbox actions: select and validate every available day.
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  for (let index = 0; index < days.length; index++) {
    const day = days[index];
    const checkbox = page.getByRole('checkbox', { name: day, exact: true });
    await checkbox.check();
    await page.waitForTimeout(actionPause);
    await expect(checkbox).toBeChecked();
  }

  // Dropdown action: select by visible option text.
  const country = page.getByRole('combobox', { name: 'Country:' });
  await country.selectOption({ label: 'India' });
  await page.waitForTimeout(actionPause);
  await expect(country).toHaveValue('india');

  // Date Picker 1 uses the mm/dd/yyyy format.
  const datePicker1 = page.locator('#datepicker');
  await datePicker1.fill('09/05/2026');
  await page.waitForTimeout(actionPause);
  await expect(datePicker1).toHaveValue('09/05/2026');

  // Date Picker 2 uses the dd/mm/yyyy format.
  const datePicker2 = page.locator('#txtDate');
  await datePicker2.click();
  const calendar = page.locator('#ui-datepicker-div');
  await expect(calendar).toBeVisible();
  await calendar.locator('.ui-datepicker-year').selectOption('2026');
  await calendar.locator('.ui-datepicker-month').selectOption('8');
  await calendar.locator("td:not(.ui-datepicker-other-month) a[data-date='5']").click();
  await page.waitForTimeout(actionPause);
  await expect(datePicker2).toHaveValue('05/09/2026');

  // Date Picker 3 uses native date fields. Playwright fills these with ISO dates.
  const startDate = page.locator('#start-date');
  const endDate = page.locator('#end-date');
  await startDate.fill('2026-09-05');
  await page.waitForTimeout(actionPause);
  await endDate.fill('2026-09-10');
  await page.waitForTimeout(actionPause);
  await expect(startDate).toHaveValue('2026-09-05');
  await expect(endDate).toHaveValue('2026-09-10');
  await page.locator('.date-picker-box button.submit-btn').click();
  await expect(page.locator('#result')).toContainText(
    'You selected a range of 5 days.'
  );

  // Mouse hover action.
  const pointMe = page.getByRole('button', { name: 'Point Me' });
  await pointMe.hover();
  await page.waitForTimeout(actionPause);
  await expect(pointMe).toBeVisible();

  // Double-click action: copies Field1 text into Field2.
  const field1 = page.locator('#field1');
  const field2 = page.locator('#field2');
  await page.getByRole('button', { name: 'Copy Text' }).dblclick();
  await page.waitForTimeout(actionPause);
  await expect(field2).toHaveValue(await field1.inputValue());

  // Scroll only when a test needs to bring a specific area into view.
  const visitors = page.getByRole('heading', { name: 'Visitors' });
  await visitors.scrollIntoViewIfNeeded();
  await page.waitForTimeout(actionPause);
  await expect(visitors).toBeVisible();

  // File-upload action: chooses the local screenshot in the single-file control.
  const uploadFilePath =
    'C:/Users/prati/Pictures/Screenshots/Screenshot 2026-08-26 145533.png';
  const singleFileInput = page.locator('#singleFileInput');
  await singleFileInput.setInputFiles(uploadFilePath);
  await page.waitForTimeout(actionPause);
  await expect(singleFileInput).toHaveValue(
    /Screenshot 2026-08-26 145533\.png$/
  );

  // This button sends the selected file to the public practice site.
  // Enable it only when you want to perform the actual upload.
  // await page.getByRole('button', { name: 'Upload Single File' }).click();

  // Simple alert: verify its message and accept it.
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am an alert box!');
    await page.waitForTimeout(actionPause);
    await dialog.accept();
  });
  await page.locator('#alertBtn').click();

  // Confirmation alert: dismiss it to select Cancel and verify the result.
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('Press a button!');
    await page.waitForTimeout(actionPause);
    await dialog.dismiss();
  });
  await page.locator('#confirmBtn').click();
  await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');

  // Prompt alert: enter a value, accept it, and verify the displayed response.
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.defaultValue()).toBe('Harry Potter');
    await page.waitForTimeout(actionPause);
    await dialog.accept('Pratik');
  });
  await page.locator('#promptBtn').click();
  await expect(page.locator('#demo')).toHaveText(
    'Hello Pratik! How are you today?'
  );

  // New Tab: validate the page opened by the button.
  const newTabPromise = page.context().waitForEvent('page');
  await page.getByRole('button', { name: 'New Tab', exact: true }).click();
  const newTab = await newTabPromise;
  await newTab.waitForLoadState('domcontentloaded');
  await expect(newTab).toHaveURL(/pavantestingtools\.com/);
  await newTab.close();

  // Popup Windows: the visible Selenium popup is validated here.
  // Chromium can block the page's second window.open() call.
  const popupPromise = page.context().waitForEvent('page');
  await page.locator('#PopUp').click();
  const seleniumPopup = await popupPromise;
  await expect(seleniumPopup).toHaveURL(/selenium\.dev/);
  await seleniumPopup.close();

  // Drag-and-drop example.
  // await page.getByText('Drag me to my target', { exact: true }).dragTo(
  //   page.getByText('Drop here', { exact: true })
  // );
});
