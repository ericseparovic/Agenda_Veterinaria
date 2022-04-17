import React from "react"
import Formulario from "./Components/Forumulario"
import Header from "./Components/Header"
import ListadoPacientes from "./Components/ListadoPacientes"

function App() {

  return (
    <div className="container">
      <h1>App</h1>
      <Formulario/>
      <Header/>
      <ListadoPacientes/> 
    </div>
  )
}

export default App
