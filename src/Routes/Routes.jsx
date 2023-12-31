import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> </MainLayout>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: "menu",
        element: <Menu> </Menu>,
      },
      {
        path: "order/:category",
        element: <Order> </Order>,
      },
      // {
      //   path: "order",
      //   element: <Order> </Order>,
      // },
    ],
  },
]);
