import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAccount() {
    const accounts = await this.prisma.account.findMany();
    return accounts;
  }

  async transfer(req) {
    console.log(req.body);
  }
}
