import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Vosso Cinema API')
    .setDescription('Documentação da API do sistema de cinema com NestJS e Prisma')
    .setVersion('1.0')
    .addTag('filmes')
    .addTag('salas')
    .addTag('sessoes')
    .addTag('ingressos')
    .addTag('lanches')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000/api`);
}
bootstrap();
