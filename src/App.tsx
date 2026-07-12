import { useState } from 'react'

import ServiceCard from './components/Servicecard'
import type { OrdemServico } from './types/types'
import Header from './components/Header'
import NewService from './components/NewService'

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
      {ordensServico.map((os) => (
      <ServiceCard key={os.id} ordemServico={os} />
    ))}
      <NewService adicionarOS={adicionarOS} />
    </>
  )
}

export default App