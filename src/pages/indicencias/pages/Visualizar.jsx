import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../../../components/Navbar/Index";
import Title from "../components/Title";
import Goback from "../components/Goback";
import FormVisualizar from "../components/FormVisualizar";
import data from "../data/data";

function Visualizar() {
  const [sidebarToggle] = useOutletContext();
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
          <FormVisualizar></FormVisualizar>
          
        </div>
      </main>
    </>
  );
}

export default Visualizar;
