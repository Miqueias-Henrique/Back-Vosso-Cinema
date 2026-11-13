import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateSalaDto {
  @ApiProperty({ example: 'Sala 1' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 120, description: 'Capacidade total de assentos' })
  @IsInt()
  @IsPositive()
  capacidade: number;

  @ApiProperty({ example: 'IMAX', description: 'Tipo da sala (ex: 2D, 3D, IMAX)' })
  @IsString()
  @IsNotEmpty()
  tipo: string;
}
