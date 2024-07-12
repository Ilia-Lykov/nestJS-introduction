import {
  Controller,
  Get,
  Post,
  //   Req,
  Header,
  HttpCode,
  Param,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-control', 'none')
  @HttpCode(201)
  create(): string {
    return 'This action add a new cat';
  }

  @Get()
  findAll(): string {
    // console.log(request.body);
    return 'This action return all cats';
  }
  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action return a #${params.id} cat`;
  }
}
