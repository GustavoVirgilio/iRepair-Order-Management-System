import type { ServiceOrder } from "../types";

interface ServiceCardProps {
  serviceOrder: ServiceOrder;
  clientName: string;
  onDeleteServiceOrder: (id: number) => Promise<void>;
}

const ServiceCard = ({ serviceOrder, clientName, onDeleteServiceOrder }: ServiceCardProps) => {
  return (
    <div
      className={`p-4 rounded-lg shadow ${
        serviceOrder.status === "open" ? "bg-orange-300"
        : serviceOrder.status === "in_progress" ? "bg-yellow-300"
        : "bg-green-300"
      }`}>
      <p>Cliente: {clientName} </p>
      <p>Modelo: {serviceOrder.device} </p>
      <p>Defeito: {serviceOrder.issue} </p>
      <p>
        Status: {
          serviceOrder.status === "open" ? "Aberta"
          : serviceOrder.status === "in_progress" ? "Em andamento"
          : "Concluída"
        }
      </p>

      <button
        className="mt-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-md px-4 py-2 cursor-pointer"
        onClick={() => onDeleteServiceOrder(serviceOrder.id)}
      >
        Remover
      </button>
    </div>
  );
};

export default ServiceCard;