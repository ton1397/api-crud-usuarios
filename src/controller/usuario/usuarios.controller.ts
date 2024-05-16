import { Controller, Get } from '@nestjs/common';
import { UsuariosService } from '../../service/usuario/usuarios.service';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuário')
@Controller('usuario')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @ApiOperation({ summary: 'Listar Usuários' })
  @ApiResponse({
    status: 200,
    description: '{result: [{id: number, nome: string, email: string}}]',
  })
  @Get()
  async usuariosController(): Promise<{ result: Usuario[] }> {
    return {
      result: await this.usuariosService.usuariosService(),
    };
  }
}
