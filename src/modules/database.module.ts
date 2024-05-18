import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        type: 'postgres',
        entities: [__dirname + '/../**/*_entity.dao{.ts,.js}'],
        synchronize: false,
        url: process.env.DATABASE_URL,
      }),
    }),
  ],
})
class DatabaseModule {}

export default DatabaseModule;
