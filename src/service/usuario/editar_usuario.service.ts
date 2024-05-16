import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { EditarUsuarioDto } from 'src/model/dto/usuario/editar_usuario.dto';
import { EditarUsuarioRepository } from 'src/repository/usuario/editar_usuario.repository';

@Injectable()
export class EditarUsuarioService {
  constructor(
    @InjectRepository(EditarUsuarioRepository)
    private db: EditarUsuarioRepository,
  ) {}
  async editarUsuarioService(
    id: number,
    dto: EditarUsuarioDto,
  ): Promise<Usuario> {
    const rows_affected = await this.db.editarUsuarioRepository(id, dto);

    if (rows_affected < 1) {
      return null;
    }

    const usuario = new Usuario();
    usuario.id = id;
    usuario.nome = dto.nome;
    usuario.email = dto.email;
    usuario.senha = dto.senha;

    return usuario;
  }
}
