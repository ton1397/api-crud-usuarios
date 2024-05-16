import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { Repository } from 'typeorm';

export class ApagarUsuarioRepository extends Repository<Usuario> {
  constructor(
    @InjectRepository(Usuario)
    private db: Repository<Usuario>,
  ) {
    super(db.target, db.manager, db.queryRunner);
  }

  async apagarUsuarioRepository(id: number): Promise<number> {
    const { affected } = await this.db.delete(id);
    return affected;
  }
}
