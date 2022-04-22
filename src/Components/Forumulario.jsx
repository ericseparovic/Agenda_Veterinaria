import {useState} from "react"
import Error from "./Error"


const Formulario = ({pacientes, setPacientes}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    
    const [error, setError] = useState(false)

    const generarId = () => {
        const  random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        //Validacion del formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            console.log('Campo vacio')
            setError(true)
            return 
        } 
        setError(false)

        //Objeto de paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            id: generarId()
        }
        setPacientes([...pacientes, objetoPaciente])

        //Reiniciar formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }


    return (
        <div className="md:w-1/2 lg:w-2/5"> 
            <h2 className="font-black text-3xl text-center">Seguiemiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Anade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"   
                onSubmit={handleSubmit}
            >
                {error && <Error mensaje='Todos los campos son obligatorios'/> }
                

                <div className="mb-5">
                    <label className="block text-gray-700  uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
                    <input 
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="mascota"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700  uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
                    <input 
                        type="text"
                        placeholder="Nombre de la propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="propietario" 
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700  uppercase font-bold" htmlFor="email">Email</label>
                    <input 
                        type="email"
                        placeholder="Ingrese email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700  uppercase font-bold" htmlFor="alta">Alta</label>
                    <input 
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="alta"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700  uppercase font-bold" htmlFor="alta">Sintomas</label>
                    <textarea 
                        name="" 
                        id="sintomas" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    ></textarea>
                </div>
                <input 
                    type="submit"
                    className="bg-indigo-400 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
                    value="Agregar Paciente"
                />
            </form>
        </div>
    )
}

export default Formulario
