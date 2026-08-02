import fs from 'node:fs';
import path from 'node:path';

export type PatientRecord = {
  registrationDate?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
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
  phone2?: string;
  gender?: string;
  bloodGroup?: string;
  email?: string;
  isChronic?: boolean;
  chronicDisease?: string;
  isAllergy?: boolean;
  allergyDrug?: string;
  expectedValidation?: string;
  unsupportedInOpenMrs?: boolean;
};

export type PatientDataSet = {
  positive: PatientRecord[];
  boundary: PatientRecord[];
  negative: PatientRecord[];
  validation: PatientRecord[];
};

export class TestDataReader {
  static readPatientData(filePath = path.resolve(process.cwd(), 'testData', 'patientData.json')): PatientDataSet {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as PatientDataSet;
  }
}
