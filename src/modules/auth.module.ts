import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from 'src/controller/auth/login.controller';
import { RegistroController } from 'src/controller/auth/registro.controller';
import { UserinfoController } from 'src/controller/auth/userinfo.controller';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { LoginRepository } from 'src/repository/auth/login.repository';
import { RegistroRepository } from 'src/repository/auth/registro.repository';
import { UserinfoRepository } from 'src/repository/auth/userinfo.repository';
import { LoginService } from 'src/service/auth/login.service';
import { RegistroService } from 'src/service/auth/registro.service';
import { UserinfoService } from 'src/service/auth/userinfo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [LoginController, UserinfoController, RegistroController],
  providers: [
    LoginService,
    LoginRepository,
    UserinfoService,
    UserinfoRepository,
    RegistroService,
    RegistroRepository,
  ],
})
export class AuthModule {}
