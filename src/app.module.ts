import { Module } from '@nestjs/common';
import { FilmeModule } from './filme/filme.module';
import { SalaModule } from './sala/sala.module';
import { SessaoModule } from './sessao/sessao.module';
import { IngressoModule } from './ingresso/ingresso.module';
import { LancheModule } from './lanche/lanche.module';

@Module({
  imports: [
    FilmeModule,
    SalaModule,
    SessaoModule,
    IngressoModule,
    LancheModule,
  ],
})
export class AppModule {}
