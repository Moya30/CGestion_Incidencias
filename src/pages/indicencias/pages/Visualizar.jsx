import axios from "axios";
import { useOutletContext } from "react-router-dom";
import Navbar from "../../../components/Navbar/Index";
import Title from "../components/Title";
import Goback from "../components/Goback";
import { useEffect, useState } from "react";

function Visualizar() {
  const [sidebarToggle] = useOutletContext();

  const [detalis, setDetalis] = useState(null);

  const query = new URLSearchParams(window.location.search);

  const incidenciaID = query.get("incidenciaID");

  useEffect(() => {
    const endPonit = `https://incidencias-fiisi.up.railway.app/api/incidencia/${incidenciaID}`;

    console.log("Error", endPonit);

    axios
      .get(endPonit)
      .then((response) => {
        const apiData = response.data;

        console.log("CONSOLA", apiData);

        setDetalis(apiData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        <div className="mainCard">
          {/* BOTON REGRESAR */}
          <Goback></Goback>

          {/* TITULO */}
          <Title text={"Visualizar incidencia"}></Title>

          {/* FORM */}
          <div className="border w-full border-gray-200 bg-white py-3 px-16 rounded-md">
            {detalis && (
              <>
                <form>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
                    {/* ------------------- */}
                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Área:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.salon.area.nombArea}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Salón:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.salon.nombSalon}
                      />
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Tipo de incidencia:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.tipoIncidencia.nombTipoInci}
                      />
                    </div>
                  </div>
                  {/* ------------------------- */}
                  <div className="grid gap-4 grid-cols-2">
                    {/* incidencia */}
                    <div className="mt-6">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        Creación:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.fechaInci}
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
                        // onChange={(e) => setEmail(e.target.value)}
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.nombInci}
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
                        // onChange={(e) => setEmail(e.target.value)}
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.usuario.nombUsua}
                      />
                    </div>

                    {/* Tipo de seguimiento */}
                    <div className="mt-6">
                      <label
                        htmlFor="largeInput"
                        className="text-base text-gray-600"
                      >
                        N° Incidencia:
                      </label>
                      <input
                        id="largeInput"
                        type="text"
                        name="largeInput"
                        // onChange={(e) => setEmail(e.target.value)}
                        className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                        value={detalis.idInci}
                      />
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
                      detaliss="4"
                      className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                      value={detalis.descInci}
                    ></textarea>
                  </div>
                </form>
              </>
            )}

            {/*<div className="mt-6 flex flex-detalis justify-center gap-4 content-center">
            <button
              className="bg-cyan-900 text-gray-100 px-20 py-2 rounded-full shadow-lg text-base"
              onClick={() => navigate("/incidencias")}
            >
              Guardar
            </button>

            <button className="text-cyan-900 border border-cyan-900 px-20 py-2 rounded-full shadow-lg text-base">
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
          </div>
        </div>
      </main>
    </>
  );
}

export default Visualizar;
