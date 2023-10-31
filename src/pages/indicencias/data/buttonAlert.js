import { icon } from "@fortawesome/fontawesome-svg-core";
import swal from "sweetalert";

export const buttonAlert = () => {
  swal({
    title: "¿Desea eliminar la incidencia?",
    text: "Si esta seguro, haga click en “Eliminar” y los datos de la incidencia será eliminado.",
    buttons: {
      cancel: "Cancelar",
      catch: {
        text: "Eliminar",
        value: "catch",
      },
    },
  }).then((value) => {
    switch (value) {
      case "catch":
        swal("Se elimino correctamente", "La incidencia fue eliminada con éxito.", "success", {
            timer: "1500",
        });
        break;

      default:
        swal("Fue cancelado", {
          icon: "error",
          buttons: null,
          timer: "2000",
        });
    }
  });
};
