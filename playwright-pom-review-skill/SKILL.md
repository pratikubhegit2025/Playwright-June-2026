---
name: playwright-pom-review
description: Review existing Playwright Page Object Model files and generate refactored TypeScript POM classes with maintainable locator strategy. Use when Codex needs to audit locators, replace disallowed id or xpath selectors, remove hard waits, separate action and validation methods, score POM quality, or recommend accessibility improvements for long-term test stability.
---

# Playwright POM Review

Review every POM with this workflow:

1. Read the page object class fully before editing it.
2. Record every locator and classify it by type.
3. Flag `id`, `xpath`, `nth`, styling-based CSS, hard waits, duplicate locators, and missing page validations.
4. Prefer refactoring to these locator families in order:
   - `getByRole()`
   - `getByLabel()`
   - `getByPlaceholder()`
   - `getByText()`
   - filter-based locators
5. If no stable accessible locator exists, do not fall back to xpath. Keep the review note: `Developer should add accessible label or data-testid.`

Apply these coding rules:

- Keep locators as readonly class properties.
- Keep action methods focused on user actions only.
- Keep validation methods separate from actions.
- Use Playwright auto-waiting through `expect(...)`.
- Never add `waitForTimeout()`, sleeps, or custom polling.
- Use clear locator names such as `saveButton`, `firstNameTextbox`, and `emailTextbox`.
- Use clear method names such as `clickSave()`, `enterFirstName()`, and `verifyPageLoaded()`.

When writing the review output:

- Produce a locator review table with columns: `Locator`, `Type`, `Issue`, `Recommendation`.
- Score maintainability, locator stability, readability, reusability, and overall quality.
- Group findings into critical, major, and minor issues.
- Include refactored TypeScript code that follows the locator policy.

When reviewing wizard-style pages:

- Prefer visible section text, labels, and roles over internal navigation ids.
- If next or previous controls have no accessible name, recommend adding one instead of relying on hidden implementation details.

When the application exposes dynamic generated ids:

- Treat them as unstable even if they appear to work.
- Prefer the associated label, role, or placeholder when available.
