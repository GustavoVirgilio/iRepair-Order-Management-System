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
      <h1>Clients</h1>

      <div>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Nome"
        />

        <input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="Telefone"
        />

        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />

        <button onClick={handleCreateClient}>
          Salvar
        </button>
      </div>

      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {clients.map((client) => (
            <div key={client.id}>
              <p>{client.name}</p>
              <p>{client.phone}</p>
              <p>{client.email}</p>

              <button
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