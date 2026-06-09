import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmeService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateFilmeDto) {
    const { titulo, genero, descricao, classificacao, duracao, estreia } = dto;
    if (!titulo || !genero || !classificacao || !duracao || !estreia) {
      throw new BadRequestException(
        'Campos obrigatórios: titulo, genero, classificacao, duracao, estreia.',
      );
    }
    return this.prisma.filme.create({
      data: {
        titulo,
        genero,
        descricao: descricao || '',
        classificacao,
        duracao: Number(duracao),
        estreia,
      },
    });
  }

  findAll() {
    return this.prisma.filme.findMany({
      orderBy: { criadoEm: 'desc' },
      include: { _count: { select: { sessoes: true } } },
    });
  }

  findOne(id: number) {
    return this.prisma.filme.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, dto: UpdateFilmeDto) {
    const { titulo, genero, descricao, classificacao, duracao, estreia } = dto;
    return this.prisma.filme.update({
      where: { id: Number(id) },
      data: {
        titulo,
        genero,
        descricao,
        classificacao,
        duracao: duracao ? Number(duracao) : undefined,
        estreia,
      },
    });
  }

  remove(id: number) {
    return this.prisma.filme.delete({ where: { id: Number(id) } });
  }
}
