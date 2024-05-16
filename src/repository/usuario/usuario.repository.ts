import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { Repository } from 'typeorm';

export class UsuarioRepository extends Repository<Usuario> {
  constructor(
    @InjectRepository(Usuario)
    private db: Repository<Usuario>,
  ) {
    super(db.target, db.manager, db.queryRunner);
  }

  async usuarioRepository(id: number): Promise<Usuario | null> {
    const usuario = await this.db.findOne({
      where: { id },
    });
    return usuario;
  }
}
