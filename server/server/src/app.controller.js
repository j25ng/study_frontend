import { Controller, Dependencies, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get('/account')
  async getAccount() {
    return await this.appService.getAccount();
  }

  @Post('/transfer')
  async transfer(req) {
    return await this.appService.transfer(req.body);
  }
}
