import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { RegistroDto } from 'src/model/dto/auth/registro.dto';
import { RegistroRepository } from 'src/repository/auth/registro.repository';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class RegistroService {
  constructor(
    @InjectRepository(RegistroRepository)
    private db: RegistroRepository,
  ) {}
  async registroService(dto: RegistroDto): Promise<Usuario> {
    const usuario = await this.db.registroRepository(dto);
    const token = jwt.sign({ id: usuario.id }, process.env.SECRET, {
      expiresIn: process.env.EXPIRES_JWT,
    });
    return token;
  }
}
