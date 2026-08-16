import { useEffect, useState } from "react";
import type { Client, ServiceOrder } from "../types";
import { getAllClients } from "../services/clientService";
import { deleteServiceOrder, getAllServiceOrders } from "../services/serviceOrderService";
import ServiceBoard from "../components/ServiceBoard";

const DashboardPage = () => {
  const [serviceOrders, setServiceOrders] = useState<ServiceOrder[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [serviceOrdersData, clientsData] = await Promise.all([
          getAllServiceOrders(),
          getAllClients()
        ]);

        setServiceOrders(serviceOrdersData);
        setClients(clientsData);
      } catch (error) {
        console.error("Error loading dashboard:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  async function handleDeleteServiceOrder(id: number) {
    try {
      await deleteServiceOrder(id);

      setServiceOrders((previousServiceOrders) =>
        previousServiceOrders.filter((serviceOrder) => serviceOrder.id !== id)
      );
    } catch (error) {
      console.error("Error deleting service order:", error);
    }
  }

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>

      {serviceOrders.length === 0 ? (
        <p>Nenhuma ordem de serviço cadastrada.</p>
      ) : (
        <ServiceBoard
          serviceOrders={serviceOrders}
          clients={clients}
          onDeleteServiceOrder={handleDeleteServiceOrder}
        />
      )}
    </div>
  );
};

export default DashboardPage;