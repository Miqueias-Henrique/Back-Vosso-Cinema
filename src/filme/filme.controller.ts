import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { FilmeService } from './filme.service';

@ApiTags('filmes')
@Controller('filmes')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar um novo filme' })
  @ApiResponse({ status: 201, description: 'Filme criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createFilmeDto: CreateFilmeDto) {
    return this.filmeService.create(createFilmeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os filmes' })
  findAll() {
    return this.filmeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um filme pelo ID' })
  @ApiResponse({ status: 404, description: 'Filme não encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.filmeService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um filme' })
  @ApiResponse({ status: 404, description: 'Filme não encontrado.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmeService.update(id, updateFilmeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um filme' })
  @ApiResponse({ status: 404, description: 'Filme não encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.filmeService.remove(id);
  }
}
