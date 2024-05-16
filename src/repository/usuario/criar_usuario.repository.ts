// usuario.repository.ts
import { Entity, Repository } from 'typeorm';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { CriarUsuarioDto } from 'src/model/dto/usuario/criar_usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Entity()
export class CriarUsuarioRepository extends Repository<Usuario> {
  constructor(
    @InjectRepository(Usuario)
    private db: Repository<Usuario>,
  ) {
    super(db.target, db.manager, db.queryRunner);
  }
  async criarUsuarioRepository(dto: CriarUsuarioDto): Promise<Usuario> {
    console.log('Criando usuário...');
    const { nome, email, senha } = dto;
    const usuario = new Usuario();
    usuario.nome = nome;
    usuario.email = email;
    usuario.senha = senha;
    return await this.db.save(usuario);
  }
}
