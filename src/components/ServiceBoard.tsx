import type { serviceOrder } from "../types/types";
import ServiceCard from "./ServiceCard";

interface ServiceBoardProps {
  serviceOrders: serviceOrder[];
  updateStatus: (id: number, newStatus: serviceOrder["status"]) => void;
}

function ServiceBoard({ serviceOrders, updateStatus }: ServiceBoardProps) {
  const emAndamento = serviceOrders.filter((os) => os.status === "in progress");
  const concluida = serviceOrders.filter((os) => os.status === "completed");
  const entregue = serviceOrders.filter((os) => os.status === "delivered");

  return (
    <div className="bg-sky-100 flex flex-row gap-4 p-4">
      <div className="flex-1 bg-blue-50 rounded-lg shadow">
        <h2 className="bg-blue-400 text-white p-2 rounded-t-lg text-center font-bold"> Em andamento </h2>
        <div className="flex flex-col gap-2 p-2">
          {emAndamento.map((os) => (
            <ServiceCard key={os.id} serviceOrder={os} updateStatus={updateStatus} />
          ))}
        </div>
      </div>

      <div className="flex-1 bg-blue-50 rounded-lg shadow">
        <h2 className="bg-blue-400 text-white p-2 rounded-t-lg text-center font-bold"> Concluída </h2>
        <div className="flex flex-col gap-2 p-2">
          {concluida.map((os) => (
            <ServiceCard key={os.id} serviceOrder={os} updateStatus={updateStatus} />
          ))}
        </div>
      </div>

      <div className="flex-1 bg-blue-50 rounded-lg shadow">
        <h2 className="bg-blue-400 text-white p-2 rounded-t-lg text-center font-bold"> Entregue </h2>
        <div className="flex flex-col gap-2 p-2">
          {entregue.map((os) => (
            <ServiceCard key={os.id} serviceOrder={os} updateStatus={updateStatus} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceBoard;