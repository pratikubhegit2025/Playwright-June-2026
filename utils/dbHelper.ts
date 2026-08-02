import mysql, { type Pool, type RowDataPacket } from 'mysql2/promise';
import { env } from '../config/env';
import { logger } from './logger';

export type PatientDbResult = {
  exists: boolean;
  patientId?: number;
  uuid?: string;
  givenName?: string;
  familyName?: string;
};

export class DbHelper {
  private pool?: Pool;
  private connected = false;

  async connect(): Promise<void> {
    if (this.pool) {
      return;
    }

    this.pool = mysql.createPool({
      host: env.db.host,
      port: env.db.port,
      user: env.db.user,
      password: env.db.password,
      database: env.db.database,
      connectionLimit: 5,
      namedPlaceholders: true,
    });

    try {
      const connection = await this.pool.getConnection();
      await connection.ping();
      connection.release();
      this.connected = true;
      logger.info('Database pool created');
    } catch (error) {
      this.connected = false;
      logger.warn(`Database connection skipped: ${(error as Error).message}`);
    }
  }

  isConnected(): boolean {
    return this.connected;
  }

  async executeQuery<T extends RowDataPacket[]>(query: string, params: Record<string, unknown>): Promise<T> {
    if (!this.pool) {
      throw new Error('Database connection is not initialized. Call connect() first.');
    }

    const [rows] = await this.pool.execute<T>(query, params as never);
    return rows;
  }

  async validatePatientRecord(firstName: string, lastName: string): Promise<PatientDbResult> {
    const query = `
      SELECT
        p.patient_id AS patientId,
        per.uuid AS uuid,
        pn.given_name AS givenName,
        pn.family_name AS familyName
      FROM patient p
      INNER JOIN person per ON per.person_id = p.patient_id
      INNER JOIN person_name pn ON pn.person_id = p.patient_id AND pn.preferred = 1
      WHERE pn.given_name = :firstName
        AND pn.family_name = :lastName
        AND per.voided = 0
      ORDER BY p.date_created DESC
      LIMIT 1
    `;

    const rows = await this.executeQuery<
      Array<RowDataPacket & { patientId: number; uuid: string; givenName: string; familyName: string }>
    >(query, {
      firstName,
      lastName,
    });

    if (!rows.length) {
      return { exists: false };
    }

    return {
      exists: true,
      patientId: rows[0].patientId,
      uuid: rows[0].uuid,
      givenName: rows[0].givenName,
      familyName: rows[0].familyName,
    };
  }

  async disconnect(): Promise<void> {
    if (!this.pool) {
      return;
    }

    await this.pool.end();
    this.pool = undefined;
    this.connected = false;
    logger.info('Database pool closed');
  }
}
