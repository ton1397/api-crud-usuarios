import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConexaoDAO } from './model/dao/conexao_postgres.dao';
import { Usuario } from './model/dao/usuario_entity.dao';
import { UsuarioModule } from './modules/usuario.module';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: ConexaoDAO,
    }),
    TypeOrmModule.forFeature([Usuario]),
    UsuarioModule,
    AuthModule,
  ],
  exports: [TypeOrmModule],
})
export class AppModule {}
