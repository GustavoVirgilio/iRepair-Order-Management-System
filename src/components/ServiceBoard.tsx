import type { Client, ServiceOrder } from "../types";
import ServiceCard from "./ServiceCard";

interface ServiceBoardProps {
  serviceOrders: ServiceOrder[];
  clients: Client[];
  onDeleteServiceOrder: (id: number) => Promise<void>;
}

const ServiceBoard = ({ serviceOrders, clients, onDeleteServiceOrder }: ServiceBoardProps) => {
  const openServiceOrders = serviceOrders.filter((serviceOrder) => serviceOrder.status === "open");
  const inProgressServiceOrders = serviceOrders.filter((serviceOrder) => serviceOrder.status === "in_progress");
  const doneServiceOrders = serviceOrders.filter((serviceOrder) => serviceOrder.status === "done");

  function getClientName(clientId: number) {
    const client = clients.find((client) => client.id === clientId);

    return client?.name ?? "Cliente não encontrado";
  }

  return (
    <div className="bg-sky-100 flex flex-row gap-4 p-4">
      <div className="flex-1 bg-blue-50 rounded-lg shadow">
        <h2 className="bg-blue-400 text-white p-2 rounded-t-lg text-center font-bold"> Aberta </h2>
        <div className="flex flex-col gap-2 p-2">
          {openServiceOrders.map((serviceOrder) => (
            <ServiceCard
              key={serviceOrder.id}
              serviceOrder={serviceOrder}
              clientName={getClientName(serviceOrder.client_id)}
              onDeleteServiceOrder={onDeleteServiceOrder}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 bg-blue-50 rounded-lg shadow">
        <h2 className="bg-blue-400 text-white p-2 rounded-t-lg text-center font-bold"> Em andamento </h2>
        <div className="flex flex-col gap-2 p-2">
          {inProgressServiceOrders.map((serviceOrder) => (
            <ServiceCard
              key={serviceOrder.id}
              serviceOrder={serviceOrder}
              clientName={getClientName(serviceOrder.client_id)}
              onDeleteServiceOrder={onDeleteServiceOrder}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 bg-blue-50 rounded-lg shadow">
        <h2 className="bg-blue-400 text-white p-2 rounded-t-lg text-center font-bold"> Concluída </h2>
        <div className="flex flex-col gap-2 p-2">
          {doneServiceOrders.map((serviceOrder) => (
            <ServiceCard
              key={serviceOrder.id}
              serviceOrder={serviceOrder}
              clientName={getClientName(serviceOrder.client_id)}
              onDeleteServiceOrder={onDeleteServiceOrder}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBoard;