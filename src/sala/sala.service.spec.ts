import { Test, TestingModule } from '@nestjs/testing';
import { SalaService } from './sala.service';
import { PrismaService } from '../prisma/prisma.service';

describe('SalaService', () => {
  let service: SalaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalaService, { provide: PrismaService, useValue: {} }],
    }).compile();

    service = module.get<SalaService>(SalaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
