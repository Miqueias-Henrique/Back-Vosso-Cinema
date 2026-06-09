import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

@Injectable()
export class SalaService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateSalaDto) {
    const { nome, capacidade, tipo } = dto;
    if (!nome || !capacidade || !tipo) {
      throw new BadRequestException('Campos obrigatórios: nome, capacidade, tipo.');
    }
    return this.prisma.sala.create({
      data: { nome, capacidade: Number(capacidade), tipo },
    });
  }

  findAll() {
    return this.prisma.sala.findMany({
      orderBy: { nome: 'asc' },
      include: { _count: { select: { sessoes: true } } },
    });
  }

  findOne(id: number) {
    return this.prisma.sala.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, dto: UpdateSalaDto) {
    const { nome, capacidade, tipo } = dto;
    return this.prisma.sala.update({
      where: { id: Number(id) },
      data: { nome, capacidade: capacidade ? Number(capacidade) : undefined, tipo },
    });
  }

  remove(id: number) {
    return this.prisma.sala.delete({ where: { id: Number(id) } });
  }
}
