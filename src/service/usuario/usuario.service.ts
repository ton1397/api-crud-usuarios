import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { UsuarioRepository } from 'src/repository/usuario/usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioRepository)
    private db: UsuarioRepository,
  ) {}
  async usuarioService(id: number): Promise<Usuario | null> {
    const usuario = await this.db.usuarioRepository(id);
    return usuario;
  }
}
