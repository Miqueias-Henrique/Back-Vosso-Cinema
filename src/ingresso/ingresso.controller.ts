import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { IngressoService } from './ingresso.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';

@ApiTags('ingressos')
@Controller('api/ingressos')
export class IngressoController {
  constructor(private readonly ingressoService: IngressoService) {}

  @Post()
  @ApiOperation({ summary: 'Comprar um ingresso' })
  create(@Body() dto: CreateIngressoDto) {
    return this.ingressoService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os ingressos' })
  findAll() {
    return this.ingressoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um ingresso pelo ID' })
  findOne(@Param('id') id: string) {
    return this.ingressoService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Cancelar um ingresso' })
  remove(@Param('id') id: string) {
    return this.ingressoService.remove(+id);
  }
}
