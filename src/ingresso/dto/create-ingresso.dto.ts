import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateIngressoDto {
  @ApiProperty({ example: 'João Silva' })
  @IsString()
  @IsNotEmpty()
  nomeCliente: string;

  @ApiProperty({ example: '123.456.789-00' })
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({ example: 'A1', description: 'Número do assento' })
  @IsString()
  @IsNotEmpty()
  assento: string;

  @ApiProperty({ example: 'Cartão de Crédito', description: 'Forma de pagamento' })
  @IsString()
  @IsNotEmpty()
  pagamento: string;

  @ApiProperty({ example: 1, description: 'ID da sessão' })
  @IsInt()
  sessaoId: number;
}
