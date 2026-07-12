import type { OrdemServico } from "../types/types";

interface ServiceCardProps {
  ordemServico: OrdemServico;
}

function ServiceCard({ ordemServico }: ServiceCardProps) {
  return (
    <div
      className={`p-4 rounded-lg shadow ${
        ordemServico.status === "em andamento" ? "bg-orange-300"
        : ordemServico.status === "concluida"  ? "bg-yellow-300"
        : "bg-green-300"
      }`}>

      <p>Cliente: {ordemServico.nomeCliente} </p>
      <p>Modelo: {ordemServico.modeloAparelho} </p>
      <p>Defeito: {ordemServico.defeito} </p>
      <p>Status: {ordemServico.status} </p>
    </div>
  );
}

export default ServiceCard;
