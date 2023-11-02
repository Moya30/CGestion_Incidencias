import axios from "axios";

async function AddSolution(idInci, descSolu, costoSolu, idUsua) {
  try {
    const result = await axios.put(
      "https://incidencias-fiisi.up.railway.app/api/solucion",
      {
        idInci,
        descSolu,
        costoSolu,
        idUsua,
      }
    );

    return { solution: result.data };
  } catch (error) {
    return { mensaje: error.response.data.mensaje };
  }
}
export default AddSolution;
