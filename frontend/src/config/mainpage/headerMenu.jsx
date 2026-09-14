import { CiSearch } from "react-icons/ci";

export const HEADER_MENUS = [
  {
    name: "vii-products",
    link: "#",
    submenu: [
      {
        name: "agri-assistant",
        link: "/agr"
      },
      {
        name: "healthcare-assistant",
        link: "/healthcare"
      },
      {
        name: "environment-assistant",
        link: "/env"
      }
    ]
  },
  {
    name: "vii-services",
    link: "#",
    submenu: [
      {
        name: "vii-solutions",
        link: "/"
      },
      {
        name: "vii-yours",
        link: "/"
      }
    ]
  },
  {
    name: "vii-models",
    link: "#",
    submenu: [
      {
        name: "classifiers",
        link: "/class"
      },
      {
        name: "regressors",
        link: "/reg"
      }
    ]
  },
  {
    name: "vii-support",
    link: "#",
    submenu: [
      {
        name: "get-help",
        link: "/help"
      },
      {
        name: "explore-support",
        link: "/ex-support"
      }
    ]
  },
  {
    name: "search",
    link: "#",
    icon: <CiSearch size={18}/>,
  },
];