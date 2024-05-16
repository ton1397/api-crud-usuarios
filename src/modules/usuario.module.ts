import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApagarUsuarioController } from 'src/controller/usuario/apagar_usuario.controller';
import { CriarUsuarioController } from 'src/controller/usuario/criar_usuario.controller';
import { EditarUsuarioController } from 'src/controller/usuario/editar_usuario.controller';
import { UsuarioController } from 'src/controller/usuario/usuario.controllet';
import { UsuariosController } from 'src/controller/usuario/usuarios.controller';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { ApagarUsuarioRepository } from 'src/repository/usuario/apagar_usuario.repository';
import { CriarUsuarioRepository } from 'src/repository/usuario/criar_usuario.repository';
import { EditarUsuarioRepository } from 'src/repository/usuario/editar_usuario.repository';
import { UsuarioRepository } from 'src/repository/usuario/usuario.repository';
import { UsuariosRepository } from 'src/repository/usuario/usuarios.repository';
import { ApagarUsuarioService } from 'src/service/usuario/apagar_usuario.service';
import { CriarUsuarioService } from 'src/service/usuario/criar_usuario.service';
import { EditarUsuarioService } from 'src/service/usuario/editar_usuario.service';
import { UsuarioService } from 'src/service/usuario/usuario.service';
import { UsuariosService } from 'src/service/usuario/usuarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [
    UsuariosController,
    CriarUsuarioController,
    EditarUsuarioController,
    UsuarioController,
    ApagarUsuarioController,
  ],
  providers: [
    UsuariosService,
    UsuariosRepository,
    CriarUsuarioService,
    CriarUsuarioRepository,
    UsuarioService,
    UsuarioRepository,
    EditarUsuarioService,
    EditarUsuarioRepository,
    ApagarUsuarioService,
    ApagarUsuarioRepository,
  ],
})
export class UsuarioModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        CriarUsuarioController,
        EditarUsuarioController,
        UsuarioController,
        UsuariosController,
        ApagarUsuarioController,
      );
  }
}
