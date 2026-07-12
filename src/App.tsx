import { useState } from 'react'

import type { OrdemServico } from './types/types'
import Header from './components/Header'
import NewService from './components/NewService'
import ServiceBoard from './components/ServiceBoard'

function App() {
  const osTeste: OrdemServico = {
    id: Date.now(),
    nomeCliente: "Pedro",
    modeloAparelho: "iPhone 10",
    defeito: "Tela quebrada",
    status: "em andamento",
  }
  const [ordensServico, setOrdensServico] = useState<OrdemServico[]>([osTeste])

  function adicionarOS(novaOS: OrdemServico) { 
    setOrdensServico((valorAnterior) => [...valorAnterior, novaOS])
  }

  return (
    <>
      <Header />
      <ServiceBoard ordensServico={ordensServico} />
      <NewService adicionarOS={adicionarOS} />
    </>
  )
}

export default App