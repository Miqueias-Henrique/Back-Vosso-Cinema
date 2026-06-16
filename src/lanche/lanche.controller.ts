import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LancheService } from './lanche.service';
import { CreateLancheDto } from './dto/create-lanche.dto';
import { UpdateLancheDto } from './dto/update-lanche.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('lanches')
@Controller('lanches')
export class LancheController {
  constructor(private readonly lancheService: LancheService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar um novo lanche' })
  @ApiResponse({ status: 201, description: 'Lanche cadastrado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createLancheDto: CreateLancheDto) {
    return this.lancheService.create(createLancheDto);
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

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um lanche' })
  update(@Param('id') id: string, @Body() updateLancheDto: UpdateLancheDto) {
    return this.lancheService.update(+id, updateLancheDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um lanche' })
  remove(@Param('id') id: string) {
    return this.lancheService.remove(+id);
  }
}
