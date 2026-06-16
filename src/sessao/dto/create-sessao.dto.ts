import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSessaoDto {
  @ApiProperty({ example: '2024-05-10T20:00:00', description: 'Data e hora da sessão' })
  @IsString()
  @IsNotEmpty()
  dataHora: string;

  @ApiProperty({ example: 35.0, description: 'Preço do ingresso' })
  @IsNumber()
  preco: number;

  @ApiProperty({ example: 'Português', description: 'Idioma da sessão' })
  @IsString()
  @IsNotEmpty()
  idioma: string;

  @ApiProperty({ example: '2D', description: 'Formato da sessão (2D, 3D, IMAX)', required: false })
  @IsString()
  @IsOptional()
  formato?: string;

  @ApiProperty({ example: 1, description: 'ID do filme' })
  @IsInt()
  filmeId: number;

  @ApiProperty({ example: 1, description: 'ID da sala' })
  @IsInt()
  salaId: number;
}
