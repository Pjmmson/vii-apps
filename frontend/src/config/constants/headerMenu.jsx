import { CiSearch } from "react-icons/ci";

export const HEADER_MENUS = [
  {
    name: "vii-products",
    link: "#",
    submenu: [
      {
        name: "agriculture-assistant",
        link: "/agriculture"
      },
      {
        name: "healthcare-assistant",
        link: "/healthcare"
      },
      {
        name: "environment-assistant",
        link: "/environment"
      }
    ]
  },
  {
    name: "vii-services",
    link: "#",
    submenu: [
      {
        name: "vii-solutions",
        link: "/vii-solutions"
      },
      {
        name: "vii-yours",
        link: "/vii-yours"
      }
    ]
  },
  {
    name: "vii-models",
    link: "#",
    submenu: [
      {
        name: "classifiers",
        link: "/vii-classifier"
      },
      {
        name: "regressors",
        link: "/vii-regressor"
      }
    ]
  },
  {
    name: "vii-support",
    link: "#",
    submenu: [
      {
        name: "get-help",
        link: "/get-help"
      },
      {
        name: "explore-support",
        link: "/explore-support"
      }
    ]
  },
  {
    name: "search",
    link: "#",
    icon: <CiSearch size={18}/>,
  },
];