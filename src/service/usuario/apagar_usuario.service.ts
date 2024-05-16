import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApagarUsuarioRepository } from 'src/repository/usuario/apagar_usuario.repository';

@Injectable()
export class ApagarUsuarioService {
  constructor(
    @InjectRepository(ApagarUsuarioRepository)
    private db: ApagarUsuarioRepository,
  ) {}
  async apagarUsuarioService(id: number): Promise<number | null> {
    const rows_affected = await this.db.apagarUsuarioRepository(id);
    if (rows_affected < 1) {
      return null;
    }
    return id;
  }
}
