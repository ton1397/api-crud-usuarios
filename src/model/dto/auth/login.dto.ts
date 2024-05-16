import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';

export class LoginDto {
  @ApiProperty({ description: 'Email de acesso' })
  email: string;
  @ApiProperty({ description: 'Senha de acesso' })
  senha: string;

  static validationSchema = Joi.object({
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
