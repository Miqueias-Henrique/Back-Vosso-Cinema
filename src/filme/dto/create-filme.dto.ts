import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFilmeDto {
  @ApiProperty({ example: 'Interestelar' })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({ example: 'Ficção Científica' })
  @IsString()
  @IsNotEmpty()
  genero: string;

  @ApiProperty({ example: 'Uma viagem pelo espaço e pelo tempo.', required: false })
  @IsString()
  @IsOptional()
  descricao?: string;

  @ApiProperty({ example: '14 anos' })
  @IsString()
  @IsNotEmpty()
  classificacao: string;

  @ApiProperty({ example: 169, description: 'Duração em minutos' })
  @IsInt()
  duracao: number;

  @ApiProperty({ example: '2014-11-07' })
  @IsString()
  @IsNotEmpty()
  estreia: string;
}
