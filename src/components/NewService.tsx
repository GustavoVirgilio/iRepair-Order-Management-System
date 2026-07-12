import { useState } from "react";
import type { OrdemServico } from "../types/types";

interface NewServiceProps {
  adicionarOS: (novaOS: OrdemServico) => void;
}

function NewService({ adicionarOS }: NewServiceProps) {
  const [nomeCliente, setNomeCliente] = useState("");
  const [modeloAparelho, setModeloAparelho] = useState("");
  const [defeito, setDefeito] = useState("");

  function handleSalvar() {
    if (nomeCliente === ("") || modeloAparelho === ("") || defeito === ("")){
        return 
    }
    const novaOS: OrdemServico = {
      id: Date.now(),
      nomeCliente: nomeCliente,
      modeloAparelho: modeloAparelho,
      defeito: defeito,
      status: "em andamento",
    }
    adicionarOS(novaOS)

    setNomeCliente("")
    setModeloAparelho("")
    setDefeito("")
  }

  return (
    <div>
      <input
        value={nomeCliente}
        onChange={(e) => setNomeCliente(e.target.value)}
        placeholder="Nome do cliente"
      />
      <input
        value={modeloAparelho}
        onChange={(e) => setModeloAparelho(e.target.value)}
        placeholder="Modelo do aparelho"
      />
      <input
        value={defeito}
        onChange={(e) => setDefeito(e.target.value)}
        placeholder="Defeito do aparelho"
      />
      <button onClick={handleSalvar}>Registrar tarefa</button>
    </div>
    
  );
}

export default NewService;