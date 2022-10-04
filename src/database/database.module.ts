import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigType } from '@nestjs/config';
import config from '../config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          uri: configService.mongoHost,
        };
      },
      inject: [config.KEY],
    }),
  ],
})
export class DatabaseModule {}
