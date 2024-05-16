import { Controller, Get, Param } from '@nestjs/common';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuário')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiOperation({ summary: 'Detalhe Usuário' })
  @ApiResponse({
    status: 200,
    description: '{result: {id: number, nome: string, email: string}}',
  })
  @Get(':id')
  async usuarioController(
    @Param('id')
    id: number,
  ): Promise<{ result: Usuario | null }> {
    return {
      result: await this.usuarioService.usuarioService(id),
    };
  }
}
