import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@Injectable()
export class SessaoService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateSessaoDto) {
    const { filmeId, salaId, dataHora, preco, idioma, formato } = dto;
    if (!filmeId || !salaId || !dataHora || !preco || !idioma) {
      throw new BadRequestException(
        'Campos obrigatórios: filmeId, salaId, dataHora, preco, idioma.',
      );
    }
    return this.prisma.sessao.create({
      data: {
        filmeId: Number(filmeId),
        salaId: Number(salaId),
        dataHora,
        preco: parseFloat(String(preco)),
        idioma,
        formato: formato || '2D',
      },
      include: { filme: true, sala: true },
    });
  }

  findAll() {
    return this.prisma.sessao.findMany({
      include: {
        filme: true,
        sala: true,
        _count: { select: { ingressos: true } },
      },
      orderBy: { dataHora: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.sessao.findUnique({
      where: { id: Number(id) },
      include: { filme: true, sala: true },
    });
  }

  update(id: number, dto: UpdateSessaoDto) {
    const { filmeId, salaId, dataHora, preco, idioma, formato } = dto;
    return this.prisma.sessao.update({
      where: { id: Number(id) },
      data: {
        filmeId: filmeId ? Number(filmeId) : undefined,
        salaId: salaId ? Number(salaId) : undefined,
        dataHora,
        preco: preco ? parseFloat(String(preco)) : undefined,
        idioma,
        formato,
      },
      include: { filme: true, sala: true },
    });
  }

  remove(id: number) {
    return this.prisma.sessao.delete({ where: { id: Number(id) } });
  }
}
