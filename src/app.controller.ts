import { Controller, Get, Render, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { TelefonDto, TextColorDto } from './text-color.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('form')
  getHello(): object{
    return {};
  }

  @Post()
  @Render('color')
  telefon(@Body() telefon: TelefonDto): object{
    return telefon;
  }
}
