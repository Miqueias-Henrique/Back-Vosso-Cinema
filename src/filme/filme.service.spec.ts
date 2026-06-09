import { Test, TestingModule } from '@nestjs/testing';
import { FilmeService } from './filme.service';
import { PrismaService } from '../prisma/prisma.service';

describe('FilmeService', () => {
  let service: FilmeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmeService, { provide: PrismaService, useValue: {} }],
    }).compile();

    service = module.get<FilmeService>(FilmeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
