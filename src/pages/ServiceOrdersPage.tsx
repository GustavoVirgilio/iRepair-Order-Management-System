import { useEffect, useState } from "react";
import type { Client, NewServiceOrder, ServiceOrder } from "../types";
import { getAllClients } from "../services/clientService";
import { getAllServiceOrders, createServiceOrder, deleteServiceOrder } from "../services/serviceOrderService";
import NewServiceForm from "../components/NewServiceForm";
import ServiceBoard from "../components/ServiceBoard";

const ServiceOrdersPage = () => {
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
        console.error("Error loading service orders:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  async function handleCreateServiceOrder(newServiceOrder: NewServiceOrder) {
    try {
      const createdServiceOrder = await createServiceOrder(newServiceOrder);

      setServiceOrders((previousServiceOrders) => [
        ...previousServiceOrders,
        createdServiceOrder
      ]);
    } catch (error) {
      console.error("Error creating service order:", error);
      throw error;
    }
  }

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
      <h1>Service Orders</h1>

      <NewServiceForm
        clients={clients}
        onCreateServiceOrder={handleCreateServiceOrder}
      />

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

export default ServiceOrdersPage;