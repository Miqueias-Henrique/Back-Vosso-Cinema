import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';

@Injectable()
export class IngressoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateIngressoDto) {
    const { sessaoId, nomeCliente, cpf, assento, pagamento } = dto;
    if (!sessaoId || !nomeCliente || !cpf || !assento || !pagamento) {
      throw new BadRequestException(
        'Campos obrigatórios: sessaoId, nomeCliente, cpf, assento, pagamento.',
      );
    }

    const sessao = await this.prisma.sessao.findUnique({
      where: { id: Number(sessaoId) },
      include: { sala: true, _count: { select: { ingressos: true } } },
    });
    if (!sessao) throw new NotFoundException('Sessão não encontrada.');

    if (sessao._count.ingressos >= sessao.sala.capacidade) {
      throw new ConflictException('Sessão esgotada! Não há mais assentos disponíveis.');
    }

    return this.prisma.ingresso.create({
      data: {
        sessaoId: Number(sessaoId),
        nomeCliente,
        cpf,
        assento,
        pagamento,
      },
      include: { sessao: { include: { filme: true, sala: true } } },
    });
  }

  findAll() {
    return this.prisma.ingresso.findMany({
      include: { sessao: { include: { filme: true, sala: true } } },
      orderBy: { dataVenda: 'desc' },
    });
  }

  findOne(id: number) {
    return this.prisma.ingresso.findUnique({
      where: { id: Number(id) },
      include: { sessao: { include: { filme: true, sala: true } } },
    });
  }

  remove(id: number) {
    return this.prisma.ingresso.delete({ where: { id: Number(id) } });
  }
}
