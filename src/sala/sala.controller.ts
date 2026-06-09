import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SalaService } from './sala.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

@ApiTags('salas')
@Controller('api/salas')
export class SalaController {
  constructor(private readonly salaService: SalaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova sala' })
  create(@Body() dto: CreateSalaDto) {
    return this.salaService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as salas' })
  findAll() {
    return this.salaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma sala pelo ID' })
  findOne(@Param('id') id: string) {
    return this.salaService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar uma sala' })
  update(@Param('id') id: string, @Body() dto: UpdateSalaDto) {
    return this.salaService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma sala' })
  remove(@Param('id') id: string) {
    return this.salaService.remove(+id);
  }
}
