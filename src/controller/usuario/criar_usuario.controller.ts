import {
  Body,
  Controller,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CriarUsuarioService } from '../../service/usuario/criar_usuario.service';
import { CriarUsuarioDto } from 'src/model/dto/usuario/criar_usuario.dto';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuário')
@Controller('usuario')
export class CriarUsuarioController {
  constructor(private readonly criarUsuarioService: CriarUsuarioService) {}
  @ApiOperation({ summary: 'Criar Usuário' })
  @ApiResponse({
    status: 200,
    description: '{result: {id: number, nome: string, email: string}}',
  })
  @Post()
  async criarUsuario(
    @Body()
    dto: CriarUsuarioDto,
  ): Promise<{ result: Usuario }> {
    const { error } = CriarUsuarioDto.validationSchema.validate(dto);
    if (error) {
      throw new UnprocessableEntityException(error);
    }
    return {
      result: await this.criarUsuarioService.criarUsuarioService(dto),
    };
  }
}
