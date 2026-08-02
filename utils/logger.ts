import path from 'node:path';
import winston from 'winston';

const logFormat = winston.format.printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level}] ${stack ?? message}`;
});

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL ?? 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    logFormat,
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.resolve(process.cwd(), 'reports', 'execution.log'),
    }),
  ],
});
