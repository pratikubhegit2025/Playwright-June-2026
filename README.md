# Playwright Automation Framework for OpenMRS Patient Registration

This project is a production-style Playwright + TypeScript automation framework scaffolded against the live OpenMRS patient registration UI at [o2.openmrs.org](https://o2.openmrs.org/openmrs/login.htm).

## Important Scope Note

The requested healthcare registration specification is broader than the real OpenMRS page that was inspected from the browser DOM. The live UI supports:

- Patient name
- Gender
- Birth date or estimated age
- Address
- One phone number
- Relationship capture
- Patient creation
- Registration edit flow
- Patient delete flow
- Patient dashboard persistence checks

The live UI does not currently expose:

- Registration date picker
- Second phone number
- Blood group
- Email
- Chronic disease controls
- Allergy controls
- Clear button
- Pre-save read-only unique ID

Those gaps are preserved in code as explicit `skip` coverage or descriptive unsupported methods rather than being silently faked.

## Project Structure

```text
project-root
├── .github/workflows/playwright.yml
├── config/env.ts
├── fixtures/baseFixture.ts
├── pages/PatientDashboardPage.ts
├── pages/PatientRegistrationPage.ts
├── reports
├── testData/patientData.json
├── tests/patientRegistration/patientRegistration.spec.ts
├── utils/dbHelper.ts
├── utils/logger.ts
├── utils/screenshotHelper.ts
├── utils/testDataReader.ts
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Provide environment variables in a local `.env` file if you do not want to use the built-in defaults:

```env
OPENMRS_BASE_URL=https://o2.openmrs.org/openmrs/login.htm
OPENMRS_USERNAME=admin
OPENMRS_PASSWORD=Admin123
APP_BASE_URL=https://o2.openmrs.org/openmrs/registrationapp/registerPatient.page?appId=referenceapplication.registrationapp.registerPatient
HEADLESS=true
DEFAULT_TIMEOUT_MS=30000
DB_HOST=localhost
DB_PORT=3306
DB_USER=openmrs
DB_PASSWORD=openmrs
DB_NAME=openmrs
```

## Run Tests

```bash
npm run test:patient-registration
```

Run headed:

```bash
npm run test:headed
```

## Reporting

- HTML report: `reports/html`
- Allure results: `reports/allure-results`
- Screenshots and traces: `test-results`
- Execution log: `reports/execution.log`

## Locator Strategy Used

The POM was generated from the live DOM using this priority:

1. Stable `id`
2. Stable `name`
3. Accessible labels
4. Role-based locators
5. Placeholder text
6. CSS fallback only when needed

## Locator Inventory

| Element | Locator | Locator Type | Stability |
| ------- | ------- | ------------ | --------- |
| Register page title | `getByRole('heading', { name: 'Register a patient' })` | Role | Medium Stability |
| Given name | `input[name="givenName"]` | name | High Stability |
| Middle name | `input[name="middleName"]` | name | High Stability |
| Family name | `input[name="familyName"]` | name | High Stability |
| Unidentified patient | `#checkbox-unknown-patient` | id | High Stability |
| Gender dropdown | `#gender-field` | id | High Stability |
| Birth day | `input[name="birthdateDay"]` | name | High Stability |
| Birth month | `select[name="birthdateMonth"]` | name | High Stability |
| Birth year | `input[name="birthdateYear"]` | name | High Stability |
| Estimated years | `input[name="birthdateYears"]` | name | High Stability |
| Estimated months | `input[name="birthdateMonths"]` | name | High Stability |
| Address 1 | `#address1` | id | High Stability |
| Address 2 | `#address2` | id | High Stability |
| City or Village | `#cityVillage` | id | High Stability |
| State or Province | `#stateProvince` | id | High Stability |
| Country | `#country` | id | High Stability |
| Postal code | `#postalCode` | id | High Stability |
| Phone number | `input[name="phoneNumber"]` | name | High Stability |
| Relationship type | `#relationship_type` | id | High Stability |
| Relative name | `getByPlaceholder('Person Name')` | Placeholder | Medium Stability |
| Next button | `#next-button` | id | High Stability |
| Previous button | `#prev-button` | id | High Stability |
| Submit button | `#submit, #registration-submit` | CSS id fallback for create and edit flows | Medium Stability |
| Save form link | `#save-form` | id | High Stability |
| Review patient(s) | `#reviewSimilarPatientsButton` | id | High Stability |
| Edit registration information | `#application\\.registrationapp\\.summary\\.editPatientLink` | escaped id | High Stability |
| Delete patient | `#org\\.openmrs\\.module\\.coreapps\\.deletePatient` | escaped id | High Stability |
| Delete reason | `#delete-reason` | id | High Stability |

## Why These Locators Were Selected

- `id` locators were preferred wherever the live DOM exposed stable identifiers.
- Placeholder and role locators were used only where the DOM lacked a clean id.
- CSS fallback is used only to support both create and edit page variants with one POM contract.

## Unstable Locator Warnings

- OpenMRS generates transient `fr####-field` ids for several form inputs, so the framework intentionally avoids those ids and uses stable `name` attributes instead.
- The submit action also differs between initial registration and edit flows.

## Suggested Improvements for Developers

- Add explicit `data-testid` attributes to all wizard controls.
- Add a dedicated success toast test id after patient creation.
- Expose separate stable ids for create and edit phone controls through reusable metadata.
- Add a second phone field only if it is a real business requirement.
- Add pre-save patient identifier visibility only if the application truly generates one before submission.
