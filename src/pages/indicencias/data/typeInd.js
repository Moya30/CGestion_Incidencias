import axios from "axios";
import React, { Component } from "react";

class typeInd extends Component {
  state = {
    tiposeguimiento: [],
  };
  componentDidMount() {
    axios
      .get("https://incidencias-fiisi.up.railway.app/api/tiposeguimiento")
      .then((response) => {
        console.log(response);
        this.setState({ tiposeguimiento: response.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <>
        <div>
          <div className="form-group">
            <select name="tiposeguimiento" className="form-control" />
            {this.state.first.tiposeguimiento.map((elemento) => (
              <option key={elemento.idTipoSegui} value={elemento.idTipoSegui}>
                {elemento.nombTipoSegui}
              </option>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default typeInd;
