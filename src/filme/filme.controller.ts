import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { FilmeService } from './filme.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@ApiTags('filmes')
@Controller('api/filmes')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo filme' })
  create(@Body() dto: CreateFilmeDto) {
    return this.filmeService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os filmes' })
  findAll() {
    return this.filmeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um filme pelo ID' })
  findOne(@Param('id') id: string) {
    return this.filmeService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um filme' })
  update(@Param('id') id: string, @Body() dto: UpdateFilmeDto) {
    return this.filmeService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um filme' })
  remove(@Param('id') id: string) {
    return this.filmeService.remove(+id);
  }
}
