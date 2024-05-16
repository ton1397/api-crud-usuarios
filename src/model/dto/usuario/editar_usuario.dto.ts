import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';

export class EditarUsuarioDto {
  @ApiProperty({ description: 'Nome do usuário' })
  nome: string;
  @ApiProperty({ description: 'Email do usuário' })
  email: string;
  @ApiProperty({ description: 'Senha do usuário' })
  senha: string;

  static validationSchema = Joi.object({
    nome: Joi.string().required().messages({
      'any.required': 'Campo nome é obrigatório.',
      'string.empty': 'Campo nome não pode estar vazio.',
    }),
    email: Joi.string().email().required().messages({
      'any.required': 'Campo email é obrigatório.',
      'string.email': 'Campo email inválido.',
      'string.empty': 'Campo email não pode estar vazio.',
    }),
    senha: Joi.string().required().messages({
      'any.required': 'Campo senha é obrigatório.',
      'string.empty': 'Campo senha não pode estar vazio.',
    }),
  });
}
