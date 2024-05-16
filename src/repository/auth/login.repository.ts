// usuario.repository.ts
import { Entity, Repository } from 'typeorm';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { LoginDto } from 'src/model/dto/auth/login.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Entity()
export class LoginRepository extends Repository<Usuario> {
  constructor(
    @InjectRepository(Usuario)
    private db: Repository<Usuario>,
  ) {
    super(db.target, db.manager, db.queryRunner);
  }
  async loginRepository(dto: LoginDto): Promise<Usuario> {
    console.log('obtendo login...');
    const { email, senha } = dto;
    const usuario = await this.db.findOne({
      where: {
        email,
        senha,
      },
    });
    return usuario;
  }
}
