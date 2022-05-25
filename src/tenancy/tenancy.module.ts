import { Global, Module, Scope } from '@nestjs/common';
import { getConnection, createConnection, Connection } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { ConfigService } from '../config/config.service';

export const CONNECTION = 'CONNECTION';

const connectionFactory = {
  provide: CONNECTION,
  scope: Scope.REQUEST,
  inject: [REQUEST, ConfigService],
  useFactory: async (
    _request,
    configService: ConfigService,
  ): Promise<Connection> => {
    try {
      return getConnection('nest-1');
    } catch (error) {
      return createConnection({
        name: 'nest-1',
        type: 'mysql',
        database: 'nest-1',
        logging: configService.get('db.admin.debug'),
        host: configService.get('db.admin.host'),
        port: configService.get('db.admin.port'),
        username: configService.get('db.admin.user'),
        password: configService.get('db.admin.password'),
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: true,
        extra: {
          multipleStatements: configService.get('db.admin.multipleStatements'),
          connectionLimit: configService.get('db.admin.connectionLimit'),
          acquireTimeout: configService.get('db.admin.acquireTimeout'),
          queueLimit: configService.get('db.admin.queueLimit'),
          timezone: configService.get('db.admin.timezone'),
        },
      });
    }
  },
};

@Global()
@Module({
  providers: [connectionFactory],
  exports: [CONNECTION],
})
export class TenancyModule {}
