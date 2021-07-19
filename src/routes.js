import Dashboard from "Dashboard";
import Pricing from "Dashboard";
import Rtl from "Dashboard";
import RegularTables from "Dashboard";
import Widgets from "Dashboard";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Pages",
    icon: "tim-icons icon-image-02",
    state: "pagesCollapse",
    views: [
      {
        path: "/pricing",
        name: "Pricing",
        mini: "P",
        component: Pricing,
        layout: "/auth",
      },
      {
        path: "/rtl-support",
        name: "RTL Support",
        mini: "RS",
        component: Rtl,
        layout: "/rtl",
      },
    ],
  },
  {
    collapse: true,
    name: "Tables",
    icon: "tim-icons icon-puzzle-10",
    state: "tablesCollapse",
    views: [
      {
        path: "/regular-tables",
        name: "Regular Tables",
        mini: "RT",
        component: RegularTables,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/widgets",
    name: "Widgets",
    icon: "tim-icons icon-settings",
    component: Widgets,
    layout: "/admin",
  },
];

export default routes;
