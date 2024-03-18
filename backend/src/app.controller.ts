import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getAllUsers();
  }

  @Post()
  create() {
    return this.appService.create();
  }

  @Get('/update')
  update() {
    return this.appService.update();
  }
}
