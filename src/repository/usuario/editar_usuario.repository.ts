// usuario.repository.ts
import { Entity, Repository } from 'typeorm';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { InjectRepository } from '@nestjs/typeorm';
import { EditarUsuarioDto } from 'src/model/dto/usuario/editar_usuario.dto';

@Entity()
export class EditarUsuarioRepository extends Repository<Usuario> {
  constructor(
    @InjectRepository(Usuario)
    private db: Repository<Usuario>,
  ) {
    super(db.target, db.manager, db.queryRunner);
  }
  async editarUsuarioRepository(
    id: number,
    dto: EditarUsuarioDto,
  ): Promise<number> {
    console.log('Atualizando usuário...');
    const { nome, email, senha } = dto;
    const usuario = new Usuario();
    usuario.nome = nome;
    usuario.email = email;
    usuario.senha = senha;
    const { affected } = await this.db.update(id, usuario);
    return affected;
  }
}
