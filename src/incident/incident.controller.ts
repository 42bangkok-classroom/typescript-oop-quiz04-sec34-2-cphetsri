import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('incidents')
export class IncidentController {
  @Get('summary')
  getSummary() {
    return ;
  }

  @Get()
  findAll() {
    return ;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return ;
  }

  @Post()
  create(@Body() body: any) {
    return ;
  }