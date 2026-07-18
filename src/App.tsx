import { useState } from 'react'

import type { serviceOrder } from './types/types'
import Header from './components/Header'
import NewServiceForm from './components/NewServiceForm'
import ServiceBoard from './components/ServiceBoard'

function App() {

  const [serviceOrders, setserviceOrders] = useState<serviceOrder[]>([])

  function addSO(newSO: serviceOrder) { 
    setserviceOrders((valorAnterior) => [...valorAnterior, newSO])
  }

  function updateStatus(id: number, newStatus: serviceOrder["status"]) {
    setserviceOrders((valorAnterior) => valorAnterior.map((os) => 
      os.id === id ? {...os, status: newStatus} : os
    ));
  }

  return (
    <div className="bg-sky-100 min-h-screen flex  flex-col gap-4">
      <Header />
      <NewServiceForm addSO={addSO} />
      <ServiceBoard serviceOrders={serviceOrders} updateStatus={updateStatus} />
    </div>
  )
}

export default App