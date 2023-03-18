import React from "react";
import { IRoute } from "@/types/types";
import { Home } from "@/Pages/Home/Home";
import { Shop } from "@/Pages/Shop/Shop";
import { ProductPage } from "@/Pages/ProductPage/ProductPage";
import { Basket } from "@/Pages/Basket/Basket";
import { ErrorPage } from "@/Pages/Error/ErrorPage";
import { Login } from "@/Pages/Auth/Login/Login";
import { SingIn } from "@/Pages/Auth/SingIn/SingIn";

export const publicRoutes: IRoute[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/singin",
    element: <SingIn />,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/:id",
    element: <ProductPage />,
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
