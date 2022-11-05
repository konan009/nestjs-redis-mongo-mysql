import { CacheKey, CacheTTL, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  @CacheKey('some_route')
  @CacheTTL(30)
  async getHello() {
    return this.appService.getHello();
  }
}
