import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { UsuariosRepository } from 'src/repository/usuario/usuarios.repository';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(UsuariosRepository)
    private db: UsuariosRepository,
  ) {}
  usuariosService(): Promise<Usuario[]> {
    const usuarios = this.db.usuariosRepository();
    return usuarios;
  }
}
