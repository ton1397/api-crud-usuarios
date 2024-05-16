import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserinfoRepository } from 'src/repository/auth/userinfo.repository';

@Injectable()
export class UserinfoService {
  constructor(
    @InjectRepository(UserinfoRepository)
    private db: UserinfoRepository,
  ) {}
  async userinfo(id: number): Promise<string | null> {
    return await this.db.userinfoRepository(id);
  }
}
