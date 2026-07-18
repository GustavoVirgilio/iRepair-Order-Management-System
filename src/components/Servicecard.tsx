import type { serviceOrder } from "../types/serviceOrder";

interface ServiceCardProps {
  serviceOrder: serviceOrder;
  updateStatus: (id: number, newStatus: serviceOrder["status"]) => void;
}

function ServiceCard({ serviceOrder, updateStatus }: ServiceCardProps) {
  return (
    <div
      className={`p-4 rounded-lg shadow ${
        serviceOrder.status === "in progress" ? "bg-orange-300"
        : serviceOrder.status === "completed"  ? "bg-yellow-300"
        : "bg-green-300"
      }`}>
      <p>Cliente: {serviceOrder.clientName} </p>
      <p>Modelo: {serviceOrder.deviceModel} </p>
      <p>Defeito: {serviceOrder.defect} </p>
      <p>Status:
        <select
          value={serviceOrder.status}
          onChange={(e) => updateStatus(serviceOrder.id, e.target.value as serviceOrder["status"])}
          className="ml-2 border border-gray-400 rounded-md px-1 py-1 bg-white text-black font-medium cursor-pointer"
        >
          <option value="in progress">Em andamento</option>
          <option value="completed">Concluída</option>
          <option value="delivered">Entregue</option>
        </select>
      </p>
    </div>
  );
}

export default ServiceCard;