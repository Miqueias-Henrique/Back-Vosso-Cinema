import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { LancheService } from './lanche.service';
import { LancheController } from './lanche.controller';

@Module({
  imports: [PrismaModule],
  controllers: [LancheController],
  providers: [LancheService],
})
export class LancheModule {}
