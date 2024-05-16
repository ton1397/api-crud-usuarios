import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { Repository } from 'typeorm';

export class UsuariosRepository extends Repository<Usuario> {
  constructor(
    @InjectRepository(Usuario)
    private db: Repository<Usuario>,
  ) {
    super(db.target, db.manager, db.queryRunner);
  }

  async usuariosRepository(): Promise<Usuario[]> {
    const usuarios = await this.db.find();
    return usuarios;
  }
}
