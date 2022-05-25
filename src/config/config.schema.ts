import * as Convict from 'convict';
import { DbAdminSchema } from './schema/db.admin';

export interface TConfigSchema {
  port: number;
}

export const Schema: Convict.Schema<TConfigSchema> = {
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT',
    arg: 'port',
  },
  db: {
    admin: DbAdminSchema,
  },
};
