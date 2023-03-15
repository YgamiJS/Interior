import React from "react";
import { IRoute } from "@/types/types";
import { Home } from "@/Pages/Home/Home";
import { Shop } from "@/Pages/Shop/Shop";
import { Product } from "@/Pages/Product/Product";
import { Basket } from "@/Pages/Basket/Basket";
import { ErrorPage } from "@/Pages/Error/ErrorPage";

export const publicRoutes: IRoute[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/:id",
    element: <Product />,
  },
  {
    path: "/basket/",
    element: <Basket />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
