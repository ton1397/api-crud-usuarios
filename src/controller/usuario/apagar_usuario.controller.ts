import { Controller, Delete, Param } from '@nestjs/common';
import { ApagarUsuarioService } from '../../service/usuario/apagar_usuario.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuário')
@Controller('usuario')
export class ApagarUsuarioController {
  constructor(private readonly apagarUsuarioService: ApagarUsuarioService) {}
  @ApiOperation({ summary: 'Apagar Usuário' })
  @ApiResponse({ status: 200, description: 'id' })
  @Delete(':id')
  async usuarioController(@Param('id') id: number): Promise<any> {
    return {
      id: await this.apagarUsuarioService.apagarUsuarioService(id),
    };
  }
}
