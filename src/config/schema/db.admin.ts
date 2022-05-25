import * as Convict from 'convict';

export interface TConfigSchema {
  port: number;
  host: string;
  name: string;
  user: string;
  password: string;
  debug: boolean;
  connectionLimit: number;
  acquireTimeout: number;
  queueLimit: number;
  charset: string;
  timezone: string;
  multipleStatements: boolean;
}

export const DbAdminSchema: Convict.Schema<TConfigSchema> = {
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3306,
    env: 'DB_ADMIN_PORT',
  },
  host: {
    doc: 'Database host name/IP',
    format: 'String',
    default: 'localhost',
    env: 'DB_ADMIN_HOST',
  },
  name: {
    doc: 'Database name',
    format: 'String',
    default: 'platform_admin',
    env: 'DB_ADMIN_NAME',
  },
  user: {
    doc: 'Database user',
    format: 'String',
    default: 'root',
    env: 'DB_ADMIN_USER',
  },
  password: {
    doc: 'Database password',
    format: 'String',
    default: 'password',
    env: 'DB_ADMIN_PASSWORD',
  },
  debug: {
    format: 'Boolean',
    default: false,
    env: 'DB_ADMIN_DEBUG',
  },
  connectionLimit: {
    format: 'Number',
    default: 10,
    env: 'DB_ADMIN_CONNECTION_LIMIT',
  },
  acquireTimeout: {
    format: 'Number',
    default: 20000,
    env: 'DB_ADMIN_ACQUIRE_TIMEOUT',
  },
  queueLimit: {
    format: 'Number',
    default: 1000,
    env: 'DB_ADMIN_QUEUE_LIMIT',
  },
  charset: {
    format: String,
    default: 'utf8mb4',
    env: 'DB_ADMIN_CHARSET',
  },
  timezone: {
    doc: 'Database timezone',
    format: String,
    default: 'UTC',
    env: 'DB_ADMIN_TIMEZONE',
  },
  multipleStatements: {
    doc: 'Multiple Statements',
    format: Boolean,
    default: true,
    env: 'DB_ADMIN_MULTIPLE_STATEMENTS',
  },
};
