// usuario.repository.ts
import { Entity, Repository } from 'typeorm';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistroDto } from 'src/model/dto/auth/registro.dto';

@Entity()
export class RegistroRepository extends Repository<Usuario> {
  constructor(
    @InjectRepository(Usuario)
    private db: Repository<Usuario>,
  ) {
    super(db.target, db.manager, db.queryRunner);
  }
  async registroRepository(dto: RegistroDto): Promise<Usuario> {
    console.log('Criando usuário...');
    const { nome, email, senha } = dto;
    const usuario = new Usuario();
    usuario.nome = nome;
    usuario.email = email;
    usuario.senha = senha;
    return await this.db.save(usuario);
  }
}
