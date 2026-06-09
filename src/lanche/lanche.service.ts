import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLancheDto } from './dto/create-lanche.dto';
import { UpdateLancheDto } from './dto/update-lanche.dto';

@Injectable()
export class LancheService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateLancheDto) {
    const { nome, preco, categoria, descricao, disponivel } = dto;
    if (!nome || !preco || !categoria) {
      throw new BadRequestException('Campos obrigatórios: nome, preco, categoria.');
    }
    return this.prisma.lanche.create({
      data: {
        nome,
        preco: parseFloat(String(preco)),
        categoria,
        descricao: descricao || '',
        disponivel: disponivel !== false,
      },
    });
  }

  findAll() {
    return this.prisma.lanche.findMany({ orderBy: { categoria: 'asc' } });
  }

  findOne(id: number) {
    return this.prisma.lanche.findUnique({ where: { id: Number(id) } });
  }

  update(id: number, dto: UpdateLancheDto) {
    const { nome, preco, categoria, descricao, disponivel } = dto;
    return this.prisma.lanche.update({
      where: { id: Number(id) },
      data: {
        nome,
        preco: preco ? parseFloat(String(preco)) : undefined,
        categoria,
        descricao,
        disponivel,
      },
    });
  }

  remove(id: number) {
    return this.prisma.lanche.delete({ where: { id: Number(id) } });
  }
}
