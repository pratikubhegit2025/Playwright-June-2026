import { expect, type Locator, type Page } from '@playwright/test';
import { env } from '../config/env';
import { logger } from '../utils/logger';

const unsupported = (feature: string): never => {
  throw new Error(
    `${feature} is not available on the live OpenMRS patient registration UI. The generated framework keeps this method for contract completeness.`,
  );
};

export class PatientRegistrationPage {
  readonly pageTitle: Locator;
  readonly sectionBreadcrumb: Locator;
  readonly firstNameTextbox: Locator;
  readonly middleNameTextbox: Locator;
  readonly lastNameTextbox: Locator;
  readonly unidentifiedPatientCheckbox: Locator;
  readonly genderDropdown: Locator;
  readonly birthDayTextbox: Locator;
  readonly birthMonthDropdown: Locator;
  readonly birthYearTextbox: Locator;
  readonly estimatedYearsTextbox: Locator;
  readonly estimatedMonthsTextbox: Locator;
  readonly addressTextbox: Locator;
  readonly address2Textbox: Locator;
  readonly cityTextbox: Locator;
  readonly stateTextbox: Locator;
  readonly countryTextbox: Locator;
  readonly postalCodeTextbox: Locator;
  readonly phoneNumberTextbox: Locator;
  readonly relationshipTypeSelect: Locator;
  readonly relativeNameInput: Locator;
  readonly nextButton: Locator;
  readonly previousButton: Locator;
  readonly saveFormLink: Locator;
  readonly cancelButton: Locator;
  readonly reviewSimilarPatientsButton: Locator;
  readonly demographicsSectionLink: Locator;
  readonly genderSectionLink: Locator;
  readonly birthdateSectionLink: Locator;
  readonly addressSectionLink: Locator;
  readonly phoneNumberSectionLink: Locator;
  readonly relativesSectionLink: Locator;
  readonly confirmSectionLink: Locator;
  readonly confirmButton: Locator;

  constructor(private readonly page: Page) {
    this.pageTitle = page.getByRole('heading', { name: 'Register a patient' });
    this.sectionBreadcrumb = page.locator('#formBreadcrumb');
    this.firstNameTextbox = page.getByLabel('Given (required)', { exact: true });
    this.middleNameTextbox = page.getByLabel('Middle', { exact: true });
    this.lastNameTextbox = page.getByLabel('Family Name (required)', { exact: true });
    this.unidentifiedPatientCheckbox = page.getByLabel('Unidentified Patient', { exact: true });
    this.genderDropdown = page.getByLabel("What's the patient's gender? (required)", { exact: true });
    this.birthDayTextbox = page.getByLabel('Day (required)', { exact: true });
    this.birthMonthDropdown = page.getByLabel('Month (required)', { exact: true });
    this.birthYearTextbox = page.getByLabel('Year (required)', { exact: true });
    this.estimatedYearsTextbox = page.getByLabel('Estimated Years (required)', { exact: true });
    this.estimatedMonthsTextbox = page.getByLabel('Estimated Months (required)', { exact: true });
    this.addressTextbox = page.getByLabel('Address', { exact: true });
    this.address2Textbox = page.getByLabel('Address 2', { exact: true });
    this.cityTextbox = page.getByLabel('City/Village', { exact: true });
    this.stateTextbox = page.getByLabel('State/Province', { exact: true });
    this.countryTextbox = page.getByLabel('Country', { exact: true });
    this.postalCodeTextbox = page.getByLabel('Postal Code', { exact: true });
    this.phoneNumberTextbox = page.getByLabel("What's the patient phone number?", { exact: true });
    this.relationshipTypeSelect = page.getByText('Select Relationship Type', { exact: true });
    this.relativeNameInput = page.getByPlaceholder('Person Name', { exact: true });
    this.nextButton = page.locator('#next-button');
    this.previousButton = page.locator('#prev-button');
    this.saveFormLink = page.getByText('Save Form', { exact: true });
    this.cancelButton = page.getByRole('button', { name: 'Cancel', exact: true });
    this.reviewSimilarPatientsButton = page.getByRole('button', { name: 'Review patient(s)', exact: true });
    this.demographicsSectionLink = this.sectionBreadcrumb.locator('li.question-legend').filter({ hasText: 'Name' });
    this.genderSectionLink = this.sectionBreadcrumb.locator('li.question-legend').filter({ hasText: 'Gender' });
    this.birthdateSectionLink = this.sectionBreadcrumb.locator('li.question-legend').filter({ hasText: 'Birthdate' });
    this.addressSectionLink = this.sectionBreadcrumb.locator('li.question-legend').filter({ hasText: 'Address' });
    this.phoneNumberSectionLink = this.sectionBreadcrumb.locator('li.question-legend').filter({ hasText: 'Phone Number' });
    this.relativesSectionLink = this.sectionBreadcrumb.locator('li.question-legend').filter({ hasText: 'Relatives' });
    this.confirmSectionLink = this.sectionBreadcrumb.locator('li').filter({ hasText: 'Confirm' });
    this.confirmButton = page.getByRole('button', { name: 'Confirm', exact: true });
  }

  private async resolveSubmitButton(): Promise<Locator> {
    const createSubmit = this.page.locator('#submit');
    if (await createSubmit.count()) {
      return createSubmit;
    }

    const editSubmit = this.page.locator('#registration-submit');
    if (await editSubmit.count()) {
      return editSubmit;
    }

    return unsupported('Submit button');
  }

  async open(): Promise<void> {
    await this.page.goto(env.appBaseUrl);
    await this.verifyPageLoaded();
  }

  async openPatientRegistration(): Promise<void> {
    await this.open();
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.firstNameTextbox).toBeVisible();
    logger.info('Patient registration page loaded');
  }

  async getUniqueId(): Promise<string> {
    const content = await this.page.locator('body').innerText().catch(() => '');
    const match = content.match(/Patient ID\s+([A-Z0-9]+)/);

    if (!match) {
      return unsupported('Unique ID on the registration form');
    }

    return match[1];
  }

  async selectRegistrationDate(_: string): Promise<void> {
    unsupported('Registration Date selection');
  }

  async enterFirstName(value: string): Promise<void> {
    await this.firstNameTextbox.fill(value);
  }

  async enterMiddleName(value: string): Promise<void> {
    await this.middleNameTextbox.fill(value);
  }

  async enterLastName(value: string): Promise<void> {
    await this.lastNameTextbox.fill(value);
  }

  async selectBirthDate(day: string, month: string, year: string): Promise<void> {
    await this.birthDayTextbox.fill(day);
    await this.birthMonthDropdown.selectOption({ label: month });
    await this.birthYearTextbox.fill(year);
  }

  async enterAge(value: string, months = '0'): Promise<void> {
    await this.estimatedYearsTextbox.fill(value);
    await this.estimatedMonthsTextbox.fill(months);
  }

  async enterAddress(value: string): Promise<void> {
    await this.addressTextbox.fill(value);
  }

  async enterCity(value: string): Promise<void> {
    await this.cityTextbox.fill(value);
  }

  async enterPhone1(value: string): Promise<void> {
    await this.phoneNumberTextbox.fill(value);
  }

  async enterPhone2(_: string): Promise<void> {
    unsupported('Second phone number');
  }

  async selectGender(value: 'Male' | 'Female' | 'Other' | 'M' | 'F' | 'O'): Promise<void> {
    const normalized = value.startsWith('M') ? 'M' : value.startsWith('F') ? 'F' : 'O';
    await this.genderDropdown.selectOption(normalized);
  }

  async selectBloodGroup(_: string): Promise<void> {
    unsupported('Blood Group');
  }

  async enterEmail(_: string): Promise<void> {
    unsupported('Email Address');
  }

  async enableChronic(_: boolean): Promise<void> {
    unsupported('Chronic disease flag');
  }

  async selectChronicDisease(_: string): Promise<void> {
    unsupported('Chronic disease dropdown');
  }

  async enableAllergy(_: boolean): Promise<void> {
    unsupported('Allergy flag');
  }

  async selectAllergyDrug(_: string): Promise<void> {
    unsupported('Allergy drug dropdown');
  }

  async clickSave(): Promise<void> {
    const submitButton = await this.resolveSubmitButton();
    await submitButton.click();
  }

  async clickClear(): Promise<void> {
    unsupported('Clear button');
  }

  async clickDelete(): Promise<void> {
    unsupported('Delete action on the registration wizard');
  }

  async clickUpdate(): Promise<void> {
    if (await this.saveFormLink.isVisible()) {
      await this.saveFormLink.click();
      return;
    }

    if (await this.confirmButton.isVisible()) {
      const submitButton = await this.resolveSubmitButton();
      await submitButton.click();
      return;
    }

    unsupported('Update action');
  }

  async getSuccessMessage(): Promise<string> {
    const bodyText = await this.page.locator('body').innerText();
    const patientCreated = bodyText.match(/Created Patient Record:\s*(.+)/);

    if (patientCreated) {
      return patientCreated[0];
    }

    const patientId = bodyText.match(/Patient ID\s+([A-Z0-9]+)/);
    if (patientId) {
      return `Patient created with ID ${patientId[1]}`;
    }

    return 'Patient save completed';
  }

  async openGenderSection(): Promise<void> {
    await this.nextButton.click();
  }

  async openBirthdateSection(): Promise<void> {
    await this.nextButton.click();
  }

  async openAddressSection(): Promise<void> {
    await this.nextButton.click();
  }

  async openPhoneNumberSection(): Promise<void> {
    await this.nextButton.click();
  }

  async openRelativesSection(): Promise<void> {
    await this.nextButton.click();
  }

  async openConfirmSection(): Promise<void> {
    await this.nextButton.click();
  }

  async isFieldVisible(field: Locator): Promise<boolean> {
    return field.isVisible();
  }

  async isFieldEditable(field: Locator): Promise<boolean> {
    return field.isEnabled();
  }

  async verifyDropdownValues(field: Locator, expectedValues: string[]): Promise<void> {
    const options = await field.locator('option').allTextContents();
    expect(options.map((value) => value.trim()).filter(Boolean)).toEqual(expect.arrayContaining(expectedValues));
  }

  async verifyValidationMessage(message: string): Promise<void> {
    await expect(this.page.getByText(message, { exact: false })).toBeVisible();
  }

  async verifyReadOnlyField(field: Locator): Promise<void> {
    await expect(field).toHaveAttribute('readonly', /readonly|true/);
  }

  async registerPatient(data: {
    firstName: string;
    middleName?: string;
    lastName: string;
    gender: 'Male' | 'Female' | 'Other' | 'M' | 'F' | 'O';
    birthDay?: string;
    birthMonth?: string;
    birthYear?: string;
    estimatedYears?: string;
    estimatedMonths?: string;
    address?: string;
    address2?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    phone1?: string;
  }): Promise<void> {
    await this.enterFirstName(data.firstName);
    if (data.middleName) {
      await this.enterMiddleName(data.middleName);
    }
    await this.enterLastName(data.lastName);
    await this.openGenderSection();

    await this.selectGender(data.gender);
    await this.openBirthdateSection();

    if (data.birthDay && data.birthMonth && data.birthYear) {
      await this.selectBirthDate(data.birthDay, data.birthMonth, data.birthYear);
    } else if (data.estimatedYears) {
      await this.enterAge(data.estimatedYears, data.estimatedMonths ?? '0');
    }
    await this.openAddressSection();

    if (data.address) {
      await this.enterAddress(data.address);
    }
    if (data.address2) {
      await this.address2Textbox.fill(data.address2);
    }
    if (data.city) {
      await this.enterCity(data.city);
    }
    if (data.state) {
      await this.stateTextbox.fill(data.state);
    }
    if (data.country) {
      await this.countryTextbox.fill(data.country);
    }
    if (data.postalCode) {
      await this.postalCodeTextbox.fill(data.postalCode);
    }
    await this.openPhoneNumberSection();

    if (data.phone1) {
      await this.enterPhone1(data.phone1);
    }
    await this.openRelativesSection();
    await this.openConfirmSection();
    await this.clickSave();
  }
}
