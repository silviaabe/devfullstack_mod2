import { useState } from "react"
import CardUsuario from "./components/CardUsuario"
import Header from "./components/Header"

function App() {
  const [concluidas, setConcluidas] = useState(0)

  return (
    <>
      <Header />
      <CardUsuario nome="Silvia" curso="React"/>
      <CardUsuario nome="Clarice" curso="Full Stack"/>
      <CardUsuario nome="Laura" curso="Java"/>

      <p>Tarefas concluidas: {concluidas}</p>
      <button onClick={() => setConcluidas(concluidas + 1)}>
        Concluir tarefa
      </button>
    </>
  )
}

export default App
