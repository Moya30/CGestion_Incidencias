import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Goback() {
  return (
    <Link
      to={"/incidencias"}
      className={`text-cyan-900 inline-flex py-2 px-2 rounded  text-sm`}
    >
      <div className="flex">
        <div className="flex-none ...">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="flex-0 w-16 text-center">
          Volver
        </div>
      </div>
    </Link>
  );
}
export default Goback;
