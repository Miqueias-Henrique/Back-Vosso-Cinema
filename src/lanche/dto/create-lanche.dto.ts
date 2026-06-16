import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLancheDto {
  @ApiProperty({ example: 'Pipoca Grande' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 18.5, description: 'Preço unitário' })
  @IsNumber()
  preco: number;

  @ApiProperty({ example: 'Salgado', description: 'Categoria do lanche' })
  @IsString()
  @IsNotEmpty()
  categoria: string;

  @ApiProperty({ example: 'Pipoca grande com sal e manteiga', required: false })
  @IsString()
  @IsOptional()
  descricao?: string;

  @ApiProperty({ example: true, required: false, description: 'Se está disponível para venda' })
  @IsBoolean()
  @IsOptional()
  disponivel?: boolean;
}
