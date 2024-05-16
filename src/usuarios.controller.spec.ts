import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioController } from './controller/usuario/usuarios.controller';
import { UsuarioService } from './service/usuario/usuarios.service';

describe('AppController', () => {
  let usuarioController: UsuarioController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [UsuarioService],
    }).compile();

    usuarioController = app.get<UsuarioController>(UsuarioController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(usuarioController.getHello()).toBe('Hello World!');
    });
  });
});
