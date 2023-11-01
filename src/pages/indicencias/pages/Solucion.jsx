import React, { useEffect, useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import Navbar from "../../../components/Navbar/Index";
import Title from "../components/Title";
import Goback from "../components/Goback";
import axios from "axios";

function Solucion() {
  const [sidebarToggle] = useOutletContext();

  /*Solution */
  const [solution, setSolution] = useState(null);
  const query = new URLSearchParams(window.location.search);
  const incidenciaID = query.get("incidenciaID");

  const fetchData = () => {
    return axios
      .get(
        `https://incidencias-fiisi.up.railway.app/api/incidencia/${incidenciaID}`
      )
      .then((response) => {
        const apiData = response.data;

        setSolution(apiData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  /*type follow*/
  const [follow, setFollow] = useState(null);
  const fetchFollow = () => {

    return axios
      .get(`https://incidencias-fiisi.up.railway.app/api/tiposeguimiento`)
      .then((response) => {
        setFollow(response.data);
      })
      .catch((error) => {
        console.error("Error fetching follow:", error);
      });
  };

  useEffect(() => {
    fetchData();
    fetchFollow();
  }, []);

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        <div className="mainCard">
          {/* BOTON REGRESAR */}
          <Goback></Goback>

          {/* TITULO */}
          <Title text={"Solución de la Incidencia"}></Title>

          {/* FORM */}
          <div className="border w-full border-gray-200 bg-white py-5 px-20 rounded-md">
            {solution && (
              <>
                <form>
                  <div>
                    <div className="grid gap-4 grid-cols-2">
                      {/* incidencia */}
                      <div className="mt-6">
                        <label
                          htmlFor="largeInput"
                          className="text-base text-gray-600"
                        >
                          N° Incidencia
                        </label>
                        <input
                          id="largeInput"
                          type="text"
                          name="largeInput"
                          className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                          value={solution.idInci} readOnly
                        />
                      </div>

                      {/* Asunto */}
                      <div className="mt-6">
                        <label
                          htmlFor="largeInput"
                          className="text-base text-gray-600"
                        >
                          Asunto:
                        </label>
                        <input
                          id="largeInput"
                          type="text"
                          name="largeInput"
                          // onChange={(e) => setEmail(e.target.onChange)}
                          className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                          value={solution.nombInci} readOnly
                        />
                      </div>

                      {/* Usuario */}
                      <div className="mt-6">
                        <label
                          htmlFor="largeInput"
                          className="text-base text-gray-600"
                        >
                          Usuario:
                        </label>
                        <input
                          id="largeInput"
                          type="text"
                          name="largeInput"
                          // onChange={(e) => setEmail(e.target.onChange)}
                          className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                          value={solution.usuario.nombUsua}
                        />
                      </div>

                      {/* Tipo de seguimiento */}
                      <div>
                      <div className="mt-6">
                        <label
                          htmlFor="largeInput"
                          className="text-base text-gray-600"
                        >
                          Tipo de seguimiento:
                        </label>
                        <select
                          id="seguimiento"
                          name="seguimiento"
                          autoComplete="seguimiento-name"
                          className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                          value={solution.tipoSeguimiento.nombTipoSegui}
                          onChange={ (e) => setSolution(e.target.value)}
                        >
                          <option>Seleccione una opcion</option>
                          
                          {follow.map((follow) => (
                            <option key={follow.idTipoSegui} value={follow.value}>
                              {follow.nombTipoSegui}
                            </option>
                          ))}
                        </select>
                      </div>
                      </div>
                    </div>
                    {/* Solución al caso:  */}
                    <div className="mt-6">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Solución al caso:
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        onChange={solution.descInci}
                      ></textarea>
                    </div>
                  </div>
                </form>
              </>
            )}

            <div className="mt-6 flex flex-row justify-center gap-4 content-center">
              <button
                className="bg-cyan-900 text-gray-100 px-20 py-2 rounded-full shadow-lg text-base"
                onClick={() => Navigate("/incidencias")}
              >
                Guardar
              </button>

              <button className="text-cyan-900 border border-cyan-900 px-20 py-2 rounded-full shadow-lg text-base">
                Cancelar
              </button>
            </div>
          </div>
        </div>
        {/* <button className="text-emerald-600 border border-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
              Secondary Button
            </button>
            <button className="bg-emerald-600 border-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center">
              <div>
                <FontAwesomeIcon icon={faFloppyDisk} />
              </div>
              <span>Primary Icon Button</span>
            </button> */}
      </main>
    </>
  );
}

export default Solucion;
