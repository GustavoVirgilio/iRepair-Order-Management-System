import type { OrdemServico } from "../types/types";
import ServiceCard from "./Servicecard";

interface ServiceBoardProps {
  ordensServico: OrdemServico[];
}

function ServiceBoard({ ordensServico }: ServiceBoardProps) {
  const emAndamento = ordensServico.filter((os) => os.status === "em andamento");
  const concluida = ordensServico.filter((os) => os.status === "concluida");
  const entregue = ordensServico.filter((os) => os.status === "entregue");

  return (
    <div className="bg-sky-100 flex flex-row gap-4 p-4">
      <div className="flex-1 bg-blue-50 rounded-lg shadow">
        <h2 className="bg-blue-400 text-white p-2 rounded-t-lg text-center font-bold"> Em andamento </h2>
        <div className="flex flex-col gap-2 p-2">
          {emAndamento.map((os) => (
            <ServiceCard key={os.id} ordemServico={os} />
          ))}
        </div>
      </div>

      <div className="flex-1 bg-blue-50 rounded-lg shadow">
        <h2 className="bg-blue-400 text-white p-2 rounded-t-lg text-center font-bold"> Concluída </h2>
        <div className="flex flex-col gap-2 p-2">
          {concluida.map((os) => (
            <ServiceCard key={os.id} ordemServico={os} />
          ))}
        </div>
      </div>

      <div className="flex-1 bg-blue-50 rounded-lg shadow">
        <h2 className="bg-blue-400 text-white p-2 rounded-t-lg text-center font-bold"> Entregue </h2>
        <div className="flex flex-col gap-2 p-2">
          {entregue.map((os) => (
            <ServiceCard key={os.id} ordemServico={os} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceBoard;