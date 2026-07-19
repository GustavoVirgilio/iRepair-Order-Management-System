import { useState } from "react";
import type { Client, NewServiceOrder, ServiceOrderStatus } from "../types";

interface NewServiceFormProps {
  clients: Client[];
  onCreateServiceOrder: (newServiceOrder: NewServiceOrder) => Promise<void>;
}

const NewServiceForm = ({ clients, onCreateServiceOrder }: NewServiceFormProps) => {
  const [selectedClientId, setSelectedClientId] = useState("");
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");
  const [status, setStatus] = useState<ServiceOrderStatus>("open");

  async function handleSave() {
    if (selectedClientId === "" || device === "" || issue === "") {
      return;
    }

    const newServiceOrder: NewServiceOrder = {
      clientId: Number(selectedClientId),
      device: device,
      issue: issue,
      status: status
    };

    await onCreateServiceOrder(newServiceOrder);

    setSelectedClientId("");
    setDevice("");
    setIssue("");
    setStatus("open");
  }

  return (
    <div className="flex flex-row gap-3 p-2">
      <div className="flex flex-col gap-1 flex-1">
        <label className="text-sm text-gray-900">Nome do cliente</label>
        <select
          className="w-full border border-blue-300 rounded-md p-2"
          value={selectedClientId}
          onChange={(e) => setSelectedClientId(e.target.value)}
        >
          <option value="">Selecione um cliente</option>

          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <label className="text-sm text-gray-900">Modelo do aparelho</label>
        <input
          className="w-full flex-1 border border-blue-300 rounded-md p-2"
          value={device}
          onChange={(e) => setDevice(e.target.value)}
          placeholder="Modelo do aparelho"
        />
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <label className="text-sm text-gray-900">Defeito do aparelho</label>
        <input
          className="w-full flex-1 border border-blue-300 rounded-md p-2"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="Defeito do aparelho"
        />
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <label className="text-sm text-gray-900">Status</label>
        <select
          className="w-full border border-blue-300 rounded-md p-2"
          value={status}
          onChange={(e) => setStatus(e.target.value as ServiceOrderStatus)}
        >
          <option value="open">Aberta</option>
          <option value="in_progress">Em andamento</option>
          <option value="done">Concluída</option>
        </select>
      </div>

      <button
        className="bg-green-400 hover:bg-green-500 text-white font-bold rounded-md px-6 py-2 self-end shrink-0 cursor-pointer"
        onClick={handleSave}
        disabled={clients.length === 0}
      >
        Salvar
      </button>
    </div>
  );
};

export default NewServiceForm;