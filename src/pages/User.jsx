import React, { useState } from "react";
import Navbar from "../components/Navbar/Index";
import {useOutletContext } from "react-router-dom";
import UserTable from "./UserTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function User() {

  const navigate = useNavigate();
  const [sidebarToggle] = useOutletContext();
  const [loading] = useState(false);
  const dataHeader = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "Nombres",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "telefono",
      label: "Telefono",
    },
    {
      key: "state",
      label: "Estado",
    },
    {
      key: "action",
      label: "Opciones",
    },
  ];
  const handleDelete = () => { };
  const data = [
    {
      id: 1,
      name: "Freddy Moya",
      email: "freddymoya2013@gmail.com",
      username: "Moya30",
      telefono: "963495435",
      roles: [{ name: "Admin" }, { name: "Super Admin" },{ name: "Analista" }],
    },
    {
      id: 2,
      name: "Rodrigo",
      email: "rdro@gmail.com",
      username: "MRodri",
      telefono: "963495435",
      roles: [{ name: "Admin" }],
    },
    {
      id: 3,
      name: "Yenifer",
      email: "yenifr12@gmail.com",
      username: "Yenizitah",
      telefono: "963495435",
      roles: [{ name: "Admin" }],
    },

    
  ];

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />


        {/* Tabla */}
        <div className="mainCard">

          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">

            <h1 className="text-center text-black text-xl">
               Usuarios
            </h1>

            {/* Inicia boton añadir */}
            <button 
             onClick={() => 
              navigate("/DetailsUser")} 
             className="bg-violet-700 border-blue-500 text-gray-100 px-3 py-2 mt-5 mb-4 rounded-lg shadow-lg text-sm flex gap-2 items-center"
             >
              <div>
                <FontAwesomeIcon icon={faFloppyDisk} />
              </div>
              <span>Añadir usuario</span>
            </button>
            {/* termina boton añadir */}

            <UserTable
              loading={loading}
              dataHeader={dataHeader}
              data={data}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default User;
