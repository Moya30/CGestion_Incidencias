import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import UserTableIncidencias from "../indicencias/UserTableIncidencias";
import Navbar from "../../components/Navbar/Index";
import Title from "./components/Title";
import withReactContent from "sweetalert2-react-content";
import { show_alerta } from "../../components/Alerta/Alertas";
import axios from "axios";
import Swal from "sweetalert2";

function Incidencias() {

  const [user, setUser] = useState([]);

  const fetchData = () => {
    return axios
      .get("https://incidencias-fiisi.up.railway.app/api/incidencia")
      .then((response) => setUser(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

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



  const handleDelete = (id, title) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: '¿Estas seguro que eliminar la incidencia N°' +id + " del usuario " + title + '?',
      icon: 'question', text: 'Si esta seguro, haga click en “Eliminar” y los datos de la incidencia será eliminado.',
      showCancelButton: true, confirmButtonText: 'Eliminar', cancelButoonText: 'cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
  
        axios.delete(`https://incidencias-fiisi.up.railway.app/api/incidencia/${id}`)
          .then((response) => {
            var tipo = response.status ? "success" : "error";
            console.log("tipo", tipo);
            var msj = response.data;
            show_alerta(msj, tipo)
            if(tipo === 'success'){
              fetchData();
            }
          })
          .catch((error) => {
            console.error('Error al obtener los datos de la API', error);
          });


      } else {
        show_alerta('No fue eliminado', 'error')
      }
    });

  };

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
              data={user}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Incidencias;
