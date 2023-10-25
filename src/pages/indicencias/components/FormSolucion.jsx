import React from "react";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPhone } from "@fortawesome/free-solid-svg-icons";

function FormSolucion({ data }) {
  return (
    <>
      {/* Main Content */}

      <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
        <form>
          {data?.map((row, index) => (
            <div key={index}>
              <div class="grid gap-4 grid-cols-2">
                {/* incidencia */}
                <div className="mt-6">
                  <label htmlFor="largeInput" className="text-lg text-gray-600">
                    N° Incidencia
                  </label>
                  <input
                    id="largeInput"
                    type="text"
                    name="largeInput"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder={row.nincidencia} 
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
                    placeholder={row.asunto}
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
                    placeholder={row.usuario}
                  />
                </div>

                {/* Tipo de seguimiento */}
                <div className="mt-6">
                  <label htmlFor="largeInput" className="text-lg text-gray-600">
                    Tipo de seguimiento:
                  </label>
                  <input
                    id="largeInput"
                    type="text"
                    name="largeInput"
                    // onChange={(e) => setEmail(e.target.value)}
                    className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="Proceso de revisión"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 flex flex-row gap-4">
            <button className="bg-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
              Primary Button
            </button>

            <button className="text-emerald-600 border border-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
              Secondary Button
            </button>

            <button className="text-emerald-600 border border-emerald-300 px-3 py-2 rounded-lg shadow-lg text-sm">
              Outlined Button
            </button>

            <button className="bg-emerald-600 border-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center">
              <div>
                <FontAwesomeIcon icon={faFloppyDisk} />
              </div>
              <span>Primary Icon Button</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormSolucion;
