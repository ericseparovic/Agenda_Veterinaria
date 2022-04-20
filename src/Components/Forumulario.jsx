const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5"> 
            <h2 className="font-black text-3xl text-center">Seguiemiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Anade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                    <label className="block text-gray-700  uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
                    <input 
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="mascota"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700  uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
                    <input 
                        type="text"
                        placeholder="Nombre de la propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="propietario"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700  uppercase font-bold" htmlFor="email">Email</label>
                    <input 
                        type="email"
                        placeholder="Ingrese email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="email"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700  uppercase font-bold" htmlFor="alta">Alta</label>
                    <input 
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="alta"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700  uppercase font-bold" htmlFor="alta">Sintomas</label>
                    <textarea 
                        name="" 
                        id="sintomas" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
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