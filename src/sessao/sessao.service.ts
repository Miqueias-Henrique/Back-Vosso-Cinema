import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@Injectable()
export class SessaoService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSessaoDto: CreateSessaoDto) {
    return this.prisma.sessao.create({ data: createSessaoDto });
  }

  findAll() {
    return this.prisma.sessao.findMany();
  }

  async findOne(id: number) {
    const sessao = await this.prisma.sessao.findUnique({ where: { id } });
    if (!sessao) {
      throw new NotFoundException(`Sessão #${id} não encontrada.`);
    }
    return sessao;
  }

  async update(id: number, updateSessaoDto: UpdateSessaoDto) {
    await this.findOne(id);
    return this.prisma.sessao.update({ where: { id }, data: updateSessaoDto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.sessao.delete({ where: { id } });
  }
}
