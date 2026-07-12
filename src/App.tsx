import { useState } from 'react'

import type { OrdemServico } from './types/types'
import Header from './components/Header'
import NewService from './components/NewService'
import ServiceBoard from './components/ServiceBoard'

function App() {
  const osTeste1: OrdemServico = {
    id: Date.now(),
    nomeCliente: "Pedro",
    modeloAparelho: "iPhone 10",
    defeito: "Tela quebrada",
    status: "em andamento",
  }

  const osTeste2: OrdemServico = {
    id: Date.now(),
    nomeCliente: "Luiz",
    modeloAparelho: "Motorola",
    defeito: "Bateria",
    status: "concluida",
  }

  const osTeste3: OrdemServico = {
    id: Date.now(),
    nomeCliente: "Pedro",
    modeloAparelho: "macbook air",
    defeito: "não liga",
    status: "entregue",
  }

  const [ordensServico, setOrdensServico] = useState<OrdemServico[]>([osTeste1, osTeste2,osTeste3])

  function adicionarOS(novaOS: OrdemServico) { 
    setOrdensServico((valorAnterior) => [...valorAnterior, novaOS])
  }

  return (
    <div className="bg-sky-100 min-h-screen flex  flex-col gap-4">
      <Header />
      <NewService adicionarOS={adicionarOS} />
      <ServiceBoard ordensServico={ordensServico} />
    </div>
  )
}

export default App