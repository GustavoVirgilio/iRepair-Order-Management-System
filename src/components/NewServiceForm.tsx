import { useState } from "react";
import type { serviceOrder } from "../types/types";

interface NewServiceFormProps {
  addSO: (newSO: serviceOrder) => void;
}

function NewServiceForm({ addSO }: NewServiceFormProps) {
  const [clientName, setClientName] = useState("");
  const [deviceModel, setDeviceModel] = useState("");
  const [defect, setDefect] = useState("");

  function handleSave() {
    if (clientName === "" || deviceModel === "" || defect === "") {
      return;
    }
    const newSO: serviceOrder = {
      id: Date.now(),
      clientName: clientName,
      deviceModel: deviceModel,
      defect: defect,
      status: "in progress"
    };
    addSO(newSO);

    setClientName("");
    setDeviceModel("");
    setDefect("");
  }

  return (
    <div className="flex flex-row gap-3 p-2">
      <div className="flex flex-col gap-1 flex-1">
        <label className="text-sm text-gray-900">Nome do cliente</label>
        <input
          className="w-full border border-blue-300 rounded-md p-2"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder="Nome do cliente"
        />
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <label className="text-sm text-gray-900">Modelo do aparelho</label>
        <input
          className="w-full flex-1 border border-blue-300 rounded-md p-2"
          value={deviceModel}
          onChange={(e) => setDeviceModel(e.target.value)}
          placeholder="Modelo do aparelho"
        />
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <label className="text-sm text-gray-900">Defeito do aparelho</label>
        <input
          className="w-full flex-1 border border-blue-300 rounded-md p-2"
          value={defect}
          onChange={(e) => setDefect(e.target.value)}
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