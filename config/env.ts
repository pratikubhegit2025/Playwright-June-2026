import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

type DbConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
};

export type AppEnv = {
  appBaseUrl: string;
  openmrsBaseUrl: string;
  username: string;
  password: string;
  headless: boolean;
  defaultTimeout: number;
  db: DbConfig;
};

const toNumber = (value: string | undefined, fallback: number): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const toBoolean = (value: string | undefined, fallback: boolean): boolean => {
  if (value === undefined) {
    return fallback;
  }

  return value.toLowerCase() === 'true';
};

export const env: AppEnv = {
  appBaseUrl:
    process.env.APP_BASE_URL ??
    'https://o2.openmrs.org/openmrs/registrationapp/registerPatient.page?appId=referenceapplication.registrationapp.registerPatient',
  openmrsBaseUrl: process.env.OPENMRS_BASE_URL ?? 'https://o2.openmrs.org/openmrs/login.htm',
  username: process.env.OPENMRS_USERNAME ?? 'admin',
  password: process.env.OPENMRS_PASSWORD ?? 'Admin123',
  headless: toBoolean(process.env.HEADLESS, true),
  defaultTimeout: toNumber(process.env.DEFAULT_TIMEOUT_MS, 30_000),
  db: {
    host: process.env.DB_HOST ?? 'localhost',
    port: toNumber(process.env.DB_PORT, 3306),
    user: process.env.DB_USER ?? 'openmrs',
    password: process.env.DB_PASSWORD ?? 'openmrs',
    database: process.env.DB_NAME ?? 'openmrs',
  },
};
