import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessaoService } from './sessao.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('sessoes')
@Controller('sessoes')
export class SessaoController {
  constructor(private readonly sessaoService: SessaoService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar uma nova sessão' })
  @ApiResponse({ status: 201, description: 'Sessão criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createSessaoDto: CreateSessaoDto) {
    return this.sessaoService.create(createSessaoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as sessões' })
  findAll() {
    return this.sessaoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma sessão pelo ID' })
  findOne(@Param('id') id: string) {
    return this.sessaoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma sessão' })
  update(@Param('id') id: string, @Body() updateSessaoDto: UpdateSessaoDto) {
    return this.sessaoService.update(+id, updateSessaoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma sessão' })
  remove(@Param('id') id: string) {
    return this.sessaoService.remove(+id);
  }
}
