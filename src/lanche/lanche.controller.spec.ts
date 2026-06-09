import { Test, TestingModule } from '@nestjs/testing';
import { LancheController } from './lanche.controller';
import { LancheService } from './lanche.service';

describe('LancheController', () => {
  let controller: LancheController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LancheController],
      providers: [{ provide: LancheService, useValue: {} }],
    }).compile();

    controller = module.get<LancheController>(LancheController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
