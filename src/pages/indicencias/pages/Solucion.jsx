import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../../../components/Navbar/Index";
import Title from "../components/Title";
import Goback from "../components/Goback";
import FormSolucion from "../components/FormSolucion";
import data from "../data/data";

function Solucion() {
  const [sidebarToggle] = useOutletContext();
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
          <FormSolucion data={data}></FormSolucion>
        </div>
      </main>
    </>
  );
}

export default Solucion;
