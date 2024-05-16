import { Body, Controller, Param, Put, UnprocessableEntityException } from '@nestjs/common';
import { EditarUsuarioDto } from 'src/model/dto/usuario/editar_usuario.dto';
import { Usuario } from 'src/model/dao/usuario_entity.dao';
import { EditarUsuarioService } from 'src/service/usuario/editar_usuario.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuário')
@Controller('usuario')
export class EditarUsuarioController {
  constructor(private readonly editarUsuarioService: EditarUsuarioService) {}

  @ApiOperation({ summary: 'Editar Usuário' })
  @ApiResponse({
    status: 200,
    description: '{result: {id: number, nome: string, email: string}}',
  })
  @Put(':id')
  async editarUsuario(@Param('id') id: number, @Body() dto: EditarUsuarioDto): Promise<{ result: Usuario }> {
    const { error } = EditarUsuarioDto.validationSchema.validate(dto);
    if (error) {
      throw new UnprocessableEntityException(error);
    }
    if (!id) {
      throw new UnprocessableEntityException('Id inválido');
    }
    return {
      result: await this.editarUsuarioService.editarUsuarioService(id, dto),
    };
  }
}
