import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { CriarUsuarioDto } from 'src/model/dto/usuario/criar_usuario.dto';
import { CriarUsuarioRepository } from 'src/repository/usuario/criar_usuario.repository';

@Injectable()
export class CriarUsuarioService {
  constructor(
    @InjectRepository(CriarUsuarioRepository)
    private db: CriarUsuarioRepository,
  ) {}
  async criarUsuarioService(dto: CriarUsuarioDto): Promise<Usuario> {
    const usuario = await this.db.criarUsuarioRepository(dto);
    return usuario;
  }
}
