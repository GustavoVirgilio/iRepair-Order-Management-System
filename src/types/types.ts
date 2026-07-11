export interface OrdemServico {
  id: number;
  nomeCliente: string;
  modeloAparelho: string;
  defeito: string;
  status: "em andamento" | "concluida" | "entregue";
}