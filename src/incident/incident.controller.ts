import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('incidents')
export class IncidentController {
  @Get('summary')
  getSummary() {
    return incidentService.getSummary();
  }

  @Get()
  findAll() {
    return incidentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return incidentService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return incidentService.create(body);
  }