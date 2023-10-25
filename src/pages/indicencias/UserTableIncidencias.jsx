import React from "react";
import { Link } from "react-router-dom";
import Datatables from "../../components/Datatables/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import TableCell from "../../components/Datatables/TableCell";

function UserTableIncidencias({ loading, dataHeader, data, handleDelete }) {
  return (
    <>
      {/* TABLA DE LOS DATOS */}
      <Datatables loading={loading} dataHeader={dataHeader}>
        {data?.map((row, index) => (
          <tr key={index}>
            <TableCell dataLabel="Name" showLabel={true}>
              <span className="font-medium text-sm text-gray-900">
                {row.nincidencia}
              </span>
            </TableCell>
            <TableCell dataLabel="AREA" showLabel={true}>
              <p className="font-normal text-sm text-gray-500">{row.area}</p>
            </TableCell>
            <TableCell dataLabel="SALON" showLabel={true}>
              <p className="font-normal text-sm text-gray-500">{row.salon}</p>
            </TableCell>
            <TableCell dataLabel="ASUNTO" showLabel={true}>
              <p className="font-normal text-sm text-gray-500">{row.asunto}</p>
            </TableCell>
            <TableCell dataLabel="FECHA" showLabel={true}>
              <p className="font-normal text-sm text-gray-500">{row.fecha}</p>
            </TableCell>
            <TableCell dataLabel="USUARIO" showLabel={true}>
              <p className="font-normal text-sm text-gray-500">{row.usuario}</p>
            </TableCell>

            <TableCell>
              <Link
                to={"/incidencias/visualizar"}
                className={`text-gray-500 inline-flex py-2 px-2 rounded  text-sm`}
              >
                <FontAwesomeIcon icon={faEye} />
              </Link>

              <Link
                to={"/incidencias/solucion"}
                className={`text-gray-500 inline-flex py-2 px-2 rounded  text-sm`}
              >
                <FontAwesomeIcon icon={faLightbulb} />
              </Link>

              <Link
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(row.id);
                }}
                to={`/auth/master/user/${row.id}/edit`}
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
