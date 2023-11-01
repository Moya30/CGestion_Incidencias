import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Datatables from "../../components/Datatables/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import TableCell from "../../components/Datatables/TableCell";


import axios from "axios";
import { buttonAlert } from "./data/buttonAlert";

function UserTableIncidencias({ loading, dataHeader, handleDelete }) {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return axios
      .get("https://incidencias-fiisi.up.railway.app/api/incidencia")
      .then((response) => setUser(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>
      {/* TABLA DE LOS DATOS */}
      <Datatables loading={loading} dataHeader={dataHeader}>
        {user &&
          user.length > 0 &&
          user.map((row, index) => (
            
            <tr key={row.idInci}>
              <TableCell dataLabel="Name" showLabel={true}>
                <span className="font-medium text-sm text-gray-900">
                  {row.idInci}
                </span>
              </TableCell>
              <TableCell dataLabel="AREA" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {row.salon.area.nombArea}
                </p>
              </TableCell>
              <TableCell dataLabel="SALON" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {row.salon.nombSalon}
                </p>
              </TableCell>
              <TableCell dataLabel="ASUNTO" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {row.tipoIncidencia.nombTipoInci}
                </p>
              </TableCell>
              <TableCell dataLabel="FECHA" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {row.fechaInci}
                </p>
              </TableCell>
              <TableCell dataLabel="USUARIO" showLabel={true}>
                <p className="font-normal text-sm text-gray-500">
                  {row.usuario.nombUsua}
                </p>
              </TableCell>

              <TableCell>
                <Link
                  to={`/incidencias/visualizar?incidenciaID=${row.idInci}`}
                  className={`text-gray-500 inline-flex py-2 px-2 rounded  text-sm`}
                >
                  <FontAwesomeIcon icon={faEye} />
                </Link>
                <Link
                  to={`/incidencias/solucion?incidenciaID=${row.idInci}`}
                  className={`text-gray-500 inline-flex py-2 px-2 rounded  text-sm`}
                >
                  <FontAwesomeIcon icon={faLightbulb} />
                </Link>

                <Link 
                  onClick={buttonAlert}
                  to={"/incidencias"}
                  className={`text-gray-500 inline-flex py-2 px-2 rounded  text-sm`}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </TableCell>
            </tr>

            
          ))}
      </Datatables>
    </>
  );
}

export default UserTableIncidencias;
