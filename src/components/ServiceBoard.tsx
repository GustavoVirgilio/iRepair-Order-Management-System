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
    <div>
      <div>
        <h2>Em andamento</h2>
        {emAndamento.map((os) => (
          <ServiceCard key={os.id} ordemServico={os} />
        ))}
      </div>

      <div>
        <h2>Concluída</h2>
        {concluida.map((os) => (
          <ServiceCard key={os.id} ordemServico={os} />
        ))}
      </div>

      <div>
        <h2>Entregue</h2>
        {entregue.map((os) => (
          <ServiceCard key={os.id} ordemServico={os} />
        ))}
      </div>
    </div>
  );
}

export default ServiceBoard;