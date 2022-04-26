import {useState, useEffect} from "react"
import Formulario from "./Components/Forumulario"
import Header from "./Components/Header"
import ListadoPacientes from "./Components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerLocalStorage = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS);
    }
    obtenerLocalStorage()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacienteActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacienteActualizados)
  }


  return (
    <div className="container mx-auto mt-20">
      <Header/>
            <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes} 
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
