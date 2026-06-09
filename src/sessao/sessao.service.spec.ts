import { Test, TestingModule } from '@nestjs/testing';
import { SessaoService } from './sessao.service';
import { PrismaService } from '../prisma/prisma.service';

describe('SessaoService', () => {
  let service: SessaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SessaoService, { provide: PrismaService, useValue: {} }],
    }).compile();

    service = module.get<SessaoService>(SessaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
