import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLancheDto } from './dto/create-lanche.dto';
import { UpdateLancheDto } from './dto/update-lanche.dto';

@Injectable()
export class LancheService {
  constructor(private readonly prisma: PrismaService) {}

  create(createLancheDto: CreateLancheDto) {
    return this.prisma.lanche.create({ data: createLancheDto });
  }

  findAll() {
    return this.prisma.lanche.findMany();
  }

  async findOne(id: number) {
    const lanche = await this.prisma.lanche.findUnique({ where: { id } });
    if (!lanche) {
      throw new NotFoundException(`Lanche #${id} não encontrado.`);
    }
    return lanche;
  }

  async update(id: number, updateLancheDto: UpdateLancheDto) {
    await this.findOne(id);
    return this.prisma.lanche.update({ where: { id }, data: updateLancheDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.lanche.delete({ where: { id } });
  }
}
