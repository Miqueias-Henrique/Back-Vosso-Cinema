import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { SalaService } from './sala.service';

@ApiTags('salas')
@Controller('salas')
export class SalaController {
  constructor(private readonly salaService: SalaService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar uma nova sala' })
  @ApiResponse({ status: 201, description: 'Sala criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createSalaDto: CreateSalaDto) {
    return this.salaService.create(createSalaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as salas' })
  findAll() {
    return this.salaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma sala pelo ID' })
  @ApiResponse({ status: 404, description: 'Sala não encontrada.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.salaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma sala' })
  @ApiResponse({ status: 404, description: 'Sala não encontrada.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateSalaDto: UpdateSalaDto) {
    return this.salaService.update(id, updateSalaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma sala' })
  @ApiResponse({ status: 404, description: 'Sala não encontrada.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.salaService.remove(id);
  }
}
