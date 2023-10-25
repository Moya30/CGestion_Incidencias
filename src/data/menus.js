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
    path: "/",
    icon: faTachometer,
  },
  {
    label: 'Maestro'
  },
  {
    label: "Usuario",
    path: "/User",
    icon: faPage4,
  },
  {
    label: "404",
    path: "/404",
    icon: faNotdef,
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
    label: "Seguimiento",
    path: "/table",
    icon: faTable,
  },

  {
    label: 'Reportes'
  },
  {
    label: "Reporte de incidencias",
    path: "/auth/login",
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