import { useState } from 'react'

import ServiceCard from './components/Servicecard'
import type { OrdemServico } from './types/types'
import Header from './components/Header'

function App() {
  const osTeste: OrdemServico = {
    id: Date.now(),
    nomeCliente: "Pedro",
    modeloAparelho: "iPhone 10",
    defeito: "Tela quebrada",
    status: "em andamento",
  }

  return (
    <>
      <Header />
      <ServiceCard ordemServico={osTeste} />
    </>
  )
}

export default App