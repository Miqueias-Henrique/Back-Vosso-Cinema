import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SessaoService } from './sessao.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@ApiTags('sessoes')
@Controller('api/sessoes')
export class SessaoController {
  constructor(private readonly sessaoService: SessaoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova sessão' })
  create(@Body() dto: CreateSessaoDto) {
    return this.sessaoService.create(dto);
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

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar uma sessão' })
  update(@Param('id') id: string, @Body() dto: UpdateSessaoDto) {
    return this.sessaoService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma sessão' })
  remove(@Param('id') id: string) {
    return this.sessaoService.remove(+id);
  }
}
