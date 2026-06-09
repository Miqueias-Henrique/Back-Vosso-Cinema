export class CreateSessaoDto {
  filmeId: number;
  salaId: number;
  dataHora: string;
  preco: number;
  idioma: string;
  formato?: string;
}
