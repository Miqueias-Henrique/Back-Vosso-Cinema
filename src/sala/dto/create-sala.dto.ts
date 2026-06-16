import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSalaDto {
  @ApiProperty({ example: 'Sala 1' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 120, description: 'Capacidade total de assentos' })
  @IsInt()
  capacidade: number;

  @ApiProperty({ example: 'IMAX', description: 'Tipo da sala (ex: 2D, 3D, IMAX)' })
  @IsString()
  @IsNotEmpty()
  tipo: string;
}
