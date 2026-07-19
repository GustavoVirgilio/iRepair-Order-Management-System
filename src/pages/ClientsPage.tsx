import { useState, useEffect } from 'react';
import type { Client } from '../types';
import { getAllClients } from '../services/clientService';

function ClientsPage() {
    const [clients, setClients] = useState<Client[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadClients() {
            const data = await getAllClients();
            setClients(data);
            setIsLoading(false);
        }
        loadClients();
    }, []);

    return (
        <div>
            <h1> Clients </h1>
            {isLoading ? (
                <p> Carregando... </p>
            ) : (
                <div> 
                    {clients.map((client) => (
                        <div key={client.id}>
                            <p>{client.name}</p>
                            <p>{client.phone}</p>
                            <p>{client.email}</p>
                            <p>{client.created_at}</p>
                        </div>
                    ))}
        </div>
    )}
    </div>
    );
}

export default ClientsPage;