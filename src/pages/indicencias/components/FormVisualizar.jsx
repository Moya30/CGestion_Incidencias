import React from "react";
import { useNavigate } from "react-router-dom";

function FormVisualizar({ data }) {
  const navigate = useNavigate();
  // function saveSolution() {
  //     alert("Agregado");
  //   }
  return (
    <>
      {/* Main Content */}

      <div className="border w-full border-gray-200 bg-white py-5 px-20 rounded-md">
        <form>
          {data?.map((row, index) => (
            <div key={index}>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
                {/* ------------------- */}
                <div class="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="largeInput" className="text-lg text-gray-600">
                    Área:
                  </label>
                  <input
                    id="largeInput"
                    type="text"
                    name="largeInput"
                    className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    value="PAB-1"  
                  />
                </div>

                <div class="sm:col-span-2">
                  <label htmlFor="largeInput" className="text-lg text-gray-600">
                    Salón: 
                  </label>
                  <input
                    id="largeInput"
                    type="text"
                    name="largeInput"
                    className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    value="A-303"
                  />
                </div>

                <div class="sm:col-span-4">
                  <label htmlFor="largeInput" className="text-lg text-gray-600">
                    Tipo de incidencia:
                  </label>
                  <input
                    id="largeInput"
                    type="text"
                    name="largeInput"
                    className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    value="Software"
                  />
                </div>
              </div>
              {/* ------------------------- */}
              <div class="grid gap-4 grid-cols-2">
                {/* incidencia */}
                <div className="mt-6">
                  <label htmlFor="largeInput" className="text-lg text-gray-600">
                    Creación:
                  </label>
                  <input
                    id="largeInput"
                    type="text"
                    name="largeInput"
                    className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    value={row.fecha}
                  />
                </div>

                {/* Asunto */}
                <div className="mt-6">
                  <label htmlFor="largeInput" className="text-lg text-gray-600">
                    Asunto:
                  </label>
                  <input
                    id="largeInput"
                    type="text"
                    name="largeInput"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    value={row.asunto}
                  />
                </div>

                {/* Usuario */}
                <div className="mt-6">
                  <label htmlFor="largeInput" className="text-lg text-gray-600">
                    Usuario:
                  </label>
                  <input
                    id="largeInput"
                    type="text"
                    name="largeInput"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    value={row.usuario}
                  />
                </div>

                {/* Tipo de seguimiento */}
                <div className="mt-6">
                  <label htmlFor="largeInput" className="text-lg text-gray-600">
                    N° Incidencia:
                  </label>
                  <input
                    id="largeInput"
                    type="text"
                    name="largeInput"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    value={row.nincidencia}
                  />
                </div>
              </div>
              {/* Solución al caso:  */}
              <div className="mt-6">
                <label htmlFor="largeInput" className="text-lg text-gray-600">
                  Solución al caso:
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  value="Estos son solo ejemplos de los tipos de incidencias que pueden ocurrir en un colegio. El sistema de reporte de incidencias debe ser lo suficientemente flexible para abordar una amplia gama de situaciones y garantizar que se puedan tomar las medidas adecuadas para abordar cada caso de manera efectiva."
                ></textarea>
              </div>
            </div>
          ))}

           {/*<div className="mt-6 flex flex-row justify-center gap-4 content-center">
            <button
              className="bg-cyan-900 text-gray-100 px-20 py-2 rounded-full shadow-lg text-lg"
              onClick={() => navigate("/incidencias")}
            >
              Guardar
            </button>

            <button className="text-cyan-900 border border-cyan-900 px-20 py-2 rounded-full shadow-lg text-lg">
              Cancelar
            </button>

            <button className="text-emerald-600 border border-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
              Secondary Button
            </button>
            <button className="bg-emerald-600 border-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center">
              <div>
                <FontAwesomeIcon icon={faFloppyDisk} />
              </div>
              <span>Primary Icon Button</span>
            </button> 
          </div>*/}
        </form>
      </div>
    </>
  );
}

export default FormVisualizar;
