import {
  Body,
  Controller,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegistroDto } from 'src/model/dto/auth/registro.dto';
import { RegistroService } from 'src/service/auth/registro.service';

@ApiTags('Auth')
@Controller('registro')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @ApiOperation({ summary: 'Registro' })
  @ApiResponse({ status: 200, description: 'token' })
  @Post()
  async registro(
    @Body()
    dto: RegistroDto,
  ): Promise<{ token }> {
    const { error } = RegistroDto.validationSchema.validate(dto);
    if (error) {
      throw new UnprocessableEntityException(error);
    }
    return { token: await this.registroService.registroService(dto) };
  }
}
