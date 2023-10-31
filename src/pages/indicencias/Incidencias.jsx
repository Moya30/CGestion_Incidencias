import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import UserTableIncidencias from "../indicencias/UserTableIncidencias";
import Navbar from "../../components/Navbar/Index";
import Title from "./components/Title";

function Incidencias() {

  const [sidebarToggle] = useOutletContext();

  const [loading] = useState(false);

  const dataHeader = [
    {
      key: "nincidencia",
      label: "N° INCIDENCIA",
    },
    {
      key: "area",
      label: "AREA",
    },
    {
      key: "salon",
      label: "SALON",
    },
    {
      key: "asunto",
      label: "ASUNTO",
    },
    {
      key: "fecha",
      label: "FECHA",
    },
    {
      key: "usuario",
      label: "USUARIO",
    },
    {
      key: "opciones",
      label: "OPCIONES",
    },
  ];

  const handleDelete = () => {};

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />
        {/* Main Content */}

        <div className="mainCard">
          <Title text={"Incidencia"}></Title>

          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <UserTableIncidencias
              loading={loading}
              dataHeader={dataHeader}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Incidencias;
