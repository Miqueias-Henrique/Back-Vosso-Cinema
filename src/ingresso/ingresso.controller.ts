import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngressoService } from './ingresso.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('ingressos')
@Controller('ingressos')
export class IngressoController {
  constructor(private readonly ingressoService: IngressoService) {}

  @Post()
  @ApiOperation({ summary: 'Emitir um novo ingresso' })
  @ApiResponse({ status: 201, description: 'Ingresso emitido com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createIngressoDto: CreateIngressoDto) {
    return this.ingressoService.create(createIngressoDto);
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

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um ingresso' })
  update(@Param('id') id: string, @Body() updateIngressoDto: UpdateIngressoDto) {
    return this.ingressoService.update(+id, updateIngressoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Cancelar um ingresso' })
  remove(@Param('id') id: string) {
    return this.ingressoService.remove(+id);
  }
}
