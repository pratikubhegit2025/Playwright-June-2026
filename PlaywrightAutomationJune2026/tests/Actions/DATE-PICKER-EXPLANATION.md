# Date-picker explanation and interview questions

## Date-picker code location

The date-picker examples are in [`Demo1.spec.ts`](./Demo1.spec.ts), lines 59–86. The project contains three different date-picker styles:

| Example | Locators | Interaction | Value format |
| --- | --- | --- | --- |
| Date Picker 1 | `#datepicker` | Fill the input directly | `MM/DD/YYYY` |
| Date Picker 2 | `#txtDate`, `#ui-datepicker-div` | Open the jQuery UI calendar, select year/month/day | `DD/MM/YYYY` |
| Date Picker 3 | `#start-date`, `#end-date` | Fill native date inputs and submit the range | `YYYY-MM-DD` |

## Explanation

### Date Picker 1: direct fill

```ts
const datePicker1 = page.locator('#datepicker');
await datePicker1.fill('09/05/2026');
await expect(datePicker1).toHaveValue('09/05/2026');
```

This control accepts typed text in `MM/DD/YYYY` format. `fill()` clears the existing value and enters the new value. The `toHaveValue()` assertion confirms that the input contains the expected date. This is the simplest approach, but it should only be used when the application accepts direct text entry and the format is known.

### Date Picker 2: custom jQuery UI calendar

```ts
const datePicker2 = page.locator('#txtDate');
await datePicker2.click();
const calendar = page.locator('#ui-datepicker-div');
await expect(calendar).toBeVisible();
await calendar.locator('.ui-datepicker-year').selectOption('2026');
await calendar.locator('.ui-datepicker-month').selectOption('8');
await calendar.locator("td:not(.ui-datepicker-other-month) a[data-date='5']").click();
await expect(datePicker2).toHaveValue('05/09/2026');
```

This is a custom calendar, so the test must interact with the widget rather than only filling the input. The calendar is checked for visibility before its controls are used. The year is selected by its option value, while the month uses a zero-based value: `8` represents September. The day locator excludes `.ui-datepicker-other-month` so that a `5` displayed from an adjacent month cannot be selected accidentally. The final assertion verifies the formatted value written back to the input.

### Date Picker 3: native date range

```ts
await page.locator('#start-date').fill('2026-09-05');
await page.locator('#end-date').fill('2026-09-10');
await page.locator('.date-picker-box button.submit-btn').click();
await expect(page.locator('#result')).toContainText(
  'You selected a range of 5 days.'
);
```

These fields are native `input[type="date"]` controls. Playwright should fill them with the ISO format `YYYY-MM-DD`. The test verifies both field values and then validates the business result. The five-day result indicates that the application calculates the difference between September 5 and September 10 correctly.

## Good practices and improvement opportunities

- Prefer accessible locators such as `getByLabel()` or `getByRole()` when the application exposes usable labels; use CSS IDs when the page does not provide a better contract.
- Keep the date format explicit. Display format and native input value format are not always the same.
- Scope calendar controls to the visible calendar container to avoid duplicate or hidden elements.
- Confirm the calendar is visible before selecting a date.
- Avoid fixed waits such as `waitForTimeout()` in production tests; replace them with state-based assertions. The waits in this file are training pauses so actions can be watched in headed mode.
- Add boundary coverage for disabled dates, month ends, leap years, minimum/maximum dates, invalid ranges, and timezone behavior.
- For maintainability, move these locators and actions into a page object when the examples become part of a reusable test suite.

## Interview questions and answers

1. **How would you automate a native date input in Playwright?**  
   Locate it by label or a stable selector, then use `fill()` with `YYYY-MM-DD` and verify it with `toHaveValue()`.

2. **How do you automate a custom calendar widget?**  
   Open the input, wait for the calendar to be visible, select the required month/year, click the correct day, and assert the resulting input value.

3. **Why is `td:not(.ui-datepicker-other-month)` important here?**  
   Calendar grids often show days from the previous or next month. The filter prevents a duplicate day number from the wrong month being selected.

4. **Why is September selected with `selectOption('8')`?**  
   This jQuery UI month select uses zero-based values: January is `0`, so September is `8`.

5. **What is the difference between a displayed date and an input value?**  
   A browser may display a localized date, while a native date input stores its value as `YYYY-MM-DD`. Assertions must match the control's actual value contract.

6. **How would you test a date range picker?**  
   Select both dates, assert both field values, submit the range, and verify valid and invalid ordering, same-day ranges, disabled dates, and boundary rules.

7. **How would you verify that a date is disabled?**  
   Assert `toBeDisabled()` or `aria-disabled="true"`, then verify that attempting to select it does not change the selected value.

8. **How do you avoid flaky waits in date-picker tests?**  
   Wait for meaningful state, such as `toBeVisible()` for the calendar or `toHaveValue()` for the input. Avoid arbitrary fixed delays in production tests.

9. **How can timezone differences affect date tests?**  
   Converting a date through local midnight can shift it by one day. Use date-only strings where possible and configure the browser timezone when the application depends on local time.

10. **How would you select a day when the calendar contains duplicate day numbers?**  
    First select or verify the target month and year, scope the locator to the active calendar, and exclude adjacent-month cells.

11. **Where should date-picker actions live in a Page Object Model?**  
    Locators and reusable actions belong in a page object; the spec should contain the business scenario and assertions.

12. **How would you debug a failing date-picker test?**  
    Inspect the trace and screenshot, verify the actual DOM/value format, confirm month indexing, check duplicate day elements, and replace timing assumptions with state assertions.

