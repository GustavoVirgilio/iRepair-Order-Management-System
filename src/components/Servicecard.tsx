import type { OrdemServico } from "../types/types";

interface ServiceCardProps {
  ordemServico: OrdemServico;
  atualizarStatus: (id: number, novoStatus: OrdemServico["status"]) => void;
}

function ServiceCard({ ordemServico, atualizarStatus }: ServiceCardProps) {
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
      <p>Status:
        <select
          value={ordemServico.status}
          onChange={(e) => atualizarStatus(ordemServico.id, e.target.value as OrdemServico["status"])}
          className="ml-2 border border-gray-400 rounded-md px-1 py-1 bg-white text-black font-medium cursor-pointer"
        >
          <option value="em andamento">Em andamento</option>
          <option value="concluida">Concluída</option>
          <option value="entregue">Entregue</option>
        </select>
      </p>
    </div>
  );
}

export default ServiceCard;