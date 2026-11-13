import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLancheDto } from './dto/create-lanche.dto';
import { UpdateLancheDto } from './dto/update-lanche.dto';
import { LancheService } from './lanche.service';

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
  @ApiResponse({ status: 404, description: 'Lanche não encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lancheService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um lanche' })
  @ApiResponse({ status: 404, description: 'Lanche não encontrado.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateLancheDto: UpdateLancheDto) {
    return this.lancheService.update(id, updateLancheDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um lanche' })
  @ApiResponse({ status: 404, description: 'Lanche não encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.lancheService.remove(id);
  }
}
