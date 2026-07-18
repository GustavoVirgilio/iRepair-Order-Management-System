import { useState } from "react";
import type { serviceOrder } from "../types/types";

interface NewServiceFormProps {
  addSO: (newSO: serviceOrder) => void;
}

function NewServiceForm({ addSO }: NewServiceFormProps) {
  const [nomeCliente, setNomeCliente] = useState("");
  const [modeloAparelho, setModeloAparelho] = useState("");
  const [defeito, setDefeito] = useState("");

  function handleSave() {
    if (nomeCliente === "" || modeloAparelho === "" || defeito === "") {
      return;
    }
    const newSO: serviceOrder = {
      id: Date.now(),
      nomeCliente: nomeCliente,
      modeloAparelho: modeloAparelho,
      defeito: defeito,
      status: "em andamento",
    };
    addSO(newSO);

    setNomeCliente("");
    setModeloAparelho("");
    setDefeito("");
  }

  return (
    <div className="flex flex-row gap-3 p-2">
      <div className="flex flex-col gap-1 flex-1">
        <label className="text-sm text-gray-900">Nome do cliente</label>
        <input
          className="w-full border border-blue-300 rounded-md p-2"
          value={nomeCliente}
          onChange={(e) => setNomeCliente(e.target.value)}
          placeholder="Nome do cliente"
        />
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <label className="text-sm text-gray-900">Modelo do aparelho</label>
        <input
          className="w-full flex-1 border border-blue-300 rounded-md p-2"
          value={modeloAparelho}
          onChange={(e) => setModeloAparelho(e.target.value)}
          placeholder="Modelo do aparelho"
        />
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <label className="text-sm text-gray-900">Defeito do aparelho</label>
        <input
          className="w-full flex-1 border border-blue-300 rounded-md p-2"
          value={defeito}
          onChange={(e) => setDefeito(e.target.value)}
          placeholder="Defeito do aparelho"
        />
      </div>

      <button
        className="bg-green-400 hover:bg-green-500 text-white font-bold rounded-md px-6 py-2 self-end shrink-0 cursor-pointer"
        onClick={handleSave}> Salvar </button>
    </div>
  );
}

export default NewServiceForm;