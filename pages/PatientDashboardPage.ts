import { expect, type Locator, type Page } from '@playwright/test';

export class PatientDashboardPage {
  readonly pageHeader: Locator;
  readonly editRegistrationInformationLink: Locator;
  readonly deletePatientLink: Locator;
  readonly deleteReasonInput: Locator;
  readonly deleteConfirmButton: Locator;
  readonly contactInfoToggle: Locator;

  constructor(private readonly page: Page) {
    this.pageHeader = page.getByText('Patient ID', { exact: true });
    this.editRegistrationInformationLink = page.getByText('Edit Registration Information', { exact: false });
    this.deletePatientLink = page.getByText('Delete Patient', { exact: true });
    this.deleteReasonInput = page.getByLabel('Reason', { exact: true });
    this.deleteConfirmButton = page.getByRole('button', { name: 'Confirm', exact: true });
    this.contactInfoToggle = page.getByText('Show Contact Info', { exact: false });
  }

  async verifyLoaded(): Promise<void> {
    await expect(this.pageHeader).toBeVisible();
    await expect(this.editRegistrationInformationLink).toBeVisible();
  }

  async getPatientId(): Promise<string> {
    const text = await this.page.locator('body').innerText();
    const match = text.match(/Patient ID\s+([A-Z0-9]+)/);

    if (!match) {
      throw new Error('Patient ID was not visible on the patient dashboard.');
    }

    return match[1];
  }

  async openEditRegistrationInformation(): Promise<void> {
    await this.editRegistrationInformationLink.click();
    await this.page.waitForURL('**/registrationapp/registrationSummary.page**');
  }

  async openDeleteDialog(): Promise<void> {
    await this.deletePatientLink.click();
    await expect(this.deleteReasonInput).toBeVisible();
  }

  async deletePatient(reason: string): Promise<void> {
    await this.openDeleteDialog();
    await this.deleteReasonInput.fill(reason);
    await this.deleteConfirmButton.click();
  }
}
