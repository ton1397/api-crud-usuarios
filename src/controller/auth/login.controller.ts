import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { LoginService } from '../../service/auth/login.service';
import { LoginDto } from 'src/model/dto/auth/login.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @ApiOperation({ summary: 'Login' })
  @ApiResponse({ status: 200, description: 'token' })
  @Post()
  async login(
    @Body()
    dto: LoginDto,
  ): Promise<{ token: string }> {
    const { error } = LoginDto.validationSchema.validate(dto);
    if (error) {
      throw new UnprocessableEntityException(error);
    }
    const token = await this.loginService.login(dto);
    if (!token) {
      throw new UnauthorizedException();
    }
    return { token };
  }
}
