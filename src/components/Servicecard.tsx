import type { OrdemServico } from "../types/types";

interface ServiceCardProps {
    ordemServico: OrdemServico;
}

function ServiceCard({ ordemServico }: ServiceCardProps) {
  return (
    <div>
      <p>Cliente: { ordemServico.nomeCliente} </p>
      <p>Modelo: { ordemServico.modeloAparelho} </p>
      <p>Defeito: { ordemServico.defeito} </p>
      <p>Status: { ordemServico.status} </p>
    </div>
  )
}

export default ServiceCard