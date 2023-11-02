import { faPage4, faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faTable,
  faLock,
  //faNoteSticky,
  faNotdef
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: faTachometer,
  },
  {
    label: 'Maestro'
  },
  {
    label: "Usuario",
    path: "/Usuario/User",
    icon: faPage4,
  },
 
  
  {
    label: 'Procesos'
  },
  {
    label: "Incidencias",
    path: "/incidencias",
    icon: faWindows,
  },

  {
    label: 'Reportes'
  },
  {
    label: "Reporte de incidencias",
    path: "/",
    icon: faLock,
  },


  {
    label: 'Opciones'
  },
  // {
  //   label: "Login",
  //   path: "/auth/login",
  //   icon: faLock,
  // },
  // {
  //   label: "Register",
  //   path: "/auth/register",
  //   icon: faNoteSticky,
  // },
];

export default initMenu