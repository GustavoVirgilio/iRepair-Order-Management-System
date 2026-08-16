import { useState } from 'react'

import type { OrdemServico } from './types/types'
import Header from './components/Header'
import NewServiceForm from './components/NewServiceForm'
import ServiceBoard from './components/ServiceBoard'

function App() {

  const [ordensServico, setOrdensServico] = useState<OrdemServico[]>([])

  function adicionarOS(novaOS: OrdemServico) { 
    setOrdensServico((valorAnterior) => [...valorAnterior, novaOS])
  }

  function atualizarStatus(id: number, novoStatus: OrdemServico["status"]) {
    setOrdensServico((valorAnterior) => valorAnterior.map((os) => 
      os.id === id ? {...os, status: novoStatus} : os
    ));
  }

  return (
    <div className="bg-sky-100 min-h-screen flex  flex-col gap-4">
      <Header />
      <NewServiceForm adicionarOS={adicionarOS} />
      <ServiceBoard ordensServico={ordensServico} atualizarStatus={atualizarStatus} />
    </div>
  )
}

export default App