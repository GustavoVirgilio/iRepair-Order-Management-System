import { useState } from 'react'

import ServiceCard from './components/Servicecard'
import type { OrdemServico } from './types/types'

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
      <ServiceCard ordemServico={osTeste} />
    </>
  )
}

export default App