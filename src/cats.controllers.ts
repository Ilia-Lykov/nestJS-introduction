import {
  Controller,
  Get,
  Post,
  Req,
  Redirect,
  Header,
  HttpCode,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-control', 'none')
  @Redirect('/', 301)
  @HttpCode(204)
  create(): string {
    return 'This action add a new cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    console.log(request.body);
    return 'This action return all cats';
  }
}
