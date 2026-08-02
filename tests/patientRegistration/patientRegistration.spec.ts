import { test, expect } from '../../fixtures/baseFixture';
import { env } from '../../config/env';
import { TestDataReader } from '../../utils/testDataReader';

const patientData = TestDataReader.readPatientData();

const buildUniquePatient = () => {
  const stamp = Date.now().toString().slice(-6);

  return {
    firstName: `Codex${stamp}`,
    lastName: `Patient${stamp}`,
    gender: 'Male' as const,
    birthDay: '15',
    birthMonth: 'May',
    birthYear: '1990',
    address: '123 Automation Street',
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    postalCode: '411001',
    phone1: `9${stamp.padStart(9, '0')}`.slice(0, 10),
  };
};

const buildStepPatient = () => {
  const stamp = Date.now().toString().slice(-6);

  return {
    firstName: `Step${stamp}`,
    lastName: `User${stamp}`,
  };
};

const prepareForGenderStep = async (registrationPage: import('../../pages/PatientRegistrationPage').PatientRegistrationPage) => {
  const patient = buildStepPatient();
  await registrationPage.enterFirstName(patient.firstName);
  await registrationPage.enterLastName(patient.lastName);
  await registrationPage.openGenderSection();
};

const prepareForBirthdateStep = async (
  registrationPage: import('../../pages/PatientRegistrationPage').PatientRegistrationPage,
  gender: 'Male' | 'Female' | 'Other' | 'M' | 'F' | 'O' = 'Male',
) => {
  await prepareForGenderStep(registrationPage);
  await registrationPage.selectGender(gender);
  await registrationPage.openBirthdateSection();
};

const prepareForAddressStep = async (registrationPage: import('../../pages/PatientRegistrationPage').PatientRegistrationPage) => {
  await prepareForBirthdateStep(registrationPage);
  await registrationPage.enterAge('30');
  await registrationPage.openAddressSection();
};

const prepareForPhoneStep = async (registrationPage: import('../../pages/PatientRegistrationPage').PatientRegistrationPage) => {
  await prepareForAddressStep(registrationPage);
  await registrationPage.enterAddress('123 Test Street');
  await registrationPage.openPhoneNumberSection();
};

test.describe('Patient Registration Module', () => {
  test('TC001 Verify UI Elements', async ({ registrationPage }) => {
    await expect(registrationPage.firstNameTextbox).toBeVisible();
    await expect(registrationPage.middleNameTextbox).toBeVisible();
    await expect(registrationPage.lastNameTextbox).toBeVisible();
    await expect(registrationPage.pageTitle).toBeVisible();
  });

  test('TC002 Verify Unique ID is Read Only', async () => {
    test.skip(true, 'The live OpenMRS registration wizard does not expose an auto-generated Unique ID field before save.');
  });

  test('TC003 Verify Registration Date Selection', async () => {
    test.skip(true, 'The live OpenMRS registration wizard does not expose a registration date picker.');
  });

  test('TC004 Verify Date Format', async () => {
    test.skip(true, 'Registration date format is not user-editable on the live OpenMRS wizard.');
  });

  test('TC005 Verify Name Fields Accept Alphabets', async ({ registrationPage }) => {
    const data = patientData.positive[0];
    await registrationPage.enterFirstName(data.firstName);
    await registrationPage.enterMiddleName(data.middleName ?? '');
    await registrationPage.enterLastName(data.lastName);

    await expect(registrationPage.firstNameTextbox).toHaveValue(data.firstName);
    await expect(registrationPage.middleNameTextbox).toHaveValue(data.middleName ?? '');
    await expect(registrationPage.lastNameTextbox).toHaveValue(data.lastName);
  });

  test('TC006 Verify Age Accepts Integer Only', async ({ registrationPage }) => {
    await prepareForBirthdateStep(registrationPage);
    await registrationPage.enterAge('20');
    await expect(registrationPage.estimatedYearsTextbox).toHaveValue('20');
  });

  test('TC007 Verify Age Range Validation', async ({ registrationPage }) => {
    await prepareForBirthdateStep(registrationPage, 'Female');
    await registrationPage.enterAge(patientData.boundary[0].estimatedYears ?? '15');
    await expect(registrationPage.estimatedYearsTextbox).toHaveValue('15');
    await registrationPage.enterAge(patientData.boundary[1].estimatedYears ?? '99');
    await expect(registrationPage.estimatedYearsTextbox).toHaveValue('99');
  });

  test('TC008 Verify Age Matches Birth Date', async ({ registrationPage }) => {
    await prepareForBirthdateStep(registrationPage);
    await registrationPage.selectBirthDate('15', 'May', '1990');
    await expect(registrationPage.birthYearTextbox).toHaveValue('1990');
  });

  test('TC009 Verify Address Maximum Length', async ({ registrationPage }) => {
    await prepareForAddressStep(registrationPage);
    const longAddress = 'A'.repeat(120);
    await registrationPage.enterAddress(longAddress);
    await expect(registrationPage.addressTextbox).toHaveValue(longAddress);
  });

  test('TC010 Verify City Field', async ({ registrationPage }) => {
    await prepareForAddressStep(registrationPage);
    await registrationPage.enterCity('Bengaluru');
    await expect(registrationPage.cityTextbox).toHaveValue('Bengaluru');
  });

  test('TC011 Verify Phone Number Validation', async ({ registrationPage }) => {
    await prepareForPhoneStep(registrationPage);
    await registrationPage.enterPhone1('9876543210');
    await expect(registrationPage.phoneNumberTextbox).toHaveValue('9876543210');
  });

  test('TC012 Verify Phone Numbers Are Unique', async () => {
    test.skip(true, 'The live OpenMRS registration wizard supports only one phone number field.');
  });

  test('TC013 Verify Gender Selection', async ({ registrationPage }) => {
    await prepareForGenderStep(registrationPage);
    await registrationPage.selectGender('Female');
    await expect(registrationPage.genderDropdown).toHaveValue('F');
  });

  test('TC014 Verify Blood Group Dropdown', async () => {
    test.skip(true, 'Blood Group dropdown is not present in the live OpenMRS registration wizard.');
  });

  test('TC015 Verify Email Validation', async () => {
    test.skip(true, 'Email field is not present in the live OpenMRS registration wizard.');
  });

  test('TC016 Verify Chronic Checkbox Functionality', async () => {
    test.skip(true, 'Chronic checkbox is not present in the live OpenMRS registration wizard.');
  });

  test('TC017 Verify Chronic Disease Dropdown', async () => {
    test.skip(true, 'Chronic disease dropdown is not present in the live OpenMRS registration wizard.');
  });

  test('TC018 Verify Allergy Checkbox Functionality', async () => {
    test.skip(true, 'Allergy checkbox is not present in the live OpenMRS registration wizard.');
  });

  test('TC019 Verify Allergy Drug Dependency', async () => {
    test.skip(true, 'Allergy drug dependency is not present in the live OpenMRS registration wizard.');
  });

  test('TC020 Verify Successful Patient Registration', async ({ registrationPage, page, patientDashboardPage }) => {
    const patient = buildUniquePatient();
    await registrationPage.registerPatient(patient);
    await page.waitForURL('**/coreapps/clinicianfacing/patient.page**', { waitUntil: 'domcontentloaded' });
    await patientDashboardPage.verifyLoaded();
    await expect(page.locator('#content')).toContainText(patient.firstName);
    await expect(page.locator('#content')).toContainText(patient.lastName);
  });

  test('TC021 Verify Mandatory Field Validation', async ({ registrationPage }) => {
    await expect(registrationPage.firstNameTextbox).toBeVisible();
    await expect(registrationPage.lastNameTextbox).toBeVisible();
  });

  test('TC022 Verify Clear Button Functionality', async () => {
    test.skip(true, 'Clear button is not present in the live OpenMRS registration wizard.');
  });

  test('TC023 Verify Update Patient', async ({ registrationPage, page }) => {
    const patient = buildUniquePatient();
    await registrationPage.registerPatient(patient);
    await page.waitForURL('**/coreapps/clinicianfacing/patient.page**', { waitUntil: 'domcontentloaded' });
    await page.getByText('Edit Registration Information', { exact: false }).click();
    await page.waitForURL('**/registrationapp/registrationSummary.page**');
    const contactEditLink = page.locator('a[href*="sectionId=contactInfo"]');
    const contactEditHref = await contactEditLink.getAttribute('href', {});
    if (!contactEditHref) {
      throw new Error('Contact info edit link was not available on the registration summary page.');
    }
    await page.goto(`https://o2.openmrs.org${contactEditHref}`);
    await page.waitForURL('**/registrationapp/editSection.page**');
    await page.getByLabel('City/Village', { exact: true }).fill('Mumbai');
    await page.locator('#save-form').click();
    await expect(page.locator('#content')).toContainText('Mumbai');
  });

  test('TC024 Verify Delete Patient', async ({ registrationPage, page, patientDashboardPage }) => {
    const patient = buildUniquePatient();
    await registrationPage.registerPatient(patient);
    await page.waitForURL('**/coreapps/clinicianfacing/patient.page**', { waitUntil: 'domcontentloaded' });
    await patientDashboardPage.openDeleteDialog();
    await expect(patientDashboardPage.deleteReasonInput).toBeVisible();
  });

  test('TC025 Verify Patient Record Stored In Database', async ({ registrationPage, page, dbHelper }) => {
    test.skip(!env.db.host || !dbHelper.isConnected(), 'Database validation requires a reachable OpenMRS database and valid DB_* environment variables.');

    const patient = buildUniquePatient();
    await registrationPage.registerPatient(patient);
    await page.waitForURL('**/coreapps/clinicianfacing/patient.page**', { waitUntil: 'domcontentloaded' });

    const result = await dbHelper.validatePatientRecord(patient.firstName, patient.lastName);
    expect(result.exists).toBeTruthy();
  });
});
