import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserinfoService } from 'src/service/auth/userinfo.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('userinfo')
export class UserinfoController {
  constructor(private readonly userinfoService: UserinfoService) {}
  @ApiOperation({ summary: 'Userinfo' })
  @ApiResponse({ status: 200, description: '{result: {email: string}}' })
  @Get()
  async userinfo(
    @Headers('Authorization')
    token: string
  ): Promise<{ result: object }> {
    if (!token) {
      throw new UnauthorizedException();
    }
    token = token.split(' ')[1];
    return jwt.verify(token, process.env.SECRET, async (err, token_decoded) => {
      console.log(err);
      if (err) {
        throw new UnauthorizedException();
      }

      const { id } = token_decoded;
      const result = await this.userinfoService.userinfo(id);

      return {
        result: {
          email: result,
        },
      };
    });
  }
}
