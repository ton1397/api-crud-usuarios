import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './model/dao/usuario_entity.dao';
import { UsuarioModule } from './modules/usuario.module';
import { AuthModule } from './modules/auth.module';
import DatabaseModule from './modules/database.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    UsuarioModule,
    AuthModule,
    DatabaseModule,
  ],
  exports: [TypeOrmModule],
})
export class AppModule {}
