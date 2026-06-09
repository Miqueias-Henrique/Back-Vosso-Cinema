export class CreateLancheDto {
  nome: string;
  preco: number;
  categoria: string;
  descricao?: string;
  disponivel?: boolean;
}
