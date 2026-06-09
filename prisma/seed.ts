import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const adapter = new PrismaLibSql({ url: 'file:./prisma/dev.db' });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Inserindo dados iniciais...');

  // Salas
  const sala1 = await prisma.sala.upsert({
    where: { nome: 'Sala 1 - IMAX' },
    update: {},
    create: { nome: 'Sala 1 - IMAX', capacidade: 120, tipo: 'IMAX' },
  });
  const sala2 = await prisma.sala.upsert({
    where: { nome: 'Sala 2 - 3D' },
    update: {},
    create: { nome: 'Sala 2 - 3D', capacidade: 80, tipo: '3D' },
  });
  const sala3 = await prisma.sala.upsert({
    where: { nome: 'Sala 3 - VIP' },
    update: {},
    create: { nome: 'Sala 3 - VIP', capacidade: 40, tipo: 'VIP' },
  });

  console.log('Salas criadas:', sala1.nome, sala2.nome, sala3.nome);

  // Filmes
  const filme1 = await prisma.filme.create({
    data: {
      titulo: 'Duna: Parte Dois',
      genero: 'Ficção Científica',
      descricao: 'Paul Atreides se une aos Fremen e entra em guerra contra os conspiradores que destruíram sua família.',
      classificacao: '14',
      duracao: 166,
      estreia: '2024-03-01',
    },
  });
  const filme2 = await prisma.filme.create({
    data: {
      titulo: 'Deadpool & Wolverine',
      genero: 'Ação / Comédia',
      descricao: 'Deadpool e Wolverine unem forças em uma aventura no multiverso da Marvel.',
      classificacao: '16',
      duracao: 128,
      estreia: '2024-07-26',
    },
  });
  const filme3 = await prisma.filme.create({
    data: {
      titulo: 'O Corvo',
      genero: 'Terror / Romance',
      descricao: 'Um homem ressuscita dos mortos para vingar a morte de seu grande amor.',
      classificacao: '16',
      duracao: 111,
      estreia: '2024-08-23',
    },
  });

  console.log('Filmes criados:', filme1.titulo, filme2.titulo, filme3.titulo);

  // Sessões
  const sessao1 = await prisma.sessao.create({
    data: {
      filmeId: filme1.id,
      salaId: sala1.id,
      dataHora: '2025-07-10T14:00:00',
      preco: 45.0,
      idioma: 'Dublado',
      formato: 'IMAX',
    },
  });
  const sessao2 = await prisma.sessao.create({
    data: {
      filmeId: filme2.id,
      salaId: sala2.id,
      dataHora: '2025-07-10T16:30:00',
      preco: 35.0,
      idioma: 'Dublado',
      formato: '3D',
    },
  });
  const sessao3 = await prisma.sessao.create({
    data: {
      filmeId: filme3.id,
      salaId: sala3.id,
      dataHora: '2025-07-10T19:00:00',
      preco: 55.0,
      idioma: 'Legendado',
      formato: '2D',
    },
  });

  console.log('Sessões criadas:', sessao1.id, sessao2.id, sessao3.id);

  // Lanches
  await prisma.lanche.createMany({
    data: [
      { nome: 'Pipoca Pequena', preco: 12.0, categoria: 'Pipoca', descricao: 'Pipoca salgada ou doce', disponivel: true },
      { nome: 'Pipoca Grande', preco: 22.0, categoria: 'Pipoca', descricao: 'Pipoca salgada ou doce tamanho família', disponivel: true },
      { nome: 'Combo Casal', preco: 48.0, categoria: 'Combo', descricao: '2 pipocas grandes + 2 refrigerantes', disponivel: true },
      { nome: 'Refrigerante 500ml', preco: 10.0, categoria: 'Bebida', descricao: 'Coca-Cola, Guaraná ou Sprite', disponivel: true },
      { nome: 'Água Mineral', preco: 6.0, categoria: 'Bebida', descricao: 'Sem gás 500ml', disponivel: true },
      { nome: 'Nachos com Cheddar', preco: 18.0, categoria: 'Salgado', descricao: 'Nachos crocantes com molho cheddar', disponivel: true },
    ],
  });

  console.log('Lanches criados!');
  console.log('\nSeed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
