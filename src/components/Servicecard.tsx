import type { serviceOrder } from "../types/types";

interface ServiceCardProps {
  serviceOrder: serviceOrder;
  updateStatus: (id: number, newStatus: serviceOrder["status"]) => void;
}

function ServiceCard({ serviceOrder, updateStatus }: ServiceCardProps) {
  return (
    <div
      className={`p-4 rounded-lg shadow ${
        serviceOrder.status === "em andamento" ? "bg-orange-300"
        : serviceOrder.status === "concluida"  ? "bg-yellow-300"
        : "bg-green-300"
      }`}>
      <p>Cliente: {serviceOrder.nomeCliente} </p>
      <p>Modelo: {serviceOrder.modeloAparelho} </p>
      <p>Defeito: {serviceOrder.defeito} </p>
      <p>Status:
        <select
          value={serviceOrder.status}
          onChange={(e) => updateStatus(serviceOrder.id, e.target.value as serviceOrder["status"])}
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