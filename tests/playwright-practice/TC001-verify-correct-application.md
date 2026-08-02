# TC001 - Verify navigation lands on the correct application

## Objective
Verify that opening the Playwright practice URL loads the intended application page and not a different site.

## Preconditions
- Browser is available.
- Internet access is available.

## Test Steps
1. Open the URL https://testautomationpractice.blogspot.com/p/playwrightpractice.html.
2. Wait for the page heading and subtitle to appear.
3. Verify the URL ends with /playwrightpractice.html.
4. Verify the navigation link for PlaywrightPractice is visible and points to the expected URL.

## Expected Result
The page title/heading and the PlaywrightPractice navigation link are visible, and the URL matches the target application page.
