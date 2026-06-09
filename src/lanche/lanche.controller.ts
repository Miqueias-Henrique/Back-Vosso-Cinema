import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { LancheService } from './lanche.service';
import { CreateLancheDto } from './dto/create-lanche.dto';
import { UpdateLancheDto } from './dto/update-lanche.dto';

@ApiTags('lanches')
@Controller('api/lanches')
export class LancheController {
  constructor(private readonly lancheService: LancheService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo lanche' })
  create(@Body() dto: CreateLancheDto) {
    return this.lancheService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os lanches' })
  findAll() {
    return this.lancheService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um lanche pelo ID' })
  findOne(@Param('id') id: string) {
    return this.lancheService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um lanche' })
  update(@Param('id') id: string, @Body() dto: UpdateLancheDto) {
    return this.lancheService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um lanche' })
  remove(@Param('id') id: string) {
    return this.lancheService.remove(+id);
  }
}
