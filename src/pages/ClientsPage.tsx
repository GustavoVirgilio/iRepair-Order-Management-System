import { useState, useEffect } from 'react';
import type { Client } from '../types';
import { getAllClients, createClient, deleteClient } from '../services/clientService';

function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function loadClients() {
      const data = await getAllClients();

      setClients(data);
      setIsLoading(false);
    }

    loadClients();
  }, []);

  async function handleCreateClient() {
    if (name === '' || phone === '' || email === '') {
      return;
    }

    const newClient = await createClient({
      name,
      phone,
      email,
    });

    setClients((previousClients) => [
      ...previousClients,
      newClient,
    ]);

    setName('');
    setPhone('');
    setEmail('');
  }

  async function handleDeleteClient(id: number) {
    try {
      await deleteClient(id);

      setClients((previousClients) =>
        previousClients.filter(
          (client) => client.id !== id,
        ),
      );
    } catch (error) {
      console.error('Erro ao deletar cliente:', error);
    }
  }

  return (
    <div>
      <h1 className="text-xl font-medium mb-2">Clients</h1>

      <div className="flex flex-row gap-3 p-2">
        <input
          className="w-full flex-1 border border-blue-300 rounded-md p-2"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Nome"
        />

        <input
          className="w-full flex-1 border border-blue-300 rounded-md p-2"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="Telefone"
        />

        <input
          className="w-full flex-1 border border-blue-300 rounded-md p-2"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />

        <button
          className="bg-green-400 hover:bg-green-500 text-white font-bold rounded-md px-6 py-2 shrink-0 cursor-pointer"
          onClick={handleCreateClient}
        >
          Salvar
        </button>
      </div>

      {isLoading ? (
        <p className="p-2">Carregando...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
          {clients.map((client) => (
            <div
              className="bg-white border border-blue-200 rounded-lg shadow p-4"
              key={client.id}
            >
              <p>Cliente: {client.name}</p>
              <p>Telefone: {client.phone}</p>
              <p>Email: {client.email}</p>

              <button
                className="mt-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-md px-4 py-2 cursor-pointer"
                onClick={() =>
                  handleDeleteClient(client.id)
                }
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ClientsPage;