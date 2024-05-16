import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/model/dto/auth/login.dto';
import * as jwt from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginRepository } from 'src/repository/auth/login.repository';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(LoginRepository)
    private db: LoginRepository,
  ) {}
  async login(dto: LoginDto): Promise<string | null> {
    // Validar credenciais (exemplo simples, faça a autenticação de forma segura)
    const usuario = await this.db.loginRepository(dto);
    if (usuario) {
      // Gerar token JWT
      const token = jwt.sign({ id: usuario.id }, process.env.SECRET, {
        expiresIn: process.env.EXPIRES_JWT,
      });
      return token;
    }
    return null;
  }
}
